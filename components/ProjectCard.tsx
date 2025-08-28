"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TechStack from "./TechStack";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.3,
      }}
      className="h-full bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg border border-gray-200"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[16/9]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-md flex-1">{description}</p>

        {/* Tech Stack */}
        <TechStack tech={tech} />

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
