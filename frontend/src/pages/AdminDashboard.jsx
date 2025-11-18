import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const stats = [
    { title: "Projects", value: 12, link: "/admin/projects" },
    { title: "Clients", value: 8, link: "/admin/clients" },
    { title: "Contacts", value: 34, link: "/admin/contacts" },
    { title: "Subscribers", value: 45, link: "/admin/subscribers" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            to={stat.link}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <p className="text-gray-500 font-medium">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/admin/projects"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Manage Projects
          </Link>
          <Link
            to="/admin/clients"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Manage Clients
          </Link>
          <Link
            to="/admin/contacts"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            View Contacts
          </Link>
          <Link
            to="/admin/subscribers"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            View Subscribers
          </Link>
        </div>
      </div>
    </div>
  );
}
