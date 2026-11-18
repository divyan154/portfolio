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
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 24px var(--accent-glow)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="h-full glass-card overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-[16/9]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1/80 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-text-primary text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary text-md flex-1">{description}</p>

        <TechStack tech={tech} />

        <div className="flex gap-3 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-background rounded-lg text-sm font-medium hover:opacity-90 transition"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary px-4 py-2 border border-glass-border rounded-lg text-sm font-medium hover:border-accent-primary hover:text-accent-primary transition"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
