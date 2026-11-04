"use client";

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useAppTheme } from "@/theme/ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}>
      <IconButton
        onClick={toggleTheme}
        aria-label="Toggle visual theme"
        sx={{
          color: "text.primary",
          border: "1px solid",
          borderColor: "divider",
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
          backdropFilter: "blur(8px)",
          transition: "all 0.25s ease",
          "&:hover": {
            borderColor: "secondary.main",
            transform: "scale(1.05)",
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Moon size={18} color="#CBB075" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Sun size={18} color="#B89555" />
            </motion.div>
          )}
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  );
}
