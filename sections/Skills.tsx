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
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

export default function SkillsPage() {
  // Skill categories with icons
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      ],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700" />,
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-500" />,
        },
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
      ],
    },
    {
      title: "Data Science & ML",
      icon: "🤖",
      skills: [
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="text-orange-500" />,
        },
        { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-red-600" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Skills Grid */}
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 pb-3 border-b border-gray-200">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillItemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-700 text-center">
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
