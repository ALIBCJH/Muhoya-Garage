// src/Pages/Org/OrgPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrgPage = () => {
  const [organizations, setOrganizations] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // Replace with API call later
    const mockOrgs = [
      { id: 1, name: "Kenya Power Ltd", address: "Nairobi, Kenya", vehicles: 5 },
      { id: 2, name: "Safaricom PLC", address: "Westlands, Nairobi", vehicles: 12 },
    ];
    setOrganizations(mockOrgs);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Organizations</h1>
        <Link
          to="/organizations/new"
          className="px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600 transition"
        >
          + Add Organization
        </Link>
      </div>

      {organizations.length > 0 ? (
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-center">Vehicles</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{org.name}</td>
                <td className="px-4 py-2">{org.address}</td>
                <td className="px-4 py-2 text-center">{org.vehicles}</td>
                <td className="px-4 py-2 text-center">
                  <Link
                    to={`/maintenance/${org.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No organizations available.</p>
      )}
    </div>
  );
};

export default OrgPage;
