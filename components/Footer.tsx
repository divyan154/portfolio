"use client";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/divyan154/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithubSquare />,
    href: "https://github.com/divyan154",
    label: "GitHub",
  },
  {
    icon: <RiTwitterXFill />,
    href: "https://x.com/Divyans57775024",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-text-primary text-lg mb-2 gradient-text">
              Divyansh Sharma
            </h3>
            <p className="text-text-muted text-sm">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary text-sm mb-3">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-text-muted text-sm hover:text-accent-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary text-sm mb-3">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-xl hover:text-accent-primary transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-6 text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Divyansh Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
