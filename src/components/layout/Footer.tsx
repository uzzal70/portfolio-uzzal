"use client";

import React from "react";
import { Box, Container, Typography, Grid, IconButton, Tooltip, Divider } from "@mui/material";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        pt: { xs: 8, md: 10 },
        pb: { xs: 5, md: 6 },
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: isDark ? "#0A0A10" : "#F4F2EC",
        overflow: "hidden",
      }}
    >
      {/* Subtle Connected SVG Wave Path in Footer Background */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: isDark ? 0.08 : 0.05,
        }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="none"
          stroke={isDark ? "#8580FF" : "#292764"}
          strokeWidth="2"
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96"
        />
      </svg>

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="space-between" sx={{ mb: 6 }}>
          {/* Logo & Bio */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  background: isDark
                    ? "linear-gradient(135deg, #8580FF 0%, #292764 100%)"
                    : "linear-gradient(135deg, #292764 0%, #3e3b8a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  border: "1px solid",
                  borderColor: "secondary.main",
                }}
              >
                {personalData.initials}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                {personalData.name}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxWidth: "420px",
                lineHeight: 1.7,
                mb: 2.5,
              }}
            >
              Frontend-focused Full-Stack Developer specializing in React.js, Next.js and enterprise application architectures. Engineered with precision and built for scale.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                color: "secondary.main",
                fontWeight: 600,
                display: "block",
              }}
            >
              {personalData.positioning}
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "secondary.main",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                mb: 2,
              }}
            >
              Navigation
            </Typography>

            <Grid container spacing={1}>
              {navLinks.map((item) => (
                <Grid item xs={6} key={item.label}>
                  <Box
                    component="a"
                    href={item.href}
                    sx={{
                      textDecoration: "none",
                      color: "text.secondary",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "secondary.main" },
                    }}
                  >
                    {item.label}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Connect & Back to top */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "secondary.main",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "block",
                mb: 2,
              }}
            >
              Connect
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": { borderColor: "secondary.main", color: "text.primary" },
                  }}
                >
                  <Github size={16} />
                </IconButton>
              </Tooltip>

              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": { borderColor: "secondary.main", color: "text.primary" },
                  }}
                >
                  <Linkedin size={16} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Email">
                <IconButton
                  component="a"
                  href={`mailto:${personalData.email}`}
                  size="small"
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": { borderColor: "secondary.main", color: "text.primary" },
                  }}
                >
                  <Mail size={16} />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              onClick={scrollToTop}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                color: "text.secondary",
                fontSize: "0.84rem",
                "&:hover": { color: "secondary.main" },
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={15} />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 4 }} />

        {/* Bottom Copyright & Location */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            &copy; {currentYear} {personalData.name}. All rights reserved. Designed & built with React.js, Next.js & Material UI v5.
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-mono)",
              color: "text.secondary",
              fontSize: "0.72rem",
            }}
          >
            Dhaka, Bangladesh &bull; Available Worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
