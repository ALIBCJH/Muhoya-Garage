import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VehicleService() {
  const { regNo } = useParams();
  const navigate = useNavigate();

  const [parts, setParts] = useState([{ name: "", code: "", quantity: 1, price: 0 }]);
  const [labourCost, setLabourCost] = useState(0);
  const [profit, setProfit] = useState(null);

  const handlePartChange = (index, field, value) => {
    const updatedParts = [...parts];
    updatedParts[index][field] =
      field === "quantity" || field === "price" ? Number(value) : value;
    setParts(updatedParts);
  };

  const addPart = () =>
    setParts([...parts, { name: "", code: "", quantity: 1, price: 0 }]);

  const removePart = (index) => setParts(parts.filter((_, i) => i !== index));

  const calculateRevenue = () => {
    const totalPartsCost = parts.reduce((sum, p) => sum + p.quantity * p.price, 0);
    const totalRevenue = totalPartsCost + labourCost;
    const mockCostPrice = totalPartsCost * 0.7; // Example: assume 70% cost
    const profitAmount = totalRevenue - mockCostPrice - labourCost;
    setProfit(profitAmount);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Service for Vehicle:{" "}
        <span className="text-blue-600">{decodeURIComponent(regNo)}</span>
      </h1>

      {/* Parts Section */}
      <div className="bg-white shadow rounded-xl p-6">
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
                      placeholder="Enter part name"
                      value={part.name}
                      onChange={(e) => handlePartChange(index, "name", e.target.value)}
                      className="w-full border px-2 py-1 rounded"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Part code"
                      value={part.code}
                      onChange={(e) => handlePartChange(index, "code", e.target.value)}
                      className="w-full border px-2 py-1 rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="number"
                      placeholder="Qty"
                      value={part.quantity}
                      min="1"
                      onChange={(e) =>
                        handlePartChange(index, "quantity", e.target.value)
                      }
                      className="w-20 border px-2 py-1 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <input
                      type="number"
                      placeholder="Price"
                      value={part.price}
                      min="0"
                      onChange={(e) =>
                        handlePartChange(index, "price", e.target.value)
                      }
                      className="w-28 border px-2 py-1 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    Sh {part.quantity * part.price}
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
          className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          + Add Part
        </button>
      </div>

      {/* Labour Cost */}
      <div className="mt-8 bg-white shadow rounded-xl p-6 max-w-md">
        <label className="block font-medium text-gray-700 mb-2">
          Labour Cost (Sh)
        </label>
        <input
          type="number"
          placeholder="Enter labour cost"
          value={labourCost}
          onChange={(e) => setLabourCost(Number(e.target.value))}
          className="border px-4 py-2 rounded w-full"
        />
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={calculateRevenue}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          💰 Calculate Revenue
        </button>
      </div>

      {/* Profit Display */}
      {profit !== null && (
        <div className="mt-6 p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow">
          <p className="text-lg text-gray-800">
            For this service, your <span className="font-semibold">Profit</span> is:{" "}
            <span className="font-bold text-green-700">Sh {profit}</span>
          </p>
        </div>
      )}
    </div>
  );
}
