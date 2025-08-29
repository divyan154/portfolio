"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-200 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-200 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-200 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-8 py-16 z-10"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800"
          >
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Divyansh
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl md:text-3xl text-gray-600 font-medium max-w-2xl leading-relaxed"
          >
            Full Stack Developer & ML Enthusiast
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-500 max-w-2xl leading-relaxed"
          >
            I build exceptional digital experiences that make an impact
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
