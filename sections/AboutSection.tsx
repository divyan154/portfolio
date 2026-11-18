"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-4 w-72"
          >
            <div className="relative w-64 h-64 overflow-hidden rounded-lg">
              <Image
                src="/myphoto.jpg"
                alt="Divyansh Sharma"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <p className="text-center mt-3 text-text-primary font-medium">
              Divyansh Sharma
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            AI Full-Stack Engineer building production-ready software and
            integrating AI into real-world applications. Currently at{" "}
            <span className="font-semibold text-accent-primary">Zintellix</span>,
            working on RAG agents, data connectors, and AI-powered features. My
            interests lie in
            <span className="font-semibold text-accent-primary">
              {" "}full stack development
            </span>
            ,{" "}
            <span className="font-semibold text-accent-secondary">
              AI engineering
            </span>
            , and{" "}
            <span className="font-semibold text-purple-400">distributed systems</span>.
          </p>

          <p className="text-text-muted">
            I graduated from IIT (ISM) Dhanbad in 2024. I work extensively with
            FastAPI, Next.js, Node.js, Go, PostgreSQL, MongoDB, Docker, and AWS.
            Apart from engineering, I have a deep interest in Japanese language and
            playing sports.
          </p>

          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1ZMTxNKkKLGguuQJAzdFXiGIhB6srDgHo/view?usp=drivesdk"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent-primary text-accent-primary rounded-lg font-medium hover:bg-accent-primary/10 transition-colors duration-200"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
