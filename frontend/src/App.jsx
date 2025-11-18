import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminClients from "./pages/AdminClients";
import AdminContacts from "./pages/AdminContacts";
import AdminSubscribers from "./pages/AdminSubscribers";
import AdminLayout from "./admin/AdminLayout";
import ManageProjects from "./admin/pages/ManageProjects";
import ManageClients from "./admin/pages/ManageClients";
import ContactList from "./admin/pages/ContactList";
import Subscribers from "./admin/pages/Subscribers";
import AdminHome from "./admin/pages/AdminHome";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/clients" element={<AdminClients />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/subscribers" element={<AdminSubscribers />} />
        <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminHome />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="clients" element={<ManageClients />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="subscribers" element={<Subscribers />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="p-8">
              Page not found — <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
