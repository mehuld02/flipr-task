import React, { useEffect, useState } from "react";
import ClientForm from "../components/ClientForm";
import AdminTable from "../components/AdminTable";
import axios from "axios";

export default function ManageClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/clients");
      setClients(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load clients");
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
          <img
            src={val}
            alt=""
            className="w-20 h-20 object-cover rounded-full"
          />
        ) : (
          "—"
        ),
    },
    { key: "name", label: "Name" },
    { key: "designation", label: "Designation" },
    { key: "description", label: "Description" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Manage Clients</h2>
      <ClientForm onAdded={fetch} />
      <h3 className="font-medium">Existing Clients</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AdminTable columns={columns} rows={clients} />
      )}
    </div>
  );
}
