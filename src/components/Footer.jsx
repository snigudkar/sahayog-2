import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          email: email,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus("Thanks for subscribing!");
        setEmail("");
      })
      .catch(() => {
        setStatus("Oops! Something went wrong.");
      });
  };

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-neutral-800 text-white"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </div>

        {/* Contact and Social Links */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">📍 Phone: +91 9049366343</p>
            <p className="mb-2">📍 Email: contact@sahayog.org</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Sahayog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
