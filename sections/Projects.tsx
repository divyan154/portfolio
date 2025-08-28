"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "A full-stack web app where users can create, review, and browse campgrounds.",
      image: "/yelpcamp.png",
      tech: ["Node.js", "Express", "MongoDB", "AWS"],
      link: "https://yelp-camp-ttec-bebtvss9l-divyan154s-projects.vercel.app/",
      github: "https://github.com/divyan154/yelpcamp",
    },
    {
      title: "Ai blog Application",
      description:
        "A full stack app which leverages Gemini Api to generate blogs.",
      image: "/aiapp.png",
      tech: ["Next.js", "Clerk", "AppWrite", "Tailwind CSS"],
      link: "https://aiblog-app-taupe.vercel.app/",
      github: "https://github.com/divyan154/aiblogApp",
    },
    {
      title: "Learning Management System",
      description: "A Platform like udemy Where anyone can learn anything.",
      image: "/lms.png",
      tech: ["Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://learning-management-system-sepia-one.vercel.app/",
      github: "https://github.com/divyan154/learning-management-system",
    },
    {
      title: "Job Board",
      description:
        "A centralized platform where employers can post a job and seekers can apply to a job.",
      image: "/jobboard.png",
      tech: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
      link: "https://job-board-puce-six.vercel.app/",
      github: "https://github.com/divyan154/job-board",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          My Projects
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Here are some of the projects I’ve built — showcasing my skills in
          full-stack development, modern frameworks, and real-world problem
          solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
