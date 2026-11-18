"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 z-[60] bg-gradient-to-r from-accent-primary to-accent-secondary"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <nav className="sticky top-0 z-50 bg-glass-bg border-b border-glass-border backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="text-xl font-bold gradient-text">
            Divyansh Sharma
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === href.slice(1)
                    ? "text-accent-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 z-[80] bg-surface-1 border-l border-glass-border p-8 flex flex-col gap-6"
            >
              <button
                className="self-end text-text-primary"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    activeSection === href.slice(1)
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
