"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button, ButtonProps } from "@mui/material";

interface MagneticButtonProps extends ButtonProps {
  children: React.ReactNode;
  magneticStrength?: number;
  component?: any;
  href?: string;
  target?: string;
  rel?: string;
  download?: any;
}

export default function MagneticButton({
  children,
  magneticStrength = 0.25,
  sx,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * magneticStrength;
    const y = (clientY - centerY) * magneticStrength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      style={{ display: "inline-block" }}
    >
      <Button
        {...props}
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          ...sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
}
