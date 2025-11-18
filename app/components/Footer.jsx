"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-28 border-t border-white/20 py-10 bg-white/30 backdrop-blur">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">

        <h2 className="text-xl font-semibold tracking-wide text-gray-900">
          KHENICHI KUOLIMPO
        </h2>

        <div className="flex gap-6">
          {[
            { icon: <Mail size={20} />, href: "mailto:khenichi.k@gmail.com" },
            { icon: <Phone size={20} />, href: "https://wa.me/6285781122057" },
            { icon: <Github size={20} />, href: "https://github.com/khenichi" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/khenichi" },
            { icon: <Instagram size={20} />, href: "https://instagram.com/khenichi" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Khenichi Kuolimpo — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
