"use client";

import { motion } from "framer-motion";
import { FaJava, FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiTypescript,
  SiKubernetes,
  SiGo,
  SiNestjs,
  SiMysql,
  SiGithubactions,
} from "react-icons/si";
import { VscSymbolMisc } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    icon: "\u{1F4BB}",
    skills: [
      { name: "Go", icon: <SiGo className="text-cyan-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    title: "Frontend",
    icon: "\u{1F3A8}",
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-text-primary" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend & Systems",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-text-primary" /> },
      { name: "gRPC", icon: <VscSymbolMisc className="text-cyan-300" /> },
    ],
  },
  {
    title: "Databases",
    icon: "\u{1F5C4}️",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-blue-300" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
    ],
  },
  {
    title: "AI & Data",
    icon: "\u{1F916}",
    skills: [
      { name: "LangChain", icon: <SiPython className="text-green-400" /> },
      { name: "RAG", icon: <SiPython className="text-accent-primary" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
      { name: "Vector DBs", icon: <SiMongodb className="text-purple-400" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const categoryVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function SkillsPage() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="glass-card p-6 border-l-2 border-accent-primary hover:glow-border transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 pb-3 border-b border-glass-border">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center p-3 bg-surface-2 rounded-lg hover:bg-accent-primary/10 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-text-secondary text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
