import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminTable from "../components/AdminTable";

export default function Subscribers() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/subscribers");
      setSubs(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    { key: "email", label: "Email" },
    {
      key: "createdAt",
      label: "Subscribed At",
      render: (val, row) => new Date(row.createdAt).toLocaleString(),
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Subscribers</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AdminTable columns={columns} rows={subs} />
      )}
    </div>
  );
}
