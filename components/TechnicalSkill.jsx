"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Lightbulb,
  MessageSquare,
  Clock,
  Handshake,
} from "lucide-react";

/**
 * TechnicalSkill Component
 *
 * A fully animated skill section consisting of 3 parts:
 * 1. Technical Skills (progress bars)
 * 2. Soft Skills (interactive icon list)
 * 3. Languages (flag indicator + proficiency level)
 *
 * Built using Framer Motion for smooth reveal-on-scroll animations.
 *
 * @component
 *
 * @example
 * ```jsx
 * <TechnicalSkill />
 * ```
 *
 * @remarks
 * - Progress bars animate when scrolled into view.
 * - Language proficiency uses 10-point bubble indicators.
 * - Responsive for mobile → desktop using CSS grid + flexbox.
 *
 * @returns {JSX.Element} Animated skill section UI
 */

const skills = [
  { name: "Frontend Development", value: 95 },
  { name: "Backend Development", value: 93 },
  { name: "Database Management", value: 94 },
  { name: "Mobile App Development", value: 92 },
  { name: "UI/UX Design", value: 97 },
  { name: "Video Production & Editing", value: 87 },
];

const softSkills = [
  { icon: <Users className="w-6 h-6" />, label: "Leadership" },
  { icon: <Brain className="w-6 h-6" />, label: "Problem Solving" },
  { icon: <Lightbulb className="w-6 h-6" />, label: "Adaptability" },
  { icon: <MessageSquare className="w-6 h-6" />, label: "Communication" },
  { icon: <Clock className="w-6 h-6" />, label: "Time Management" },
  { icon: <Handshake className="w-6 h-6" />, label: "Teamwork" },
];

const languages = [
  { flag: "https://hatscripts.github.io/circle-flags/flags/id.svg", name: "Indonesia", filled: 10 },
  { flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg", name: "English", filled: 8 },
  { flag: "https://hatscripts.github.io/circle-flags/flags/cn.svg", name: "Mandarin", filled: 7 },
  { flag: "https://hatscripts.github.io/circle-flags/flags/jp.svg", name: "Japanese", filled: 6 },
];

export default function TechnicalSkill() {
  return (
    <section className="w-full space-y-24 mt-16">
      <div className="space-y-8">
        <h3 className="text-4xl font-bold">Technical Skills</h3>

        <div className="space-y-7">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/40 backdrop-blur-md border border-white/30 p-5 rounded-2xl shadow-md"
            >
              <div className="flex justify-between text-sm font-semibold text-black mb-3">
                <span>{skill.name}</span>
                <span className="opacity-60">{skill.value}%</span>
              </div>

              <div className="w-full bg-gray-200/70 h-3 rounded-xl overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-4xl font-bold">Soft Skills</h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {softSkills.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur border border-white/40 rounded-2xl shadow-sm hover:shadow-lg duration-300"
            >
              <span className="text-blue-600">{s.icon}</span>
              <span className="text-lg font-medium">{s.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="space-y-10">
        <h3 className="text-4xl font-bold">Language</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur border border-white/40 p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-14 h-14 rounded-full shadow-sm mb-3"
              />

              <h4 className="text-lg font-semibold">{lang.name}</h4>

              <p className="text-sm text-gray-600 mb-4">
                {lang.filled >= 9
                  ? "Fluent"
                  : lang.filled >= 7
                  ? "Advanced"
                  : lang.filled >= 5
                  ? "Intermediate"
                  : "Basic"}
              </p>

              <div className="flex gap-1 justify-center">
                {Array.from({ length: 10 }).map((_, j) => (
                  <span
                    key={j}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      j < lang.filled ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
