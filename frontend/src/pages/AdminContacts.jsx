import React, { useEffect, useState } from "react";
import { adminGetContacts } from "../services/api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    adminGetContacts()
      .then(setContacts)
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Form Responses</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id || c.id} className="border-t">
                <td className="px-4 py-2">{c.name}</td>
                <td className="px-4 py-2">{c.email}</td>
                <td className="px-4 py-2">{c.mobile}</td>
                <td className="px-4 py-2">{c.city}</td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td className="p-4" colSpan={4}>
                  No contact responses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
