import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientPage = () => {
  const navigate = useNavigate();

  // Mock list of clients
  const clientsData = [
    { id: 1, name: "John Doe", email: "john@example.com", vehicle: "Toyota Prado" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", vehicle: "Nissan X-Trail" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", vehicle: "Mazda Demio" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered clients based on search
  const filteredClients = clientsData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Clients</h1>
        <button
          onClick={() => navigate("/clients")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
        >
          + Add New Client
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email, or vehicle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-sm sm:text-base">ID</th>
              <th className="px-3 py-2 text-left text-sm sm:text-base">Name</th>
              <th className="px-3 py-2 text-left text-sm sm:text-base">Email</th>
              <th className="px-3 py-2 text-left text-sm sm:text-base">Service Vehicle</th>
              <th className="px-3 py-2 text-center text-sm sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm sm:text-base">{client.id}</td>
                  <td className="px-3 py-2 text-sm sm:text-base">{client.name}</td>
                  <td className="px-3 py-2 text-sm sm:text-base">{client.email}</td>
                  <td className="px-3 py-2 text-sm sm:text-base">{client.vehicle}</td>
                  <td className="px-3 py-2 text-center">
                    <button
                      onClick={() => navigate(`/maintenance/${client.id}`)}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm sm:text-base"
                    >
                      Start Service
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientPage;
