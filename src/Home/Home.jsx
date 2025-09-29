// src/Home/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Muhoya Garage Management System
      </h1>

      <p className="text-gray-600 text-lg text-center">
        Manage your clients, vehicles, and revenue with ease.
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/organizations")}
          className="px-8 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          Organizational Data
        </button>

        <button
          onClick={() => navigate("/clients")}
          className="px-8 py-4 bg-teal-400 text-white rounded-lg shadow-lg hover:bg-teal-500 transition"
        >
          Other Clients Data
        </button>
      </div>
    </div>
  );
}
