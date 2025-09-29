import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Organizations", to: "/organizations", color: "bg-green-500 hover:bg-green-600" },
    { name: "Clients", to: "/clients", color: "bg-purple-500 hover:bg-purple-600" },
    { name: "Maintenance", to: "/maintenance", color: "bg-red-500 hover:bg-red-600" },
  ];

  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800">Welcome Back</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-4 py-2 text-white font-semibold rounded shadow transition ${link.color}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 space-y-2 bg-gray-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)} // close menu on click
              className={`block px-4 py-2 text-white font-semibold rounded shadow transition ${link.color}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
