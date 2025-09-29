import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Maintenance() {
  const [selectedOrg, setSelectedOrg] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const orgs = ["Org A", "Org B", "Org C"];
  const vehicles = {
    "Org A": [
      { type: "Car", makeModel: "Toyota Corolla", regNo: "KAA 123A" },
      { type: "Truck", makeModel: "Isuzu D-Max", regNo: "KBB 456B" },
      { type: "Van", makeModel: "Nissan NV200", regNo: "KCC 789C" },
      { type: "Car", makeModel: "Honda Civic", regNo: "KDD 101D" },
      { type: "Truck", makeModel: "Ford Ranger", regNo: "KEE 202E" },
    ],
    "Org B": [
      { type: "Car", makeModel: "Mazda 3", regNo: "KFF 303F" },
      { type: "Truck", makeModel: "Toyota Hilux", regNo: "KGG 404G" },
    ],
  };

  const displayedVehicles =
    selectedOrg && vehicles[selectedOrg]
      ? vehicles[selectedOrg].filter((v) =>
          v.makeModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          v.regNo.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Maintenance
      </h1>

      {/* Organization Dropdown */}
      <div className="mb-4 max-w-sm w-full">
        <label className="block mb-2 font-medium text-gray-700">
          Select Organization:
        </label>
        <select
          value={selectedOrg}
          onChange={(e) => setSelectedOrg(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        >
          <option value="">-- Choose an Organization --</option>
          {orgs.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      {/* Search Bar */}
      {selectedOrg && (
        <div className="mb-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Search vehicle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
      )}

      {/* Vehicle Listing */}
      {selectedOrg && (
        <div className="overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
            Vehicles:
          </h2>
          <ul className="space-y-2">
            {displayedVehicles.slice(0, 5).map((v, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <span className="font-medium">{v.type}</span>
                  <span>{v.makeModel}</span>
                  <span className="font-mono">{v.regNo}</span>
                </div>
                <Link
                  to={`/service/${encodeURIComponent(v.regNo)}`}
                  className="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition mt-2 sm:mt-0"
                >
                  Start Service
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
