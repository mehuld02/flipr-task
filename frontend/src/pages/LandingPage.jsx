import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getProjects,
  getClients,
  postContact,
  postSubscribe,
} from "../services/api";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import { useForm } from "react-hook-form";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const { register, handleSubmit, reset } = useForm();
  const {
    register: regSub,
    handleSubmit: handleSub,
    reset: resetSub,
  } = useForm();

  // Fetch Projects + Clients
  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => {});
    getClients()
      .then(setClients)
      .catch(() => {});
  }, []);

  // Contact form submit
  const onContact = (data) => {
    postContact(data)
      .then(() => {
        alert("Contact submitted");
        reset();
      })
      .catch(() => alert("Error submitting"));
  };

  // Newsletter subscribe
  const onSubscribe = (data) => {
    postSubscribe(data)
      .then(() => {
        alert("Subscribed successfully");
        resetSub();
      })
      .catch(() => alert("Subscription failed"));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="space-y-24 py-16">
        {/* ================= HERO SECTION ================= */}
        <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Designing Experiences That Inspire Growth
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              We turn ideas into powerful digital solutions — helping businesses
              grow through creativity, design and smart marketing.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Get a Free Consultation
            </button>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold mb-4">Request a Callback</h3>
            <form className="space-y-4">
              <input
                placeholder="Full name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p._id}
                className="transform transition hover:-translate-y-2"
              >
                <ProjectCard project={p} />
              </div>
            ))}
            {projects.length === 0 && (
              <p className="text-gray-500 text-sm">No projects available.</p>
            )}
          </div>
        </section>

        {/* ================= CLIENTS SECTION ================= */}
        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Happy Clients</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((c) => (
              <div
                key={c._id}
                className="transition transform hover:-translate-y-2"
              >
                <ClientCard client={c} />
              </div>
            ))}
            {clients.length === 0 && (
              <p className="text-gray-500 text-sm">No clients available.</p>
            )}
          </div>
        </section>

        {/* ================= CONTACT FORM ================= */}
        <section className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit(onContact)}
            >
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="p-3 border rounded-lg"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="p-3 border rounded-lg"
              />
              <input
                {...register("mobile", { required: true })}
                placeholder="Mobile Number"
                className="p-3 border rounded-lg"
              />
              <input
                {...register("city", { required: true })}
                placeholder="City"
                className="p-3 border rounded-lg"
              />

              <div className="md:col-span-2 text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ================= NEWSLETTER SECTION ================= */}
        <section className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>

            <form
              onSubmit={handleSub(onSubscribe)}
              className="flex gap-4 max-w-lg"
            >
              <input
                {...regSub("email", { required: true })}
                placeholder="Your email address"
                className="flex-1 p-3 rounded-lg text-gray-800"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
