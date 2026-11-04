"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Code2,
  Layers,
  Database,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import MagneticButton from "../common/MagneticButton";

export default function Hero() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 14, sm: 16, md: 18 },
        pb: { xs: 10, md: 12 },
        zIndex: 1,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left Column: Text & CTAs */}
          <Grid item xs={12} lg={7}>
            <Box>
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 0.8,
                    borderRadius: "30px",
                    backgroundColor: isDark
                      ? "rgba(184, 149, 85, 0.12)"
                      : "rgba(184, 149, 85, 0.08)",
                    border: "1px solid",
                    borderColor: isDark
                      ? "rgba(184, 149, 85, 0.3)"
                      : "rgba(184, 149, 85, 0.25)",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "secondary.main",
                      boxShadow: "0 0 10px #B89555",
                      animation: shouldReduceMotion ? "none" : "pulse 2s infinite ease-in-out",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(0.9)", opacity: 0.8 },
                        "50%": { transform: "scale(1.3)", opacity: 1 },
                        "100%": { transform: "scale(0.9)", opacity: 0.8 },
                      },
                    }}
                  />
                  <Typography
                    variant="overline"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 700,
                      fontSize: { xs: "0.68rem", sm: "0.74rem" },
                      letterSpacing: "0.14em",
                    }}
                  >
                    {personalData.hero.badge}
                  </Typography>
                </Box>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.2rem", xl: "4.8rem" },
                    color: "text.primary",
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    mb: 3,
                  }}
                >
                  Building Digital Experiences{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "secondary.main",
                      fontStyle: "italic",
                      display: "inline-block",
                    }}
                  >
                    That Feel Effortless.
                  </Box>
                </Typography>
              </motion.div>

              {/* Supporting Description */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.18rem" },
                    lineHeight: 1.75,
                    color: "text.secondary",
                    maxWidth: "680px",
                    mb: 4,
                  }}
                >
                  {personalData.hero.description}
                </Typography>
              </motion.div>

              {/* Highlight Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "text.secondary",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      mr: 1,
                    }}
                  >
                    Core Stack:
                  </Typography>

                  {personalData.hero.primaryTechs.map((tech) => (
                    <Box
                      key={tech.name}
                      sx={{
                        px: 1.8,
                        py: 0.75,
                        borderRadius: "8px",
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.04)"
                          : "rgba(41, 39, 100, 0.04)",
                        border: "1px solid",
                        borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(41, 39, 100, 0.12)",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: "secondary.main",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "secondary.main",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "text.primary",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>

              {/* CTA Buttons & Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 2.5,
                  }}
                >
                  <MagneticButton
                    variant="contained"
                    size="large"
                    onClick={handleScrollToProjects}
                    endIcon={<ArrowDown size={18} />}
                    sx={{
                      px: 3.5,
                      py: 1.4,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                  >
                    Explore My Work
                  </MagneticButton>

                  <MagneticButton
                    variant="outlined"
                    size="large"
                    component="a"
                    href={personalData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Download size={18} />}
                    sx={{
                      px: 3,
                      py: 1.4,
                      fontSize: "0.95rem",
                    }}
                  >
                    Download Resume
                  </MagneticButton>

                  {/* Social links */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      pl: { xs: 0, sm: 2 },
                      borderLeft: { sm: "1px solid" },
                      borderColor: { sm: "divider" },
                    }}
                  >
                    <Tooltip title="GitHub">
                      <IconButton
                        component="a"
                        href={personalData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        sx={{
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "secondary.main",
                          },
                        }}
                      >
                        <Github size={18} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="LinkedIn">
                      <IconButton
                        component="a"
                        href={personalData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        sx={{
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "secondary.main",
                          },
                        }}
                      >
                        <Linkedin size={18} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Email Me">
                      <IconButton
                        component="a"
                        href={`mailto:${personalData.email}`}
                        aria-label="Email developer"
                        sx={{
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "secondary.main",
                          },
                        }}
                      >
                        <Mail size={18} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Right Column: Interactive Developer Profile Visual */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: "100%", sm: "520px" },
                  mx: "auto",
                }}
              >
                {/* Floating Technology Badge 1: Top-Right */}
                <Box
                  component={motion.div}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -10, 0],
                        }
                  }
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -10,
                    zIndex: 4,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: isDark ? "#1C1C2C" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: "secondary.main",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.12)",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <Code2 size={16} color="#B89555" />
                  <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    React 18 / Next.js
                  </Typography>
                </Box>

                {/* Floating Technology Badge 2: Bottom-Left */}
                <Box
                  component={motion.div}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, 10, 0],
                        }
                  }
                  transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: -20,
                    zIndex: 4,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: isDark ? "#1C1C2C" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isDark ? "#8580FF44" : "#29276433",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.12)",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <Database size={16} color="#8580FF" />
                  <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    NestJS & PostgreSQL
                  </Typography>
                </Box>

                {/* Main Card: Code Architecture & Developer Persona Interface */}
                <Box
                  sx={{
                    borderRadius: 4,
                    backgroundColor: isDark ? "#141420" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isDark ? "#2A2A40" : "#EAE8E2",
                    boxShadow: isDark
                      ? "0 25px 60px -15px rgba(0, 0, 0, 0.7)"
                      : "0 20px 50px -15px rgba(41, 39, 100, 0.12)",
                    overflow: "hidden",
                  }}
                >
                  {/* Terminal Header */}
                  <Box
                    sx={{
                      px: 2.5,
                      py: 1.8,
                      backgroundColor: isDark ? "#0F0F18" : "#F4F2EC",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                      <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#27C93F" }} />
                      <Typography
                        variant="caption"
                        sx={{
                          ml: 1.5,
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "text.secondary",
                          letterSpacing: "0.04em",
                        }}
                      >
                        uzzal.dev/architecture.ts
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <Sparkles size={14} color="#B89555" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "secondary.main",
                          fontWeight: 700,
                        }}
                      >
                        PRODUCTION READY
                      </Typography>
                    </Box>
                  </Box>

                  {/* Profile & Code Summary Body */}
                  <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                    {/* Developer Meta Header */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 3 }}>
                      <Box
                        sx={{
                          position: "relative",
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          background: isDark
                            ? "linear-gradient(135deg, #8580FF 0%, #292764 100%)"
                            : "linear-gradient(135deg, #292764 0%, #3e3b8a 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#FFFFFF",
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          border: "2px solid",
                          borderColor: "secondary.main",
                          boxShadow: "0 8px 20px rgba(41, 39, 100, 0.2)",
                        }}
                      >
                        UH
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 2,
                            right: 2,
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: "#22C55E",
                            border: "2px solid #FFFFFF",
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                          {personalData.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "var(--font-mono)",
                            color: "secondary.main",
                            fontWeight: 600,
                            display: "block",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {personalData.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                          📍 {personalData.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Code Snippet Display */}
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: isDark ? "#0A0A10" : "#F7F6F1",
                        border: "1px solid",
                        borderColor: isDark ? "#1E1E2C" : "#E5E2D6",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        color: isDark ? "#D2D2E0" : "#2E3036",
                        mb: 3,
                        overflowX: "auto",
                      }}
                    >
                      <div>
                        <span style={{ color: "#B89555" }}>const</span> engineer:{" "}
                        <span style={{ color: "#3B82F6" }}>FullStackArchitect</span> = &#123;
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        domain: <span style={{ color: "#22C55E" }}>&quot;Enterprise Web & Travel B2B&quot;</span>,
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        experience: <span style={{ color: "#EC4899" }}>&quot;3–5 Years Professional&quot;</span>,
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        frontend: [<span style={{ color: "#22C55E" }}>&quot;React&quot;</span>,{" "}
                        <span style={{ color: "#22C55E" }}>&quot;Next.js&quot;</span>,{" "}
                        <span style={{ color: "#22C55E" }}>&quot;TypeScript&quot;</span>],
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        backend: [<span style={{ color: "#22C55E" }}>&quot;Node.js&quot;</span>,{" "}
                        <span style={{ color: "#22C55E" }}>&quot;NestJS&quot;</span>,{" "}
                        <span style={{ color: "#22C55E" }}>&quot;PostgreSQL&quot;</span>],
                      </div>
                      <div style={{ paddingLeft: "16px" }}>
                        mindset: <span style={{ color: "#EAB308" }}>&quot;Performance, Resilience, Ownership&quot;</span>,
                      </div>
                      <div>&#125;;</div>
                    </Box>

                    {/* Metrics Bar */}
                    <Grid container spacing={1.5}>
                      {[
                        { label: "Frontend", val: "Primary Core" },
                        { label: "Architecture", val: "Design Systems" },
                        { label: "Backend API", val: "Practical Know" },
                      ].map((stat, i) => (
                        <Grid item xs={4} key={i}>
                          <Box
                            sx={{
                              p: 1.2,
                              borderRadius: 1.5,
                              backgroundColor: isDark
                                ? "rgba(255, 255, 255, 0.02)"
                                : "rgba(0, 0, 0, 0.02)",
                              border: "1px solid",
                              borderColor: "divider",
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                fontSize: "0.68rem",
                                display: "block",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {stat.label}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 700,
                                fontSize: "0.78rem",
                                color: "text.primary",
                                mt: 0.2,
                              }}
                            >
                              {stat.val}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Animated Scroll Down Indicator */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: { xs: 8, md: 10 },
            cursor: "pointer",
          }}
          onClick={handleScrollToProjects}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              color: "text.secondary",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Scroll to explore
          </Typography>
          <Box
            component={motion.div}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              width: 24,
              height: 38,
              borderRadius: "12px",
              border: "2px solid",
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              pt: 0.8,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                borderRadius: "2px",
                backgroundColor: "secondary.main",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
