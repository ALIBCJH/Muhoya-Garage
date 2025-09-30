import React from "react";
import { useNavigate } from "react-router-dom";

const ClientPage = () => {
  const navigate = useNavigate();

  // Mock list of clients (replace later with API data)
  const clients = [
    { id: 1, name: "John Doe", email: "john@example.com", vehicle: "Toyota Prado" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", vehicle: "Nissan X-Trail" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", vehicle: "Mazda Demio" },
  ];

  return (
    <div className="p-6">
      {/* Header with button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button
          onClick={() => navigate("/clients/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add New Client
        </button>
      </div>

      {/* List of clients */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Service Vehicle</th>
              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{client.id}</td>
                <td className="p-3 border-b">{client.name}</td>
                <td className="p-3 border-b">{client.email}</td>
                <td className="p-3 border-b">{client.vehicle}</td>
                <td className="p-3 border-b text-center">
                  <button
                    onClick={() => navigate(`/maintenance/${client.id}`)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Start Service
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientPage;
