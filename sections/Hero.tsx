"use client"
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between children
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between text-center px-6 md:px-16 lg:px-24">
      {/* Left Content */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 justify-center text-center space-y-6"
      >
        <motion.h1 variants={item} className="text-4xl md:text-8xl font-bold">
          Hi, I’m <span className="text-blue-600">Divyansh</span>
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-xl md:text-5xl text-gray-600"
        >
          Full Stack Developer
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row gap-4 justify-center "
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
