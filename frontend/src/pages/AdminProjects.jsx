import React, { useState, useEffect } from "react";
import { adminAddProject, adminGetProjects } from "../services/api";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    adminGetProjects()
      .then(setProjects)
      .catch(() => {});
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      await adminAddProject(fd);
      alert("Project added");
      const newList = await adminGetProjects();
      setProjects(newList);
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Add Project</h2>
      <form
        onSubmit={handleAdd}
        className="grid gap-3 max-w-md bg-white p-4 rounded shadow"
      >
        <input
          name="name"
          placeholder="Project Name"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="p-2 border rounded"
          required
        />
        <input type="file" name="image" accept="image/*" required />
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Add Project
        </button>
      </form>

      <h3 className="mt-6 font-semibold">Existing Projects</h3>
      <div className="grid gap-3 mt-3">
        {projects.map((p) => (
          <div
            key={p._id || p.id}
            className="bg-white p-3 rounded shadow flex items-center gap-4"
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              className="w-20 h-16 object-cover rounded"
            />
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-600">{p.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
