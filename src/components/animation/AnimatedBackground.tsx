"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useAppTheme } from "@/theme/ThemeContext";

export default function AnimatedBackground() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Scroll-reactive lighting shifts
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* 1. Subtle Elegant Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.035) 1px, transparent 0)`
            : `radial-gradient(circle at 1px 1px, rgba(41, 39, 100, 0.04) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.8,
        }}
      />

      {/* 2. Floating Continuous Blurred Gradient Orbs */}
      {/* Deep Indigo Atmosphere Orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "-15%",
          left: "5%",
          width: "55vw",
          height: "55vw",
          maxWidth: "750px",
          maxHeight: "750px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(133, 128, 255, 0.16) 0%, rgba(41, 39, 100, 0.05) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(41, 39, 100, 0.08) 0%, rgba(62, 59, 138, 0.03) 50%, transparent 70%)",
          filter: "blur(70px)",
          y: shouldReduceMotion ? 0 : orb1Y,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 40, -30, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Muted Gold Atmosphere Orb */}
      <motion.div
        style={{
          position: "absolute",
          top: "35%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: "680px",
          maxHeight: "680px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(203, 176, 117, 0.12) 0%, rgba(184, 149, 85, 0.04) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(184, 149, 85, 0.09) 0%, rgba(207, 174, 112, 0.03) 50%, transparent 70%)",
          filter: "blur(80px)",
          y: shouldReduceMotion ? 0 : orb2Y,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -50, 30, 0],
                scale: [1, 0.92, 1.06, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Subtle Indigo Ambient Orb */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "20%",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(133, 128, 255, 0.10) 0%, transparent 65%)"
            : "radial-gradient(circle, rgba(41, 39, 100, 0.06) 0%, transparent 65%)",
          filter: "blur(90px)",
          y: shouldReduceMotion ? 0 : orb3Y,
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, -20, 0],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3. Elegant Continuous Animated SVG Curve Lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: isDark ? 0.25 : 0.18,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#8580FF" : "#292764"} stopOpacity="0.4" />
            <stop offset="50%" stopColor={isDark ? "#CBB075" : "#B89555"} stopOpacity="0.6" />
            <stop offset="100%" stopColor={isDark ? "#8580FF" : "#292764"} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -100,200 C 300,50 600,350 1100,180 C 1500,50 1900,280 2300,160"
          fill="none"
          stroke="url(#curveGradient1)"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  strokeDashoffset: [0, -140],
                }
          }
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M -150,700 C 350,550 700,850 1200,680 C 1600,550 2000,780 2400,660"
          fill="none"
          stroke="url(#curveGradient1)"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  strokeDashoffset: [0, 120],
                }
          }
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* 4. Fine Gentle Particles Layer */}
      {!shouldReduceMotion && (
        <div style={{ position: "absolute", inset: 0 }}>
          {[
            { top: "15%", left: "18%", size: 3, dur: 18, delay: 0 },
            { top: "35%", left: "82%", size: 4, dur: 22, delay: 2 },
            { top: "60%", left: "25%", size: 3, dur: 25, delay: 4 },
            { top: "78%", left: "70%", size: 4, dur: 20, delay: 1 },
            { top: "45%", left: "48%", size: 2.5, dur: 28, delay: 3 },
          ].map((pt, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                top: pt.top,
                left: pt.left,
                width: pt.size,
                height: pt.size,
                borderRadius: "50%",
                backgroundColor: isDark ? "rgba(203, 176, 117, 0.4)" : "rgba(41, 39, 100, 0.3)",
                boxShadow: isDark
                  ? "0 0 8px rgba(203, 176, 117, 0.5)"
                  : "0 0 6px rgba(41, 39, 100, 0.2)",
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: pt.dur,
                delay: pt.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* 5. Subtle Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}
