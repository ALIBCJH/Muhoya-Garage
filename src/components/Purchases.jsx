import React, { useState } from "react";

const Purchases = () => {
  const [parts, setParts] = useState([
    {
      id: 1,
      partName: "Brake Pads",
      buyingPrice: 1500,
      sellingPrice: "2000-3000",
      purchaseDate: "2025-09-20",
      partCode: "BP-001",
    },
  ]);

  const [formData, setFormData] = useState({
    partName: "",
    buyingPrice: "",
    sellingPrice: "",
    purchaseDate: "",
    partCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParts([
      ...parts,
      {
        id: parts.length + 1,
        ...formData,
      },
    ]);
    setFormData({
      partName: "",
      buyingPrice: "",
      sellingPrice: "",
      purchaseDate: "",
      partCode: "",
    });
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Purchases - Spare Parts
      </h1>

      {/* Add new purchase form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-lg shadow mb-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="partName"
            placeholder="Part Name"
            value={formData.partName}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="number"
            name="buyingPrice"
            placeholder="Buying Price"
            value={formData.buyingPrice}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="sellingPrice"
            placeholder="Selling Price (e.g., 2000-3000)"
            value={formData.sellingPrice}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="partCode"
            placeholder="Part Code"
            value={formData.partCode}
            onChange={handleChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Purchase
        </button>
      </form>

      {/* Stock table */}
      <h2 className="text-xl font-semibold mb-2">Current Stock</h2>
      {parts.length === 0 ? (
        <p className="text-gray-600">No stock available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Part Name</th>
                <th className="border p-2">Buying Price</th>
                <th className="border p-2">Selling Price</th>
                <th className="border p-2">Date of Purchase</th>
                <th className="border p-2">Part Code</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part) => (
                <tr
                  key={part.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="border p-2">{part.partName}</td>
                  <td className="border p-2">{part.buyingPrice}</td>
                  <td className="border p-2">{part.sellingPrice}</td>
                  <td className="border p-2">{part.purchaseDate}</td>
                  <td className="border p-2">{part.partCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Purchases;
