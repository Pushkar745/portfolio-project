"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     alert(`Thanks ${form.name}, your message has been sent!`);
//     setForm({ name: "", email: "", message: "" });
//   };

  return (
    <>
      <Navbar />
      <main className="p-10 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Me</h1>

        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form> */}
      </main>
    </>
  );
}
