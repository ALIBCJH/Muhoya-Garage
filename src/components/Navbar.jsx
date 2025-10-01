import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuImg from "../assets/download.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Dashboard", to: "/dashboard", color: "bg-green-500 hover:bg-green-600" },
    { name: "Purchases", to: "/purchases", color: "bg-red-500 hover:bg-red-600" },
  ];

  return (
    <nav className="bg-gray-50 shadow-md fixed w-full z-50">
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
              className="p-2 bg-gray-200 rounded shadow focus:outline-none hover:bg-gray-300 transition"
              aria-label="Toggle menu"
            >
              <img
                src={menuImg}
                alt="Menu"
                className="h-8 w-8"
                style={{
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-50 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 text-white font-semibold rounded shadow transition ${link.color}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
