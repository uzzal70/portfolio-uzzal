"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "@/theme/ThemeContext";

interface MarqueeItem {
  icon: string;
  label: string;
  sub: string;
}

const defaultItems: MarqueeItem[] = [
  { icon: "✈️", label: "TripFindy B2B", sub: "GDS Travel Tech" },
  { icon: "🇧🇩", label: "Aero Bangladesh", sub: "Multi-GDS Booking" },
  { icon: "💬", label: "GotiSMS CPaaS", sub: "Sub-3s OTP Engine" },
  { icon: "✉️", label: "GotiMail Cloud", sub: "Amazon SES Relay" },
  { icon: "🛰️", label: "Safety GPS Tracker", sub: "IoT Fleet Telematics" },
  { icon: "⚖️", label: "AuditNext Engine", sub: "Digital Compliance" },
  { icon: "🏢", label: "Impressive Group", sub: "Enterprise Portal" },
  { icon: "🎫", label: "Ticket Lagbe", sub: "B2B Flight Engine" },
  { icon: "🏨", label: "Hotel Lagbe", sub: "Room Inventory API" },
  { icon: "🛂", label: "Passport Scanner", sub: "100% In-Browser OCR" },
  { icon: "🌐", label: "SimWindy eSIM", sub: "Instant Connectivity" },
];

/**
 * Skiper UI Infinite Marquee Ticker with Dual-Side Gradient Fade Mask
 * Runs continuous hardware-accelerated infinite motion with pause-on-hover.
 */
export default function SkiperMarquee({
  items = defaultItems,
}: {
  items?: MarqueeItem[];
}) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  // Duplicate items for continuous loop
  const duplicatedItems = [...items, ...items];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        py: 2,
        // Dual-side fade mask
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          gap: 2,
          animation: "skiper-marquee 40s linear infinite",
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <Box
            key={`${item.label}-${idx}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 1,
              borderRadius: "12px",
              backgroundColor: isDark
                ? "rgba(16, 28, 53, 0.6)"
                : "rgba(255, 255, 255, 0.8)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(41, 39, 100, 0.08)",
              backdropFilter: "blur(12px)",
              flexShrink: 0,
              transition: "border-color 0.25s ease, transform 0.25s ease",
              "&:hover": {
                borderColor: isDark ? "#22B8CF" : "primary.main",
                transform: "translateY(-1px)",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.1rem" }}>{item.icon}</Typography>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "text.primary",
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "text.secondary",
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {item.sub}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

