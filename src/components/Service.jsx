import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VehicleService() {
  const { regNo } = useParams();
  const navigate = useNavigate();

  const [parts, setParts] = useState([{ name: "", code: "", quantity: "", price: "" }]);
  const [labourCost, setLabourCost] = useState("");
  const [profit, setProfit] = useState(null);

  const handlePartChange = (index, field, value) => {
    const updatedParts = [...parts];
    updatedParts[index][field] = value; // allow free input
    setParts(updatedParts);
  };

  const addPart = () => setParts([...parts, { name: "", code: "", quantity: "", price: "" }]);

  const removePart = (index) => setParts(parts.filter((_, i) => i !== index));

  const calculateProfit = () => {
    const totalPartsCost = parts.reduce(
      (sum, p) => sum + Number(p.quantity || 0) * Number(p.price || 0),
      0
    );
    const totalRevenue = totalPartsCost + Number(labourCost || 0);
    const mockCostPrice = totalPartsCost * 0.7; // Example: assume 70% cost
    const profitAmount = totalRevenue - mockCostPrice - Number(labourCost || 0);
    setProfit(profitAmount.toFixed(2));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
        Service for Vehicle: <span className="text-blue-600">{decodeURIComponent(regNo)}</span>
      </h1>

      {/* Parts Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Parts Used</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Part Name</th>
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-center">Qty</th>
                <th className="px-4 py-2 text-center">Price (Sh)</th>
                <th className="px-4 py-2 text-center">Amount (Sh)</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Part name"
                      value={part.name}
                      onChange={(e) => handlePartChange(index, "name", e.target.value)}
                      className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Code"
                      value={part.code}
                      onChange={(e) => handlePartChange(index, "code", e.target.value)}
                      className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="text"
                      placeholder="Qty"
                      value={part.quantity}
                      onChange={(e) => handlePartChange(index, "quantity", e.target.value)}
                      className="w-20 border px-2 py-1 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="text"
                      placeholder="Price"
                      value={part.price}
                      onChange={(e) => handlePartChange(index, "price", e.target.value)}
                      className="w-28 border px-2 py-1 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    Sh {Number(part.quantity || 0) * Number(part.price || 0)}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => removePart(index)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addPart}
          className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
        >
          + Add Part
        </button>
      </div>

      {/* Labour Cost */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8 max-w-md">
        <label className="block font-medium text-gray-700 mb-2">Labour Cost (Sh)</label>
        <input
          type="text"
          placeholder="Enter labour cost"
          value={labourCost}
          onChange={(e) => setLabourCost(e.target.value)}
          className="border px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Calculate Profit */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={calculateProfit}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition w-full sm:w-auto"
        >
          Calculate Profit
        </button>
      </div>

      {/* Profit Display */}
      {profit !== null && (
        <div className="p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow max-w-md">
          <p className="text-lg text-gray-800">
            Profit for this service: <span className="font-bold text-green-700">Sh {profit}</span>
          </p>
        </div>
      )}
    </div>
  );
}
