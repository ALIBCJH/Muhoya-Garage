import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  // Dummy data for vehicles repaired
  const vehicleData = [
    { name: "Repaired", value: 120 },
    { name: "Pending", value: 30 },
    { name: "In Progress", value: 20 },
  ];

  // Dummy data for revenue vs expense
  const financeData = [
    { name: "January", Revenue: 50000, Expense: 30000 },
    { name: "February", Revenue: 65000, Expense: 42000 },
    { name: "March", Revenue: 70000, Expense: 48000 },
    { name: "April", Revenue: 80000, Expense: 55000 },
  ];

  // Dummy data for store stock
  const stockData = [
    { name: "Brake Pads", stock: 15 },
    { name: "Oil Filters", stock: 5 },
    { name: "Air Filters", stock: 8 },
    { name: "Spark Plugs", stock: 25 },
    { name: "Batteries", stock: 3 },
  ];

  const COLORS = ["#4CAF50", "#FFC107", "#2196F3"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Vehicles Pie Chart */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Vehicle Repairs Status
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={vehicleData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {vehicleData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue vs Expense */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Revenue vs Expense
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#4CAF50" />
            <Bar dataKey="Expense" fill="#F44336" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stock Levels */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Store Stock Levels
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#2196F3" />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-gray-600">
          Items with stock less than 10 need restocking.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
