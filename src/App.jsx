import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Home from "./Home/Home";
import OrgForm from "./Pages/Org/OrgForm";
import OrgPage from "./Pages/Org/OrgPage";  // ✅ make sure import points here
import ClientForm from "./Pages/Clients/ClientForm";
import Maintenance from "./components/Maintenance";
import Service from "./components/Service";
import ClientPage from "./Pages/Clients/ClientPage"

import "./index.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar only if not on the landing page */}
      {location.pathname !== "/" && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Welcome />} />

          {/* Home */}
          <Route path="/home" element={<Home />} />

          {/* Organizations */}
          <Route path="/organizations" element={<OrgForm />} />   {/* For adding new org */}
          <Route path="/orgpage" element={<OrgPage />} />         {/* For listing orgs */}
          <Route path="/clientpage" element={<ClientPage />} />         {/* For listing orgs */}

          {/* Maintenance + Service */}
<Route path="/maintenance/:orgId" element={<Maintenance />} />
          <Route path="/service/:regNo" element={<Service />} />

          {/* Clients */}
          <Route path="/clients" element={<ClientForm />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
