// src/Pages/Clients/ClientForm.jsx
import React, { useState } from "react";

export default function ClientForm() {
  const [clientName, setClientName] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [makeModel, setMakeModel] = useState("");
  const [regNo, setRegNo] = useState("");

  // Add a vehicle to the list
  const addVehicle = () => {
    if (vehicleType && makeModel && regNo) {
      setVehicles([...vehicles, { vehicleType, makeModel, regNo }]);
      setVehicleType("");
      setMakeModel("");
      setRegNo("");
    }
  };

  // Submit client and its vehicles
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = { clientName, vehicles };
    console.log("Submitting Client:", clientData);
    // TODO: send clientData to backend API
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Client</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        {/* Client Name */}
        <div>
          <label className="block font-semibold">Client Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Vehicles Form */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Add Vehicles</h2>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Vehicle Type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            <input
              type="text"
              placeholder="Make & Model"
              value={makeModel}
              onChange={(e) => setMakeModel(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            <input
              type="text"
              placeholder="Registration Number"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              className="border rounded px-3 py-2 flex-1"
            />
            <button
              type="button"
              onClick={addVehicle}
              className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition"
            >
              Add Vehicle
            </button>
          </div>

          {/* Vehicle List */}
          {vehicles.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Vehicles Added:</h3>
              <ul className="list-disc list-inside">
                {vehicles.map((v, i) => (
                  <li key={i}>
                    {v.vehicleType} - {v.makeModel} - {v.regNo}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition mt-6"
        >
          Submit Client
        </button>
      </form>
    </div>
  );
}
