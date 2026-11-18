"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

interface TypewriterLine {
  command: string;
  output: string;
  isGradient?: boolean;
}

const lines: TypewriterLine[] = [
  { command: "whoami", output: "Divyansh Sharma", isGradient: true },
  { command: "cat role.txt", output: "AI Full-Stack Engineer @ Zintellix" },
  {
    command: "cat mission.txt",
    output: "Building production-ready software & integrating AI into real-world apps",
  },
];

function useTypewriter(text: string, speed: number, startTyping: boolean) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText("");
      setIsComplete(false);
      return;
    }

    let index = 0;
    setDisplayedText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayedText, isComplete };
}

function TerminalLine({
  line,
  onComplete,
  startTyping,
}: {
  line: TypewriterLine;
  onComplete: () => void;
  startTyping: boolean;
}) {
  const { displayedText: cmdText, isComplete: cmdDone } = useTypewriter(
    line.command,
    40,
    startTyping
  );
  const { displayedText: outText, isComplete: outDone } = useTypewriter(
    line.output,
    30,
    cmdDone
  );

  const onCompleteStable = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    if (outDone) onCompleteStable();
  }, [outDone, onCompleteStable]);

  if (!startTyping) return null;

  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="text-accent-primary">$</span>
        <span className="text-text-muted">
          {cmdText}
          {!cmdDone && (
            <span className="inline-block w-2 h-4 bg-accent-primary ml-0.5 animate-blink" />
          )}
        </span>
      </div>
      {cmdDone && (
        <div className="ml-5 mt-1">
          <span className={line.isGradient ? "gradient-text font-bold text-lg" : "text-text-primary"}>
            {outText}
          </span>
          {!outDone && (
            <span className="inline-block w-2 h-4 bg-accent-primary ml-0.5 animate-blink" />
          )}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [allDone, setAllDone] = useState(false);

  const handleLineComplete = useCallback(() => {
    if (currentLine < lines.length - 1) {
      setCurrentLine((prev) => prev + 1);
    } else {
      setAllDone(true);
    }
  }, [currentLine]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden dot-grid">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border bg-surface-2/50">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-text-muted text-xs font-mono">
              divyansh@portfolio ~ %
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[280px]">
            {lines.map((line, i) => (
              <TerminalLine
                key={i}
                line={line}
                startTyping={i <= currentLine}
                onComplete={i === currentLine ? handleLineComplete : () => {}}
              />
            ))}

            {allDone && (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-accent-primary">$</span>
                <span className="inline-block w-2.5 h-5 bg-accent-primary animate-blink" />
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={allDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 ${!allDone ? "opacity-0" : ""}`}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-background font-semibold rounded-lg shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1ZMTxNKkKLGguuQJAzdFXiGIhB6srDgHo/view?usp=drivesdk"
            target="_blank"
            className="px-8 py-3.5 border border-glass-border text-text-primary font-medium rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
