import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VehicleService() {
  const { regNo } = useParams();
  const navigate = useNavigate();

  const [parts, setParts] = useState([{ name: "", quantity: 1, price: 0, code: "" }]);
  const [labourCost, setLabourCost] = useState(0);
  const [profit, setProfit] = useState(null);

  const handlePartChange = (index, field, value) => {
    const updatedParts = [...parts];
    updatedParts[index][field] = field === "quantity" || field === "price" ? Number(value) : value;
    setParts(updatedParts);
  };

  const addPart = () => setParts([...parts, { name: "", quantity: 1, price: 0, code: "" }]);
  const removePart = (index) => setParts(parts.filter((_, i) => i !== index));

  const calculateRevenue = () => {
    const totalPartsCost = parts.reduce((sum, p) => sum + p.quantity * p.price, 0);
    const totalRevenue = totalPartsCost + labourCost;
    const mockCostPrice = totalPartsCost * 0.7; // Example: 70% expense
    const profitAmount = totalRevenue - mockCostPrice - labourCost;
    setProfit(profitAmount);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
      >
        Back
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Service for Vehicle: <span className="font-mono">{decodeURIComponent(regNo)}</span>
      </h1>

      {/* Parts Section */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-700">Parts Used</h2>
      <div className="space-y-4">
        {parts.map((part, index) => (
          <div key={index} className="flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Part Name"
              value={part.name}
              onChange={(e) => handlePartChange(index, "name", e.target.value)}
              className="border px-2 py-1 rounded w-full sm:w-36"
            />
            <input
              type="number"
              placeholder="Qty"
              value={part.quantity}
              onChange={(e) => handlePartChange(index, "quantity", e.target.value)}
              className="border px-2 py-1 rounded w-1/4 sm:w-20"
            />
            <input
              type="number"
              placeholder="Price"
              value={part.price}
              onChange={(e) => handlePartChange(index, "price", e.target.value)}
              className="border px-2 py-1 rounded w-1/2 sm:w-28"
            />
            <input
              type="text"
              placeholder="Code"
              value={part.code}
              onChange={(e) => handlePartChange(index, "code", e.target.value)}
              className="border px-2 py-1 rounded w-1/2 sm:w-28"
            />
            <button
              onClick={() => removePart(index)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addPart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add Part
      </button>

      {/* Labour Cost */}
      <div className="mt-6 max-w-sm w-full">
        <label className="block font-medium mb-2">Labour Cost (Sh)</label>
        <input
          type="number"
          value={labourCost}
          onChange={(e) => setLabourCost(Number(e.target.value))}
          className="border px-4 py-2 rounded w-full sm:w-40"
        />
      </div>

      {/* Calculate Revenue */}
      <button
        onClick={calculateRevenue}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Calculate Revenue
      </button>

      {/* Profit Display */}
      {profit !== null && (
        <div className="mt-4 p-4 bg-yellow-100 text-gray-800 rounded shadow">
          <p>
            For this service, you made a profit of <span className="font-bold">Sh {profit}</span>
          </p>
        </div>
      )}
    </div>
  );
}
