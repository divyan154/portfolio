"use client";

import { motion } from "framer-motion";
import { Award, Globe, Bot, Terminal } from "lucide-react";

const certifications = [
  {
    name: "Intro to Claude Code",
    issuer: "Anthropic",
    icon: <Terminal className="w-8 h-8" />,
    category: "ai",
  },
  {
    name: "Claude Skills",
    issuer: "Anthropic",
    icon: <Bot className="w-8 h-8" />,
    category: "ai",
  },
  {
    name: "Claude MCP — Basics",
    issuer: "Anthropic",
    icon: <Bot className="w-8 h-8" />,
    category: "ai",
  },
  {
    name: "Claude MCP — Advanced",
    issuer: "Anthropic",
    icon: <Bot className="w-8 h-8" />,
    category: "ai",
  },
  {
    name: "Claude Hooks",
    issuer: "Anthropic",
    icon: <Bot className="w-8 h-8" />,
    category: "ai",
  },
  {
    name: "JLPT N4",
    issuer: "Japan Foundation",
    note: "Studying for N3",
    icon: <Globe className="w-8 h-8" />,
    category: "language",
  },
  {
    name: "Intermediate Japanese",
    issuer: "Asia to Japan Program",
    icon: <Globe className="w-8 h-8" />,
    category: "language",
  },
  {
    name: "Competitive Programming",
    issuer: "500+ problems solved",
    note: "Codeforces, CodeChef, LeetCode, SPOJ",
    icon: <Award className="w-8 h-8" />,
    category: "achievement",
  },
];

const categoryColors: Record<string, string> = {
  ai: "text-accent-primary",
  language: "text-amber-400",
  achievement: "text-purple-400",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Professional certifications, language qualifications, and achievements
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className={`mb-4 ${categoryColors[cert.category] || "text-accent-primary"}`}>
                {cert.icon}
              </div>
              <h3 className="text-text-primary font-semibold text-lg mb-1">
                {cert.name}
              </h3>
              <p className="text-text-muted text-sm">{cert.issuer}</p>
              {cert.note && (
                <span className={`mt-2 px-3 py-1 text-xs rounded-full ${
                  cert.category === "language"
                    ? "bg-amber-400/10 text-amber-400"
                    : cert.category === "achievement"
                    ? "bg-purple-400/10 text-purple-400"
                    : "bg-accent-primary/10 text-accent-primary"
                }`}>
                  {cert.note}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
