import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-50 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
        Muhoya Garage Management System
      </h1>

      <p className="text-gray-600 text-base sm:text-lg text-center max-w-md">
        Manage your clients, vehicles, and revenue with ease.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
        <button
          onClick={() => navigate("/organizations")}
          className="w-full sm:w-auto px-6 py-4 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          Organizational Data
        </button>

        <button
          onClick={() => navigate("/clients")}
          className="w-full sm:w-auto px-6 py-4 bg-teal-400 text-white rounded-lg shadow-lg hover:bg-teal-500 transition"
        >
          Other Clients Data
        </button>
      </div>
    </div>
  );
}
