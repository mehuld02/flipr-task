import React, { useState, useEffect } from "react";
import { adminAddClient, adminGetClients } from "../services/api";

export default function AdminClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    adminGetClients()
      .then(setClients)
      .catch(() => {});
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      await adminAddClient(fd);
      alert("Client added");
      const newList = await adminGetClients();
      setClients(newList);
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Error adding client");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Add Client</h2>
      <form
        onSubmit={handleAdd}
        className="grid gap-3 max-w-md bg-white p-4 rounded shadow"
      >
        <input
          name="name"
          placeholder="Client Name"
          className="p-2 border rounded"
          required
        />
        <input
          name="designation"
          placeholder="Designation"
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
          Add Client
        </button>
      </form>

      <h3 className="mt-6 font-semibold">Existing Clients</h3>
      <div className="grid gap-3 mt-3">
        {clients.map((c) => (
          <div
            key={c._id || c.id}
            className="bg-white p-3 rounded shadow flex items-center gap-4"
          >
            <img
              src={c.imageUrl}
              alt={c.name}
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-600">{c.designation}</div>
              <div className="text-sm text-gray-600">{c.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
