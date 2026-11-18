import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAppwrite,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiExpress,
  SiClerk,
  SiLangchain,
  SiDocker,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="text-cyan-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-text-primary text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-2xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  Git: <FaGitAlt className="text-red-500 text-2xl" />,
  AWS: <FaAws className="text-orange-400 text-2xl" />,
  AppWrite: <SiAppwrite className="text-pink-500 text-2xl" />,
  Supabase: <RiSupabaseFill className="text-green-500 text-2xl" />,
  Prisma: <SiPrisma className="text-text-primary text-2xl" />,
  Express: <SiExpress className="text-text-primary text-2xl" />,
  Clerk: <SiClerk className="text-text-primary text-2xl" />,
  LangChain: <SiLangchain className="text-green-400 text-2xl" />,
  Docker: <SiDocker className="text-blue-400 text-2xl" />,
  BullMQ: <FaNodeJs className="text-red-400 text-2xl" />,
};

export default function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 my-4">
      {tech.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-2 bg-surface-2 rounded-md"
        >
          {techIcons[t]}
          <span className="text-text-secondary text-sm font-medium">{t}</span>
        </div>
      ))}
    </div>
  );
}
