import React, { useEffect, useState } from "react";
import ProjectForm from "../components/ProjectForm";
import AdminTable from "../components/AdminTable";
import axios from "axios";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    {
      key: "imageUrl",
      label: "Image",
      render: (val) =>
        val ? (
          <img src={val} alt="" className="w-32 h-20 object-cover rounded" />
        ) : (
          "—"
        ),
    },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Projects</h2>
      <ProjectForm onAdded={fetch} />
      <h3 className="font-medium">Existing Projects</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AdminTable columns={columns} rows={projects} />
      )}
    </div>
  );
}
