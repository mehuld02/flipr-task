import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">Admin Panel</div>
          <nav className="space-x-4 text-sm">
            <Link to="/admin/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/admin/clients" className="hover:underline">
              Clients
            </Link>
            <Link to="/admin/contacts" className="hover:underline">
              Contacts
            </Link>
            <Link to="/admin/subscribers" className="hover:underline">
              Subscribers
            </Link>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
}
