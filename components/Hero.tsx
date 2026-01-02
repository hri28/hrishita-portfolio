"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Code";
  const [startTyping, setStartTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  const easeBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Delay typing start to sync with animations
    const startDelay = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!startTyping) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 200);
    
    return () => clearInterval(typingInterval);
  }, [startTyping]);


// Container animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeBezier,
      staggerChildren: 0.2,
      when: "beforeChildren" as const,
    },
  },
};

// Child elements animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeBezier },
  },
};

// Browser dots animation
const dotVariants: Variants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    } as const,
  }),
};

// Button hover animation
const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    } as const,
  },
  tap: { scale: 0.95 },
};


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flowing gradient blurs - appear after typing completes */}
      {typingComplete && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Purple blur */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(167,139,250,0) 70%)",
              filter: "blur(80px)",
              left: "10%",
              top: "20%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 100, 0],
              opacity: [0, 0.6, 0.6, 0.6],
              scale: [0.8, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Green blur */}
          <motion.div
            className="absolute w-[450px] h-[450px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(132,204,22,0.35) 0%, rgba(132,204,22,0) 70%)",
              filter: "blur(80px)",
              right: "15%",
              bottom: "25%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              x: [0, -120, 80, 0],
              y: [0, 100, -60, 0],
              opacity: [0, 0.5, 0.5, 0.5],
              scale: [0.8, 1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Additional purple accent */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(167,139,250,0) 70%)",
              filter: "blur(70px)",
              left: "50%",
              top: "10%",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              x: [0, -100, 120, 0],
              y: [0, 150, -80, 0],
              opacity: [0, 0.4, 0.4, 0.4],
              scale: [0.8, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="
          w-[90%] max-w-5xl
          border border-white/20
          rounded-xl
          shadow-[0_0_35px_rgba(167,139,250,0.18)]
          transition-shadow
          duration-500
          ease-out
          hover:shadow-[0_0_70px_rgba(167,139,250,0.35)]
          relative
          z-10
          backdrop-blur-[2px]
        "
      >
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              custom={i}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              className={`w-3 h-3 rounded-full ${
                i === 0
                  ? "bg-red-500"
                  : i === 1
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
            />
          ))}
        </div>

        {/* Browser content */}
        <div className="py-28 px-8 text-center space-y-6">
          {/* Greeting with fade-in */}
          <motion.p
            variants={itemVariants}
            className="font-serif font-medium text-2xl md:text-[40px] text-[#a78bfa]"
          >
            Hello, I'm Hrishita.
          </motion.p>

          {/* Main headline with staggered word animation */}
          <motion.h1
            variants={itemVariants}
            className="font-mono text-4xl font-medium md:text-6xl leading-tight"
          >
            <motion.span
              className="text-[#a78bfa]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I Design and{" "}
            </motion.span>
            <span className="text-[#84cc16] relative">
              {typedText}
              {startTyping && (
                <motion.span
                  className="inline-block w-0.5 h-8 md:h-12 bg-[#84cc16] ml-0.5 align-middle"
                  animate={{ opacity: typedText.length === fullText.length ? [1, 0] : 1 }}
                  transition={
                    typedText.length === fullText.length
                      ? {
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }
                      : {}
                  }
                />
              )}
            </span>
          </motion.h1>

          {/* CTA Button with enhanced interactions */}
          <motion.div variants={itemVariants} className="pt-4">
            <motion.a
              href="#about"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-block font-mono font-medium text-sm px-6 py-3 border border-[#a78bfa]/60 text-[#a78bfa] rounded-md hover:bg-[#a78bfa] hover:text-black transition-colors relative overflow-hidden group"
            >
              {/* Shimmer effect on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Know More</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}