"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Box } from "@mui/material";

interface SkiperTiltCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  glareColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Skiper UI 3D Perspective Tilt Card with Cursor Spotlight Glare
 * Features realistic 3D spring physics rotation and dynamic radial cursor lighting.
 */
export default function SkiperTiltCard({
  children,
  maxTilt = 7,
  glareColor = "rgba(34, 184, 207, 0.14)",
  className,
  style,
}: SkiperTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 280, damping: 22, mass: 0.5 };

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
    setSpotlightPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <Box
      sx={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        width: "100%",
        height: "100%",
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
          ...style,
        }}
        whileHover={{
          scale: 1.018,
          transition: { type: "spring", stiffness: 320, damping: 20 },
        }}
        className={className}
      >
        {children}

        {/* Dynamic Cursor Spotlight Glare Overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: isHovered
              ? `radial-gradient(420px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${glareColor}, transparent 75%)`
              : "transparent",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.25s ease-out",
            zIndex: 10,
          }}
        />
      </motion.div>
    </Box>
  );
}

