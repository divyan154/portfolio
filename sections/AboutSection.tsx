"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* --- IMAGE SIDE --- */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: 1, scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-xl w-72"
          >
            <div className="relative w-64 h-64 overflow-hidden rounded-lg">
              <Image
                src="/myphoto.jpg"
                alt="My Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 hover:brightness-100 transition duration-500"
              />
            </div>
            <p className="text-center mt-3 text-gray-700 font-medium">
              Divyansh Sharma
            </p>
          </motion.div>
        </div>

        {/* --- TEXT SIDE --- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Name Is Divyansh Sharma
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I have completed my undergraduation from IIT Dhanbad in 2024. I have
            worked as a full stack developer intern at cybermind works and
            currently I am looking for developer roles. I’m passionate about
            building high-performance web applications. My interests lie in
            <span className="font-semibold text-blue-600">
              {" "}
              full stack development
            </span>
            ,{" "}
            <span className="font-semibold text-green-600">
              machine learning
            </span>
            , and{" "}
            <span className="font-semibold text-purple-600">robotics</span>.
          </p>

          {/* Skills */}

          <p className="text-gray-500">
            I have worked extensively with Node.js, Express.js, FastApi,React.js
            (Nextjs), mongodb , AWS to name a few. Apart from academics I have
            deep interest in music and playing sports.
          </p>

          {/* Resume Button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/13So8tF2sHE2OC6HyURCLk3FUdbuGjd6q/view?usp=sharing"
              download
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              target="_blank"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
