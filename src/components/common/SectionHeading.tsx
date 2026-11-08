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
        maxWidth: isCenter ? "740px" : "840px",
        mx: isCenter ? "auto" : 0,
      }}
    >
      {badge && (
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
            px: 1.6,
            py: 0.5,
            borderRadius: "20px",
            backgroundColor: "rgba(184, 149, 85, 0.1)",
            border: "1px solid rgba(184, 149, 85, 0.25)",
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "secondary.main",
              boxShadow: "0 0 8px rgba(184, 149, 85, 0.6)",
            }}
          />
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing: "0.14em",
              lineHeight: 1,
            }}
          >
            {badge}
          </Typography>
        </Box>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },
          color: "text.primary",
          mb: subtitle ? 2 : 0,
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.02rem", md: "1.14rem" },
            lineHeight: 1.75,
            maxWidth: isCenter ? "640px" : "720px",
            mx: isCenter ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Subtle gold accent underline */}
      <Box
        sx={{
          width: 48,
          height: "3px",
          borderRadius: "2px",
          backgroundColor: "secondary.main",
          mt: 3,
          mx: isCenter ? "auto" : 0,
        }}
      />
    </Box>
  );
}
