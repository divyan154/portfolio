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
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-black text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-600 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-2xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  Git: <FaGitAlt className="text-red-500 text-2xl" />,
  AWS: <FaAws className="text-red-500 text-2xl" />,
  AppWrite: <SiAppwrite className="text-pink-500 text-2xl" />,
  Supabase: <RiSupabaseFill className="text-green-600 bg-black text-2xl" />,
  Prisma: <SiPrisma className=" bg-blue-800 text-2xl" />,
  Express: <SiExpress className=" text-black " />,
  Clerk: <SiClerk className="bg-black" />,
};

export default function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 my-4">
      {tech.map((t, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md shadow-sm"
        >
          {techIcons[t] || <span className="text-gray-400">?</span>}
          <span className="text-gray-700 text-sm font-medium">{t}</span>
        </div>
      ))}
    </div>
  );
}
