"use client";

import React, { useState } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ExternalLink, Code2 } from "lucide-react";
import { useAppTheme } from "@/theme/ThemeContext";

/**
 * Skiper UI Micro-Interaction Animated Copy Button (skiper42 inspired)
 * Morphs between clipboard and verified checkmark with spring physics and tooltip feedback.
 */
export function SkiperCopyButton({
  textToCopy,
  label = "Copy Email",
  copiedLabel = "Copied to Clipboard!",
}: {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
}) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <Tooltip title={copied ? copiedLabel : textToCopy} arrow>
      <Button
        onClick={handleCopy}
        variant="outlined"
        size="small"
        sx={{
          px: 1.6,
          py: 0.7,
          borderRadius: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          fontWeight: 600,
          borderColor: copied
            ? "#22C55E"
            : isDark
            ? "rgba(255, 255, 255, 0.16)"
            : "rgba(41, 39, 100, 0.16)",
          color: copied
            ? "#22C55E"
            : "text.primary",
          backgroundColor: copied
            ? "rgba(34, 197, 94, 0.1)"
            : isDark
            ? "rgba(255, 255, 255, 0.03)"
            : "rgba(41, 39, 100, 0.03)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderColor: copied ? "#22C55E" : "#22B8CF",
            backgroundColor: copied
              ? "rgba(34, 197, 94, 0.15)"
              : isDark
              ? "rgba(34, 184, 207, 0.08)"
              : "rgba(41, 39, 100, 0.06)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 450, damping: 20 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Check size={14} color="#22C55E" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 450, damping: 20 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Copy size={14} />
              </motion.span>
            )}
          </AnimatePresence>
          <span>{copied ? copiedLabel : label}</span>
        </Box>
      </Button>
    </Tooltip>
  );
}

/**
 * Skiper UI Live Telemetry Radar Beacon
 */
export function SkiperPulseBeacon({
  status = "LIVE PRODUCTION",
  color = "#22C55E",
}: {
  status?: string;
  color?: string;
}) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.8,
        px: 1.2,
        py: 0.4,
        borderRadius: "16px",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        border: "1px solid rgba(34, 197, 94, 0.3)",
        color,
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 7,
          height: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="apple-ping-ring"
          sx={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: 0.4,
          }}
        />
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </Box>
      <span>{status}</span>
    </Box>
  );
}

