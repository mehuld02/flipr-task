import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000",
});

export const getProjects = () => API.get("/api/projects").then((r) => r.data);
export const getClients = () => API.get("/api/clients").then((r) => r.data);
export const postContact = (payload) =>
  API.post("/api/contact", payload).then((r) => r.data);
export const postSubscribe = (payload) =>
  API.post("/api/subscribe", payload).then((r) => r.data);

export const adminAddProject = (formData) =>
  API.post("/api/projects", formData);
export const adminGetProjects = () =>
  API.get("/api/projects").then((r) => r.data);
export const adminAddClient = (formData) => API.post("/api/clients", formData);
export const adminGetClients = () =>
  API.get("/api/clients").then((r) => r.data);
export const adminGetContacts = () =>
  API.get("/api/contacts").then((r) => r.data);
export const adminGetSubscribers = () =>
  API.get("/api/subscribers").then((r) => r.data);
