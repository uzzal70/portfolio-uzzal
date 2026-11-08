"use client";

import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useAppTheme } from "@/theme/ThemeContext";
import {
  CheckCircle2,
  Sparkles,
  Cpu,
  Zap,
  Radio,
  Layers,
  Terminal,
  ShieldCheck,
  Activity,
  Compass,
} from "lucide-react";

/**
 * Luxury 3D Spatial Persona & Cybernetic Architecture Hub
 * Apple Vision Pro / Luxury FinTech Aesthetic:
 * - 3D Spring Tilt Physics with Smooth Gyroscope Tracking
 * - Multi-Layered Rotating Titanium & Cyan Telemetry Rings
 * - Cybernetic Holographic Developer Silhouette with Specular Reflections
 * - 4 Floating Spatial Glass HUD Badges with Independent Z-Depth
 * - Real-Time Dynamic Specular Glare & Sweeping Radar Beam
 */
export default function ModernAvatar() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // 3D Spring Tilt Physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 280, damping: 22, mass: 0.6 };

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [16, -16]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-16, 16]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const yRatio = (e.clientY - rect.top) / rect.height;

    mouseX.set(xRatio);
    mouseY.set(yRatio);
    setGlarePos({ x: xRatio * 100, y: yRatio * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <Box
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: { xs: "380px", sm: "480px", lg: "520px" },
        mx: "auto",
        perspective: "1400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, sm: 6 },
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Ambient Breathing Radial Aurora Halo */}
      <Box
        aria-hidden="true"
        className="apple-breathe-glow"
        sx={{
          position: "absolute",
          inset: -35,
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(34, 184, 207, 0.3) 0%, rgba(65, 105, 245, 0.18) 40%, rgba(212, 186, 130, 0.1) 60%, transparent 75%)"
            : "radial-gradient(circle, rgba(41, 39, 100, 0.16) 0%, rgba(34, 184, 207, 0.12) 40%, transparent 70%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* 3D Preserved Perspective Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
      >
        {/* Dynamic Specular Glare Overlay */}
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: -20,
            borderRadius: "32px",
            background: isHovered
              ? `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.14) 0%, rgba(34, 184, 207, 0.08) 35%, transparent 65%)`
              : "none",
            pointerEvents: "none",
            zIndex: 30,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* ========================================================
            SPATIAL 3D FLOATING HUD CARDS (Vision Pro Layering)
        ======================================================== */}

        {/* Spatial Badge 01 (Top-Left): Sub-16ms Query Engine */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: -15,
            zIndex: 25,
            transform: "translateZ(60px)",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.2,
              px: 1.6,
              py: 0.8,
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(10, 18, 36, 0.88)"
                : "rgba(255, 255, 255, 0.94)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(34, 184, 207, 0.45)"
                : "rgba(41, 39, 100, 0.18)",
              backdropFilter: "blur(24px) saturate(190%)",
              boxShadow: isDark
                ? "0 14px 35px -5px rgba(0,0,0,0.7), 0 0 20px rgba(34, 184, 207, 0.25)"
                : "0 10px 28px -5px rgba(41, 39, 100, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Specular Rim */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(34, 184, 207, 0.8), transparent)",
              }}
            />
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "10px",
                backgroundColor: "rgba(34, 184, 207, 0.16)",
                border: "1px solid rgba(34, 184, 207, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22B8CF",
                boxShadow: "0 0 10px rgba(34, 184, 207, 0.3)",
              }}
            >
              <Zap size={16} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.76rem",
                    color: "text.primary",
                    lineHeight: 1.2,
                  }}
                >
                  &lt; 16ms State Engine
                </Typography>
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#22B8CF",
                    boxShadow: "0 0 6px #22B8CF",
                  }}
                />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#22B8CF",
                  fontSize: "0.64rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                TripFindy 800+ Routes
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Spatial Badge 02 (Top-Right): AI-Augmented 10x Velocity */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.0, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 15,
            right: -20,
            zIndex: 25,
            transform: "translateZ(70px)",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.2,
              px: 1.6,
              py: 0.8,
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(10, 18, 36, 0.88)"
                : "rgba(255, 255, 255, 0.94)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(56, 189, 248, 0.45)"
                : "rgba(41, 39, 100, 0.18)",
              backdropFilter: "blur(24px) saturate(190%)",
              boxShadow: isDark
                ? "0 14px 35px -5px rgba(0,0,0,0.7), 0 0 20px rgba(56, 189, 248, 0.25)"
                : "0 10px 28px -5px rgba(41, 39, 100, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Specular Rim */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.8), transparent)",
              }}
            />
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "10px",
                backgroundColor: "rgba(56, 189, 248, 0.16)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#38BDF8",
                boxShadow: "0 0 10px rgba(56, 189, 248, 0.3)",
              }}
            >
              <Sparkles size={16} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.76rem",
                    color: "text.primary",
                    lineHeight: 1.2,
                  }}
                >
                  AI-Powered 10x Velocity
                </Typography>
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#38BDF8",
                    boxShadow: "0 0 6px #38BDF8",
                  }}
                />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#38BDF8",
                  fontSize: "0.64rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                Fast-Ship Production
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Spatial Badge 03 (Bottom-Left): Real-Time WebSockets */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.8, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 75,
            left: -25,
            zIndex: 25,
            transform: "translateZ(55px)",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.2,
              px: 1.5,
              py: 0.75,
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(10, 18, 36, 0.88)"
                : "rgba(255, 255, 255, 0.94)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(34, 197, 94, 0.45)"
                : "rgba(41, 39, 100, 0.18)",
              backdropFilter: "blur(24px) saturate(190%)",
              boxShadow: isDark
                ? "0 14px 35px -5px rgba(0,0,0,0.7), 0 0 20px rgba(34, 197, 94, 0.25)"
                : "0 10px 28px -5px rgba(41, 39, 100, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "9px",
                backgroundColor: "rgba(34, 197, 94, 0.16)",
                border: "1px solid rgba(34, 197, 94, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#22C55E",
              }}
            >
              <Radio size={15} />
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "0.74rem",
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                Real-Time Telematics
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#22C55E",
                  fontSize: "0.62rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                }}
              >
                Safety GPS &bull; &lt;5s Sync
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Spatial Badge 04 (Bottom-Right): Complex Architecture */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, delay: 0.9, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 70,
            right: -20,
            zIndex: 25,
            transform: "translateZ(65px)",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1.2,
              px: 1.5,
              py: 0.75,
              borderRadius: "16px",
              backgroundColor: isDark
                ? "rgba(10, 18, 36, 0.88)"
                : "rgba(255, 255, 255, 0.94)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(212, 186, 130, 0.45)"
                : "rgba(41, 39, 100, 0.18)",
              backdropFilter: "blur(24px) saturate(190%)",
              boxShadow: isDark
                ? "0 14px 35px -5px rgba(0,0,0,0.7), 0 0 20px rgba(212, 186, 130, 0.25)"
                : "0 10px 28px -5px rgba(41, 39, 100, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "9px",
                backgroundColor: "rgba(184, 149, 85, 0.16)",
                border: "1px solid rgba(184, 149, 85, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D4BA82",
              }}
            >
              <Cpu size={15} />
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "0.74rem",
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                Complex Architecture
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: isDark ? "#D4BA82" : "#96753a",
                  fontSize: "0.62rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                }}
              >
                Multi-Tenant Theming
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* ========================================================
            CENTRAL LUXURY CYBERNETIC AVATAR PORTRAIT & GYROSCOPE
        ======================================================== */}
        <Box
          sx={{
            position: "relative",
            width: { xs: 220, sm: 270, md: 290 },
            height: { xs: 220, sm: 270, md: 290 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateZ(30px)",
            mb: 2.8,
          }}
        >
          {/* Ring 1: Outer Rotating Titanium Gyroscope Ring with Graduation Marks */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: -18,
              borderRadius: "50%",
              border: "1.5px dashed",
              borderColor: isDark
                ? "rgba(34, 184, 207, 0.55)"
                : "rgba(65, 105, 245, 0.45)",
              pointerEvents: "none",
            }}
          />

          {/* Ring 2: Counter-Rotating Champagne Gold Dial */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              inset: -9,
              borderRadius: "50%",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(212, 186, 130, 0.4)"
                : "rgba(41, 39, 100, 0.2)",
              pointerEvents: "none",
            }}
          />

          {/* Ring 3: Concentric Laser Radar Sweep with Real-Time Beam */}
          <Box
            sx={{
              position: "absolute",
              inset: -2,
              borderRadius: "50%",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            <Box
              className="radar-sweep-subtle"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(34, 184, 207, 0.28) 360deg)",
              }}
            />
          </Box>

          {/* Luxury Glowing Bezel Ring */}
          <Box
            className="apple-avatar-glow"
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #4169F5 0%, #22B8CF 40%, #B89555 75%, #D4BA82 100%)",
              p: "3.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: isDark
                ? "0 0 45px rgba(34, 184, 207, 0.45), 0 0 70px rgba(65, 105, 245, 0.25)"
                : "0 0 30px rgba(41, 39, 100, 0.22)",
            }}
          >
            {/* High-Definition Cybernetic Developer Vector Portrait */}
            <Box
              component="svg"
              viewBox="0 0 100 100"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: isDark ? "#060B17" : "#EAE7DC",
                display: "block",
              }}
            >
              <defs>
                {/* Luxury Skin Gradient */}
                <linearGradient id="luxSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FAD4C0" />
                  <stop offset="60%" stopColor="#E8AA85" />
                  <stop offset="100%" stopColor="#D49168" />
                </linearGradient>

                {/* Hair Metallic Gradient */}
                <linearGradient id="luxHair" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Cybernetic Titanium Hoodie */}
                <linearGradient id="luxHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="35%" stopColor="#0F172A" />
                  <stop offset="70%" stopColor="#1E1B4B" />
                  <stop offset="100%" stopColor="#4338CA" />
                </linearGradient>

                {/* Neon Cyan & Electric Purple Headset */}
                <linearGradient id="luxNeon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22B8CF" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>

                {/* Specular Glare Diagonal */}
                <linearGradient id="luxSpecular" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>

              {/* Ambient Blueprint Tech Grid in Background */}
              <circle cx="50" cy="50" r="48" fill={isDark ? "#080F1E" : "#F4F1EA"} />
              <circle cx="50" cy="50" r="38" fill="none" stroke={isDark ? "rgba(34,184,207,0.15)" : "rgba(41,39,100,0.1)"} strokeWidth="0.8" strokeDasharray="2 3" />
              <circle cx="50" cy="50" r="28" fill="none" stroke={isDark ? "rgba(212,186,130,0.15)" : "rgba(41,39,100,0.1)"} strokeWidth="0.8" />

              {/* Hoodie Shoulders & Chest */}
              <path
                d="M16 96 C18 76 34 70 50 70 C66 70 82 76 84 96 Z"
                fill="url(#luxHoodie)"
              />
              {/* Futuristic Cybernetic Zipper Line */}
              <path
                d="M50 70 L50 96"
                stroke="#22B8CF"
                strokeWidth="2.2"
                strokeDasharray="2 2"
                opacity="0.9"
              />

              {/* Neck */}
              <rect x="43" y="58" width="14" height="15" fill="#D49168" rx="3" />

              {/* Head / Face */}
              <ellipse cx="50" cy="45" rx="22" ry="24" fill="url(#luxSkin)" />

              {/* Modern Dark Hair Style */}
              <path
                d="M26 39 C27 23 38 17 50 17 C64 17 74 23 74 39 C70 31 60 25 50 25 C40 25 30 31 26 39 Z"
                fill="url(#luxHair)"
              />
              <path d="M27 37 L29 47 L32 43 Z" fill="url(#luxHair)" />
              <path d="M73 37 L71 47 L68 43 Z" fill="url(#luxHair)" />

              {/* Eyebrows */}
              <path d="M34 37 Q40 35 44 37" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M56 37 Q60 35 66 37" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />

              {/* Luxury Titanium Coder Glasses */}
              {/* Left Lens */}
              <rect x="33" y="39" width="13" height="10" rx="3" fill="rgba(34, 184, 207, 0.3)" stroke="#22B8CF" strokeWidth="1.6" />
              <circle cx="39" cy="44" r="2.6" fill="#0F172A" />
              <circle cx="40" cy="43" r="0.9" fill="#FFFFFF" />

              {/* Right Lens */}
              <rect x="54" y="39" width="13" height="10" rx="3" fill="rgba(34, 184, 207, 0.3)" stroke="#22B8CF" strokeWidth="1.6" />
              <circle cx="61" cy="44" r="2.6" fill="#0F172A" />
              <circle cx="62" cy="43" r="0.9" fill="#FFFFFF" />

              {/* Glasses Bridge */}
              <path d="M46 43 Q50 41 54 43" stroke="#22B8CF" strokeWidth="1.6" fill="none" />

              {/* Live Terminal Code Reflection: >_ with Green Glare */}
              <text x="34.5" y="46.5" fontSize="4.5" fill="#22B8CF" fontFamily="monospace" fontWeight="bold">&gt;</text>
              <text x="55.5" y="46.5" fontSize="4.5" fill="#22C55E" fontFamily="monospace" fontWeight="bold">_</text>

              {/* Nose */}
              <path d="M50 48 L48 53 L52 53" stroke="#C47D55" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Confident Smile */}
              <path d="M44 58 Q50 62 56 58" stroke="#8A442E" strokeWidth="2" strokeLinecap="round" fill="none" />

              {/* Over-Ear Studio Headset Arch */}
              <path
                d="M22 44 C22 18 78 18 78 44"
                fill="none"
                stroke="#334155"
                strokeWidth="3.8"
                strokeLinecap="round"
              />

              {/* Headset Left Earcup with Pulsing Neon Spectrum */}
              <rect x="20" y="37" width="8" height="17" rx="4" fill="url(#luxNeon)" />
              <rect x="22" y="40" width="4" height="11" rx="2" fill="#FFFFFF" opacity="0.75" />

              {/* Headset Right Earcup with Pulsing Neon Spectrum */}
              <rect x="72" y="37" width="8" height="17" rx="4" fill="url(#luxNeon)" />
              <rect x="74" y="40" width="4" height="11" rx="2" fill="#FFFFFF" opacity="0.75" />

              {/* Specular Diagonal Sheen Overlay */}
              <path d="M0 0 L100 100 L60 100 L0 40 Z" fill="url(#luxSpecular)" opacity="0.35" pointerEvents="none" />
            </Box>
          </Box>

          {/* Live Emerald Status Radar Beacon */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              width: 26,
              height: 26,
              borderRadius: "50%",
              backgroundColor: isDark ? "#060B17" : "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
              boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
              border: "1.5px solid rgba(34, 197, 94, 0.5)",
            }}
          >
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#22C55E",
                boxShadow: "0 0 14px #22C55E",
              }}
            />
          </motion.div>
        </Box>

        {/* ========================================================
            LUXURY EXECUTIVE CREDENTIALS CAPSULE (Below Avatar)
        ======================================================== */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.8,
            px: { xs: 2, sm: 2.5 },
            py: 1.2,
            borderRadius: "32px",
            backgroundColor: isDark
              ? "rgba(10, 18, 36, 0.92)"
              : "rgba(255, 255, 255, 0.96)",
            border: "1px solid",
            borderColor: isDark
              ? "rgba(34, 184, 207, 0.4)"
              : "rgba(41, 39, 100, 0.18)",
            backdropFilter: "blur(28px) saturate(200%)",
            boxShadow: isDark
              ? "0 20px 50px -10px rgba(0, 0, 0, 0.75), 0 0 35px rgba(34, 184, 207, 0.22)"
              : "0 14px 40px -8px rgba(41, 39, 100, 0.15)",
            transform: "translateZ(45px)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              borderColor: isDark ? "#22B8CF" : "primary.main",
              boxShadow: isDark
                ? "0 25px 60px -10px rgba(0, 0, 0, 0.85), 0 0 45px rgba(34, 184, 207, 0.35)"
                : "0 18px 48px -8px rgba(65, 105, 245, 0.25)",
            },
          }}
        >
          {/* Top Specular Rim */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />

          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                }}
              >
                Uzzal Hossain
                <CheckCircle2 size={17} color="#22B8CF" />
              </Typography>

              {/* Luxury Titanium Role Pill */}
              <Box
                sx={{
                  px: 0.9,
                  py: 0.25,
                  borderRadius: "6px",
                  backgroundColor: isDark
                    ? "rgba(34, 184, 207, 0.16)"
                    : "rgba(41, 39, 100, 0.08)",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(34, 184, 207, 0.4)"
                    : "rgba(41, 39, 100, 0.18)",
                  color: isDark ? "#22B8CF" : "primary.main",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.66rem",
                  fontWeight: 800,
                }}
              >
                SENIOR DEVELOPER
              </Box>

              {/* Live Dancing Neon Equalizer Bars */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "2.5px",
                  height: 15,
                  pl: 0.5,
                }}
                title="Live Engineering Telemetry"
              >
                {[
                  { duration: 0.6, minH: 3, maxH: 14 },
                  { duration: 0.85, minH: 5, maxH: 15 },
                  { duration: 0.5, minH: 4, maxH: 12 },
                  { duration: 0.75, minH: 3, maxH: 14 },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: [bar.minH, bar.maxH, bar.minH],
                    }}
                    transition={{
                      duration: bar.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      width: 2.5,
                      backgroundColor: isDark ? "#22B8CF" : "#4169F5",
                      borderRadius: 1,
                      boxShadow: isDark
                        ? "0 0 6px rgba(34, 184, 207, 0.85)"
                        : "none",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: isDark ? "secondary.light" : "secondary.dark",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                display: "block",
                letterSpacing: "0.03em",
                mt: 0.25,
              }}
            >
              5+ YEARS COMMERCIAL &bull; TRIPFINDY &amp; TICKET LAGBE LEAD
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
