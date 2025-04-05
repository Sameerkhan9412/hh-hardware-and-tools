'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    product: "",
    location: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, mobile, product, location, message } = formData;
    if (!name || !email || !mobile || !product || !location || !message) {
      toast.error("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    toast.loading("Sending message...");

    try {
      const response = await axios.post("/api/contact", formData);
      if (response.data.success) {
        toast.dismiss();
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          product: "",
          location: "",
          message: ""
        });
      } else {
        toast.dismiss();
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={submitForm} className="bg-white text-black p-4 gap-4 mb-6 col-span-5 md:col-span-3">
      <h1 className="font-bold text-2xl mb-6">Send us a message</h1>

      <div className="grid grid-cols-2 gap-4">
        <label>Full Name<br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            placeholder="Name"
          />
        </label>
        <label>Email<br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            placeholder="Email"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <label>Mobile<br/>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            placeholder="+91 9876543210"
            pattern="[+0-9\s-]+"
          />
        </label>
        <label>Product<br/>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            placeholder="e.g. Hosting Service"
          />
        </label>
      </div>

      <div className="mt-4">
        <label>Location<br/>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            placeholder="e.g. Aligarh, Uttar Pradesh"
          />
        </label>
      </div>

      <div className="mt-4">
        <label>Message<br/>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 w-full p-2 rounded-lg border-[#E0E0E0]"
            rows={4}
            placeholder="Your message here..."
          ></textarea>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-6 bg-red-600 text-white px-4 p-2 rounded-lg hover:bg-red-500 transition-all ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
