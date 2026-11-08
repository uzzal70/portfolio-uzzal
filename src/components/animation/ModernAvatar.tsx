"use client";

import React, { useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useAppTheme } from "@/theme/ThemeContext";
import { CheckCircle2, Sparkles, Terminal } from "lucide-react";

/**
 * Modern Animated Developer Avatar with 3D Spring Tilt,
 * Glowing Audio Headset, Orbiting Tech Badges, and Live Status Radar.
 */
export default function ModernAvatar() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 260,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), {
    stiffness: 260,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "inline-block",
        perspective: "1000px",
        mb: 2.8,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Main Frosted Glass Persona Capsule */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 2,
            p: 1.2,
            pr: 2.6,
            borderRadius: "44px",
            backgroundColor: isDark
              ? "rgba(14, 24, 45, 0.88)"
              : "rgba(255, 255, 255, 0.95)",
            border: "1px solid",
            borderColor: isDark
              ? "rgba(34, 184, 207, 0.25)"
              : "rgba(41, 39, 100, 0.16)",
            backdropFilter: "blur(24px) saturate(180%)",
            boxShadow: isDark
              ? "0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 24px rgba(34, 184, 207, 0.15)"
              : "0 12px 35px -8px rgba(41, 39, 100, 0.12)",
            position: "relative",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              borderColor: isDark ? "#22B8CF" : "primary.main",
              boxShadow: isDark
                ? "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(34, 184, 207, 0.3)"
                : "0 16px 45px -8px rgba(65, 105, 245, 0.2)",
            },
          }}
        >
          {/* Avatar Visual Container with Rotating Aurora Rings */}
          <Box
            sx={{
              position: "relative",
              width: 54,
              height: 54,
              borderRadius: "50%",
              flexShrink: 0,
            }}
          >
            {/* Outer Rotating Glowing Dash Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: "2px dashed",
                borderColor: isDark
                  ? "rgba(34, 184, 207, 0.5)"
                  : "rgba(65, 105, 245, 0.4)",
                pointerEvents: "none",
              }}
            />

            {/* Glowing Aura Halo */}
            <Box
              className="apple-avatar-glow"
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #4169F5 0%, #22B8CF 50%, #B89555 100%)",
                p: "2.5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(34, 184, 207, 0.4)",
              }}
            >
              {/* Modern Vector Developer Character Portrait */}
              <Box
                component="svg"
                viewBox="0 0 100 100"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: isDark ? "#0A1224" : "#EAE7DC",
                  display: "block",
                }}
              >
                <defs>
                  {/* Skin Gradient */}
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9C8A7" />
                    <stop offset="100%" stopColor="#E2A67B" />
                  </linearGradient>

                  {/* Hair Gradient */}
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2D3748" />
                    <stop offset="100%" stopColor="#1A202C" />
                  </linearGradient>

                  {/* Hoodie Gradient */}
                  <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="50%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#4169F5" />
                  </linearGradient>

                  {/* Headphone Neon Glow */}
                  <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22B8CF" />
                    <stop offset="100%" stopColor="#4169F5" />
                  </linearGradient>
                </defs>

                {/* Background Ambient Glow */}
                <circle cx="50" cy="50" r="48" fill={isDark ? "#0D182F" : "#F4F1EA"} />

                {/* Hoodie Shoulders & Chest */}
                <path
                  d="M18 96 C20 78 35 72 50 72 C65 72 80 78 82 96 Z"
                  fill="url(#hoodieGrad)"
                />
                {/* Hoodie Zipper / Collar Line */}
                <path
                  d="M50 72 L50 96"
                  stroke="#22B8CF"
                  strokeWidth="2"
                  strokeDasharray="2 2"
                  opacity="0.8"
                />

                {/* Neck */}
                <rect x="43" y="60" width="14" height="15" fill="#E2A67B" rx="3" />

                {/* Head / Face */}
                <ellipse cx="50" cy="46" rx="22" ry="25" fill="url(#skinGrad)" />

                {/* Stylish Dark Hair */}
                <path
                  d="M26 40 C27 24 38 18 50 18 C64 18 74 24 74 40 C70 32 60 26 50 26 C40 26 30 32 26 40 Z"
                  fill="url(#hairGrad)"
                />
                {/* Hair Sideburns */}
                <path d="M27 38 L29 48 L32 44 Z" fill="url(#hairGrad)" />
                <path d="M73 38 L71 48 L68 44 Z" fill="url(#hairGrad)" />

                {/* Eyebrows */}
                <path d="M34 38 Q40 36 44 38" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M56 38 Q60 36 66 38" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Eyes with Glasses Frames */}
                {/* Left Lens */}
                <rect x="33" y="40" width="13" height="10" rx="3" fill="rgba(34, 184, 207, 0.25)" stroke="#22B8CF" strokeWidth="1.5" />
                <circle cx="39" cy="45" r="2.5" fill="#1A202C" />
                <circle cx="40" cy="44" r="0.8" fill="#FFFFFF" />

                {/* Right Lens */}
                <rect x="54" y="40" width="13" height="10" rx="3" fill="rgba(34, 184, 207, 0.25)" stroke="#22B8CF" strokeWidth="1.5" />
                <circle cx="61" cy="45" r="2.5" fill="#1A202C" />
                <circle cx="62" cy="44" r="0.8" fill="#FFFFFF" />

                {/* Glasses Bridge */}
                <path d="M46 44 Q50 42 54 44" stroke="#22B8CF" strokeWidth="1.5" fill="none" />

                {/* Terminal Code Reflection on Glasses: >_ */}
                <text x="35" y="47" fontSize="4.5" fill="#22B8CF" fontFamily="monospace" fontWeight="bold">&gt;</text>
                <text x="56" y="47" fontSize="4.5" fill="#22B8CF" fontFamily="monospace" fontWeight="bold">_</text>

                {/* Nose */}
                <path d="M50 49 L48 54 L52 54" stroke="#D18E66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                {/* Confident Smile */}
                <path d="M44 59 Q50 63 56 59" stroke="#9A5038" strokeWidth="1.8" strokeLinecap="round" fill="none" />

                {/* Over-Ear Studio Headset Arch */}
                <path
                  d="M22 45 C22 20 78 20 78 45"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Headset Left Earcup with Pulsing Neon Light */}
                <rect x="20" y="38" width="8" height="16" rx="4" fill="url(#neonCyan)" />
                <rect x="22" y="41" width="4" height="10" rx="2" fill="#FFFFFF" opacity="0.6" />

                {/* Headset Right Earcup with Pulsing Neon Light */}
                <rect x="72" y="38" width="8" height="16" rx="4" fill="url(#neonCyan)" />
                <rect x="74" y="41" width="4" height="10" rx="2" fill="#FFFFFF" opacity="0.6" />
              </Box>
            </Box>

            {/* Orbiting Sparkle / Live Pulse Dot */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: -1,
                right: -1,
                width: 15,
                height: 15,
                borderRadius: "50%",
                backgroundColor: "#0A1224",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 12,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  boxShadow: "0 0 10px #22C55E",
                }}
              />
            </motion.div>
          </Box>

          {/* Persona Text Details */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "0.85rem", sm: "0.92rem" },
                  color: "text.primary",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                }}
              >
                Uzzal Hossain
                <CheckCircle2 size={15} color="#22B8CF" />
              </Typography>

              {/* Modern Active Role Pill */}
              <Box
                sx={{
                  px: 0.9,
                  py: 0.2,
                  borderRadius: "6px",
                  backgroundColor: isDark
                    ? "rgba(34, 184, 207, 0.15)"
                    : "rgba(41, 39, 100, 0.08)",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(34, 184, 207, 0.3)"
                    : "rgba(41, 39, 100, 0.15)",
                  color: isDark ? "#22B8CF" : "primary.main",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  display: { xs: "none", sm: "inline-block" },
                }}
              >
                SENIOR ARCHITECT
              </Box>
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: "secondary.main",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                fontWeight: 700,
                display: "block",
                letterSpacing: "0.04em",
                mt: 0.2,
              }}
            >
              5+ YEARS COMMERCIAL EXPERIENCE &bull; AVAILABLE FOR HIRE
            </Typography>
          </Box>
        </Box>
      </motion.div>

      {/* Floating Modern Speech Bubble */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: -22,
          right: -8,
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            px: 1.2,
            py: 0.35,
            borderRadius: "12px",
            backgroundColor: isDark
              ? "rgba(34, 184, 207, 0.92)"
              : "rgba(41, 39, 100, 0.92)",
            color: "#FFFFFF",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
            fontSize: "0.68rem",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.02em",
          }}
        >
          <Sparkles size={11} color="#FFD700" />
          <span>Crafting High-Throughput Web</span>
        </Box>
      </motion.div>
    </Box>
  );
}

