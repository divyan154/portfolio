"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "Zintellix",
    period: "Oct 2025 — Present",
    description: [
      "Built an end-to-end event-driven communication layer using the AG-UI protocol to connect a CopilotKit UI with a FastAPI-powered RAG agent",
      "Designed and implemented connection logic for 4 third-party data connectors from scratch, including full sync functionality",
      "Engineered a full-stack PDF querying feature combining document parsing, semantic search, and dynamic chart rendering",
    ],
    tech: ["FastAPI", "Next.js", "CopilotKit", "RAG", "AG-UI"],
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Jindal Power Limited",
    period: "Jul 2024 — Feb 2025",
    description: [
      "Performed Exploratory Data Analysis on ash-water handling systems, correlating sensor telemetry with process inefficiencies",
      "Designed Data Visualization dashboards using Tableau and Excel to monitor real-time KPIs and MTBF",
    ],
    tech: ["Python", "Tableau", "Excel", "EDA"],
  },
  {
    role: "B.Tech in Mechanical Engineering",
    company: "IIT (ISM) Dhanbad",
    period: "Dec 2020 — May 2024",
    description: [
      "Bachelor of Technology from Indian Institute of Technology (ISM) Dhanbad — CGPA: 7.1/10.0",
      "Head of Public Relations Team at Concetto'22 (Annual Techno Fest of IIT ISM Dhanbad)",
      "Solved 500+ competitive programming problems across Codeforces, CodeChef, LeetCode, and SPOJ",
    ],
    tech: ["C++", "Python", "Data Structures", "Algorithms"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and education
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-accent-primary shadow-[0_0_12px_var(--accent-glow)] left-[10px] md:left-auto ${
                  index % 2 === 0 ? "md:right-[-6px]" : "md:left-[calc(0px-6px)]"
                }`}
              />

              <div className="glass-card p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-surface-2 text-accent-primary rounded-full mb-3">
                  {exp.period}
                </span>
                <h3 className="text-text-primary font-bold text-lg">
                  {exp.company}
                </h3>
                <p className="gradient-text font-semibold mb-3">{exp.role}</p>
                <ul
                  className={`space-y-2 mb-4 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-accent-primary/10 text-accent-primary rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
