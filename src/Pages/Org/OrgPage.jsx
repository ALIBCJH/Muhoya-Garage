import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrgPage = () => {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate fetching data
  useEffect(() => {
    const mockOrgs = [
      { id: 1, name: "Kenya Power Ltd", address: "Nairobi, Kenya", vehicles: 5 },
      { id: 2, name: "Safaricom PLC", address: "Westlands, Nairobi", vehicles: 12 },
    ];
    setOrganizations(mockOrgs);
  }, []);

  // Filter organizations based on search term
  const filteredOrgs = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Organizations</h1>
        <button
          onClick={() => navigate("/organizations")}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition w-full sm:w-auto text-center"
        >
          + Add Organization
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-orange-200"
        />
      </div>

      {/* Responsive Table */}
      {filteredOrgs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg divide-y divide-gray-200 shadow">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Name</th>
                <th className="px-4 py-3 text-left text-sm sm:text-base">Address</th>
                <th className="px-4 py-3 text-center text-sm sm:text-base">Vehicles</th>
                <th className="px-4 py-3 text-center text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrgs.map((org) => (
                <tr key={org.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm sm:text-base">{org.name}</td>
                  <td className="px-4 py-2 text-sm sm:text-base">{org.address}</td>
                  <td className="px-4 py-2 text-center text-sm sm:text-base">{org.vehicles}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => navigate(`/maintenance/${org.id}`)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-sm sm:text-base w-full sm:w-auto"
                    >
                      Start Service
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No organizations found.</p>
      )}
    </div>
  );
};

export default OrgPage;
