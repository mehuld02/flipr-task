import React, { useState } from "react";
import axios from "axios";

export default function ClientForm({ onAdded }) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !designation || !description || !file)
      return alert("Please fill all fields and choose an image");
    const fd = new FormData();
    fd.append("name", name);
    fd.append("designation", designation);
    fd.append("description", description);
    fd.append("image", file);

    try {
      setLoading(true);
      await axios.post("/api/clients", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setName("");
      setDesignation("");
      setDesc("");
      setFile(null);
      onAdded && onAdded();
      alert("Client added");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Error adding client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 rounded shadow grid gap-3 max-w-xl"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Client Name"
        className="p-2 border rounded"
      />
      <input
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        placeholder="Designation (e.g., CEO)"
        className="p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        className="p-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {loading ? "Adding..." : "Add Client"}
        </button>
      </div>
    </form>
  );
}
