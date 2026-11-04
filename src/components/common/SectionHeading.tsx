"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/MotionWrapper";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Box
      component={motion.div}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        mb: { xs: 5, md: 7 },
        textAlign: isCenter ? "center" : "left",
        maxWidth: isCenter ? "720px" : "800px",
        mx: isCenter ? "auto" : 0,
      }}
    >
      {badge && (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            mb: 1.5,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "secondary.main",
            }}
          />
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            {badge}
          </Typography>
        </Box>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          color: "text.primary",
          mb: subtitle ? 2 : 0,
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.7,
            maxWidth: isCenter ? "640px" : "680px",
            mx: isCenter ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Subtle gold accent underline */}
      <Box
        sx={{
          width: 50,
          height: "2px",
          backgroundColor: "secondary.main",
          mt: 2.5,
          mx: isCenter ? "auto" : 0,
          opacity: 0.8,
        }}
      />
    </Box>
  );
}
