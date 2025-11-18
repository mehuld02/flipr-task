import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminTable from "../components/AdminTable";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/contacts");
      setContacts(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile", label: "Mobile" },
    { key: "city", label: "City" },
    {
      key: "createdAt",
      label: "Submitted At",
      render: (val, row) => new Date(row.createdAt).toLocaleString(),
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AdminTable columns={columns} rows={contacts} />
      )}
    </div>
  );
}
