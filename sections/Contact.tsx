"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { RiTwitterXFill, RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Let&apos;s discuss your next project or just say hello! I&apos;m always
          open to new opportunities and interesting conversations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
            Contact Me
          </h3>
          <p className="text-text-secondary mb-8 text-center md:text-left max-w-md text-lg leading-relaxed">
            Feel free to send me a message, I&apos;ll get back to you as soon as
            possible! You can also reach me through my social media.
          </p>

          <div className="flex space-x-5 mt-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/divyan154/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-4xl transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/divyan154"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary text-4xl transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/Divyans57775024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary text-4xl transition-colors duration-300"
              aria-label="Twitter"
            >
              <RiTwitterXFill />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mx-auto space-y-6 p-8 glass-card"
          >
            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 bg-surface-2 text-text-primary border border-glass-border rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-all duration-200 placeholder:text-text-muted"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 bg-surface-2 text-text-primary border border-glass-border rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-all duration-200 placeholder:text-text-muted"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-text-secondary text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-3 bg-surface-2 text-text-primary border border-glass-border rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary outline-none transition-all duration-200 placeholder:text-text-muted"
                rows={4}
                placeholder="How can I help you?"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-background font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <RiSendPlaneFill className="text-lg" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
