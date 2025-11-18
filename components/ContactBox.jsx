"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  return (
    <section className="w-full space-y-14 mt-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {[
          {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "khenichi.k@gmail.com",
            href: "mailto:khenichi.k@gmail.com",
          },
          {
            icon: <FaWhatsapp className="w-6 h-6" />,
            label: "WhatsApp",
            value: "+62-857-8112-2057",
            href: "https://wa.me/6285781122057",
          },
          {
            icon: <Instagram className="w-6 h-6" />,
            label: "Instagram",
            value: "@khenichi.k",
            href: "https://www.instagram.com/khenichi.k/",
          },
          {
            icon: <Linkedin className="w-6 h-6" />,
            label: "Linkedin",
            value: "Khenichi Kuolimpo",
            href: "https://www.linkedin.com/in/khenichi-kuolimpo-19067838a/",
          },
          {
            icon: <Github className="w-6 h-6" />,
            label: "Github",
            value: "kenycheee",
            href: "https://github.com/kenycheee",
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "DKI Jakarta",
            href: "https://www.google.com/maps?q=DKI+Jakarta",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/50 backdrop-blur border border-white/40 p-6 rounded-2xl shadow-md flex flex-col items-center text-center gap-2 cursor-pointer"
          >
            <span className="text-blue-600">{item.icon}</span>
            <h4 className="font-semibold text-lg">{item.label}</h4>
            <p className="text-gray-700 text-sm">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
