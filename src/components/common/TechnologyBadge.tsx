"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Technology } from "@/types/portfolio";
import { useAppTheme } from "@/theme/ThemeContext";

interface TechnologyBadgeProps {
  tech: Technology;
}

export default function TechnologyBadge({ tech }: TechnologyBadgeProps) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const isPrimary = tech.level === "Primary";
  const isWorking = tech.level === "Working Knowledge";

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: isPrimary
          ? isDark
            ? "rgba(133, 128, 255, 0.08)"
            : "rgba(41, 39, 100, 0.04)"
          : isDark
          ? "rgba(255, 255, 255, 0.02)"
          : "#FFFFFF",
        border: "1px solid",
        borderColor: isPrimary
          ? isDark
            ? "rgba(133, 128, 255, 0.3)"
            : "rgba(41, 39, 100, 0.25)"
          : isDark
          ? "#232336"
          : "#EAE8E2",
        display: "flex",
        flexDirection: "column",
        gap: 0.75,
        height: "100%",
        boxShadow: isPrimary
          ? isDark
            ? "0 4px 16px -2px rgba(133, 128, 255, 0.08)"
            : "0 4px 16px -2px rgba(41, 39, 100, 0.05)"
          : "none",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          borderColor: "secondary.main",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            fontSize: "0.95rem",
            color: isPrimary ? (isDark ? "#A5A2FF" : "primary.main") : "text.primary",
          }}
        >
          {tech.name}
        </Typography>

        <Box
          sx={{
            px: 1,
            py: 0.2,
            borderRadius: 1,
            fontSize: "0.68rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            backgroundColor: isPrimary
              ? isDark
                ? "rgba(203, 176, 117, 0.18)"
                : "rgba(184, 149, 85, 0.15)"
              : isWorking
              ? isDark
                ? "rgba(255, 255, 255, 0.06)"
                : "rgba(0, 0, 0, 0.05)"
              : "transparent",
            color: isPrimary ? "secondary.main" : "text.secondary",
            border: isWorking ? "none" : !isPrimary ? "1px dashed var(--border)" : "none",
            whiteSpace: "nowrap",
          }}
        >
          {tech.level}
        </Box>
      </Box>

      {tech.description && (
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.82rem",
            lineHeight: 1.5,
          }}
        >
          {tech.description}
        </Typography>
      )}
    </Box>
  );
}

