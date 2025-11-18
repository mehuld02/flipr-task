import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            R
          </div>
          <div className="font-semibold">Real Estate</div>
        </div>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
