// src/admin/pages/AdminHome.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex flex-col items-center justify-center animate-gradient-bg">
      <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-3xl p-12 max-w-lg text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome, Admin!
        </h1>
        <p className="text-gray-700 mb-8">
          Choose a section to manage your dashboard.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/admin/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Projects
          </Link>
          <Link
            to="/admin/clients"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Clients
          </Link>
          <Link
            to="/admin/contacts"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Contacts
          </Link>
          <Link
            to="/admin/subscribers"
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
          >
            Subscribers
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient-bg {
          background-size: 300% 300%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
