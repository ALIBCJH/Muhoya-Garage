import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Welcome Back</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/organizations"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition"
            >
              Organizations
            </Link>
            <Link
              to="/clients"
              className="px-4 py-2 bg-purple-500 text-white font-semibold rounded shadow hover:bg-purple-600 transition"
            >
              Clients
            </Link>
            <Link
              to="/maintenance"
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 transition"
            >
              Maintenance
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
