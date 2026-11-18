"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Document AI — Chat With PDF",
    description:
      "A production-grade Full-Stack RAG system enabling semantic search across PDFs using LLMs, vector embeddings, and Qdrant. Features async job processing with BullMQ and context-aware Q&A.",
    image: "/projects/documind-ai.png",
    tech: ["Next.js", "Express", "LangChain", "Docker", "BullMQ"],
    link: "https://github.com/divyan154/rag-pdf",
    github: "https://github.com/divyan154/rag-pdf",
  },
  {
    title: "AI Blog Application",
    description:
      "A full stack app which leverages Gemini API to generate blogs.",
    image: "/projects/aiapp.png",
    tech: ["Next.js", "Clerk", "AppWrite", "Tailwind CSS"],
    link: "https://aiblog-app-taupe.vercel.app/",
    github: "https://github.com/divyan154/aiblogApp",
  },
  {
    title: "YelpCamp",
    description:
      "A full-stack web app where users can create, review, and browse campgrounds. Integrated AWS S3 for storage and secured with Passport.js.",
    image: "/projects/yelpcamp.png",
    tech: ["Node.js", "Express", "MongoDB", "AWS"],
    link: "https://github.com/divyan154/yelpcamp",
    github: "https://github.com/divyan154/yelpcamp",
  },
  {
    title: "Learning Management System",
    description: "A platform like Udemy where anyone can learn anything.",
    image: "/projects/lms.png",
    tech: ["Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/divyan154/learning-management-system",
    github: "https://github.com/divyan154/learning-management-system",
  },
  {
    title: "Job Board",
    description:
      "A centralized platform where employers can post jobs and seekers can apply.",
    image: "/projects/jobboard.png",
    tech: ["Next.js", "Prisma", "Supabase", "Tailwind CSS"],
    link: "https://github.com/divyan154/job-board",
    github: "https://github.com/divyan154/job-board",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          My Projects
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve built — showcasing my skills in
          full-stack development, AI engineering, and real-world problem solving.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
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
