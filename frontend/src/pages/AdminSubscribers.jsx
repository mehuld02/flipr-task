import React, { useEffect, useState } from "react";
import { adminGetSubscribers } from "../services/api";

export default function AdminSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    adminGetSubscribers()
      .then(setSubs)
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Subscribed Emails</h2>
      <div className="bg-white rounded shadow p-4">
        <ul className="space-y-2">
          {subs.map((s) => (
            <li key={s._id || s.id} className="text-sm">
              {s.email}
            </li>
          ))}
          {subs.length === 0 && (
            <li className="text-sm text-gray-500">No subscribers yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
