import React, { useState } from "react";
import axios from "axios";

export default function ProjectForm({ onAdded }) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !description || !file)
      return alert("Please fill all fields and choose an image");
    const fd = new FormData();
    fd.append("name", name);
    fd.append("description", description);
    fd.append("image", file);

    try {
      setLoading(true);
      // use axios default base if configured in services; otherwise rely on relative path
      await axios.post("/api/projects", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setName("");
      setDesc("");
      setFile(null);
      onAdded && onAdded();
      alert("Project added");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Error adding project");
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
        placeholder="Project Name"
        className="p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Project Description"
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
          {loading ? "Adding..." : "Add Project"}
        </button>
      </div>
    </form>
  );
}
