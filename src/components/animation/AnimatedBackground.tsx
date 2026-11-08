"use client";

import React, { useEffect, useState } from "react";
import { useAppTheme } from "@/theme/ThemeContext";

export default function AnimatedBackground() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
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
      {/* 1. Stationary Architectural Ambient Radial Light */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "25%",
          width: "50vw",
          height: "45vw",
          maxWidth: "750px",
          maxHeight: "650px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(65, 105, 245, 0.1) 0%, rgba(34, 184, 207, 0.04) 50%, transparent 80%)"
            : "radial-gradient(circle, rgba(41, 39, 100, 0.045) 0%, rgba(184, 149, 85, 0.02) 60%, transparent 80%)",
          filter: "blur(90px)",
        }}
      />

      {/* 2. Soft Warm Gold Accent Light on the right side */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          maxWidth: "600px",
          maxHeight: "600px",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(212, 186, 130, 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(184, 149, 85, 0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* 3. Subtle Architectural Dot Grid Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: isDark
            ? "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.035) 1px, transparent 0)"
            : "radial-gradient(circle at 1px 1px, rgba(41, 39, 100, 0.035) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* 4. Fine Tactile Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}
