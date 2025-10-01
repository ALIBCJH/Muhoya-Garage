// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Add padding-top equal to navbar height so content is not hidden */}
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
