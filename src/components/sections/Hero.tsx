"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Radio,
  CheckCircle2,
  Clock,
  Rocket,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import ResumeModal from "../common/ResumeModal";
import ModernAvatar from "../animation/ModernAvatar";
import { SkiperCopyButton } from "../animation/SkiperIcons";

const keyMetrics = [
  { value: "100k+", label: "CPaaS Msg / Hr", sub: "Sub-3s Carrier OTP" },
  { value: "99.98%", label: "Resilience", sub: "Multi-Tenant Theming" },
  { value: "5+ Years", label: "Commercial", sub: "15+ Production Apps" },
];

const coreTechPills = [
  "React 19",
  "Next.js 15 (App Router)",
  "TypeScript Strict",
  "Redux Toolkit (<16ms Cache)",
  "WebSockets",
  "Node.js / NestJS",
];

// Apple Cinematic Stagger Easing
const appleEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance dual slider every 7 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        id="hero"
        component="section"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: { xs: 12, sm: 14, md: 16 },
          pb: { xs: 8, md: 11 },
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Apple-Style Ambient Radial Aurora Glow */}
        <div
          aria-hidden="true"
          className="aurora"
          style={{
            position: "absolute",
            inset: 0,
            opacity: isDark ? 0.95 : 0.45,
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="schematic-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: isDark ? 0.65 : 0.4,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Main Hero 2-Column Grid: Left Content, Right Modern 3D Avatar */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.12fr 0.88fr" },
              gap: { xs: 5, lg: 6 },
              alignItems: "center",
            }}
          >
            {/* Left Column: Comprehensive Written Content, Interactive Two Slider, Metrics & Actions */}
            <Box>
              {/* 01. Sleek Apple Dynamic Recruiter Beacon */}
              <motion.div
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: appleEase }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.4,
                    py: 0.38,
                    borderRadius: "20px",
                    backgroundColor: isDark
                      ? "rgba(34, 184, 207, 0.1)"
                      : "rgba(41, 39, 100, 0.05)",
                    border: "1px solid",
                    borderColor: isDark
                      ? "rgba(34, 184, 207, 0.28)"
                      : "rgba(41, 39, 100, 0.12)",
                    backdropFilter: "blur(14px)",
                    mb: 1.8,
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "#22C55E",
                      boxShadow: "0 0 8px #22C55E",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: isDark ? "#22B8CF" : "primary.main",
                    }}
                  >
                    OPEN FOR SENIOR FRONTEND &amp; ARCHITECTURE ROLES
                  </Typography>
                </Box>
              </motion.div>

              {/* 02. High-Impact Master Headline with Apple Metallic Shimmer */}
              {/* <motion.div
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  className="apple-shimmer-text"
                  sx={{
                    fontSize: {
                      xs: "2.35rem",
                      sm: "3.1rem",
                      md: "3.65rem",
                      lg: "4.05rem",
                    },
                    fontWeight: 900,
                    lineHeight: { xs: 1.08, md: 1.05 },
                    letterSpacing: "-0.04em",
                    mb: 2.2,
                  }}
                >
                  Architecting High-Throughput Web Platforms With Frontend Precision.
                </Typography>
              </motion.div> */}

              {/* 03. Short, Punchy Description (AI-Augmented Velocity + Complex Problem Solving) */}
              {/* <motion.div
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.18, ease: appleEase }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.98rem", md: "1.08rem" },
                    lineHeight: 1.6,
                    color: "text.secondary",
                    maxWidth: "580px",
                    mb: 2.8,
                  }}
                >
                  I am <strong style={{ color: isDark ? "#FFFFFF" : "#0A1128" }}>Uzzal Hossain</strong>, a Senior Frontend Engineer with 5+ years of commercial experience engineering mission-critical airline platforms (<strong style={{ color: isDark ? "#22B8CF" : "#1B2A4E" }}>TripFindy</strong>, <strong style={{ color: isDark ? "#22B8CF" : "#1B2A4E" }}>Ticket Lagbe</strong>, <strong style={{ color: isDark ? "#22B8CF" : "#1B2A4E" }}>B2B.FlightBlu</strong>), telematics &amp; CPaaS engines.
                </Typography>
              </motion.div> */}


              {/* 04. Beautiful Interactive Two Slider (AI 10x Velocity vs Complex Systems Solver) */}
              <motion.div
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.25, ease: appleEase }}
              >
                <Box
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    backgroundColor: isDark
                      ? "rgba(14, 24, 45, 0.78)"
                      : "rgba(255, 255, 255, 0.92)",
                    border: "1px solid",
                    borderColor: isDark
                      ? activeSlide === 0
                        ? "rgba(34, 184, 207, 0.35)"
                        : "rgba(212, 186, 130, 0.35)"
                      : activeSlide === 0
                        ? "rgba(34, 184, 207, 0.25)"
                        : "rgba(184, 149, 85, 0.25)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    boxShadow: isDark
                      ? activeSlide === 0
                        ? "0 18px 45px -10px rgba(0, 0, 0, 0.65), 0 0 25px rgba(34, 184, 207, 0.15)"
                        : "0 18px 45px -10px rgba(0, 0, 0, 0.65), 0 0 25px rgba(212, 186, 130, 0.15)"
                      : "0 12px 35px -8px rgba(41, 39, 100, 0.12)",
                    mb: 2.8,
                    overflow: "hidden",
                    transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                  }}
                >
                  {/* Top Specular Hairline Highlight */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        activeSlide === 0
                          ? "linear-gradient(90deg, transparent, rgba(34, 184, 207, 0.6), transparent)"
                          : "linear-gradient(90deg, transparent, rgba(212, 186, 130, 0.6), transparent)",
                      transition: "background 0.4s ease",
                    }}
                  />

                  {/* Two Slider Header: Segmented Pills & Carousel Controls */}
                  <Box
                    sx={{
                      px: { xs: 1.4, sm: 2 },
                      pt: 1.4,
                      pb: 1.2,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                      backgroundColor: isDark
                        ? "rgba(6, 11, 23, 0.5)"
                        : "rgba(240, 239, 234, 0.6)",
                    }}
                  >
                    {/* Segmented Tab Controls */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        p: 0.4,
                        borderRadius: "10px",
                        backgroundColor: isDark
                          ? "rgba(10, 18, 36, 0.8)"
                          : "rgba(255, 255, 255, 0.9)",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      {/* Slide 0: AI 10x Velocity Tab */}
                      <Box
                        component="button"
                        onClick={() => setActiveSlide(0)}
                        sx={{
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.7,
                          px: 1.4,
                          py: 0.55,
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: "transparent",
                          color: activeSlide === 0
                            ? isDark
                              ? "#FFFFFF"
                              : "primary.main"
                            : "text.secondary",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          fontWeight: activeSlide === 0 ? 800 : 600,
                          cursor: "pointer",
                          outline: "none",
                          zIndex: 1,
                          transition: "color 0.2s ease",
                        }}
                      >
                        {activeSlide === 0 && (
                          <motion.div
                            layoutId="superpowerActiveSlide"
                            style={{
                              position: "absolute",
                              inset: 0,
                              borderRadius: 8,
                              backgroundColor: isDark
                                ? "rgba(34, 184, 207, 0.2)"
                                : "rgba(41, 39, 100, 0.09)",
                              border: isDark
                                ? "1px solid rgba(34, 184, 207, 0.5)"
                                : "1px solid rgba(41, 39, 100, 0.2)",
                              boxShadow: isDark
                                ? "0 2px 12px rgba(34, 184, 207, 0.25)"
                                : "0 2px 6px rgba(0,0,0,0.05)",
                              zIndex: -1,
                            }}
                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          />
                        )}
                        <Zap size={14} color="#22B8CF" />
                        <span>AI-Powered 10x Velocity</span>
                      </Box>

                      {/* Slide 1: Complex Systems Solver Tab */}
                      <Box
                        component="button"
                        onClick={() => setActiveSlide(1)}
                        sx={{
                          position: "relative",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.7,
                          px: 1.4,
                          py: 0.55,
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: "transparent",
                          color: activeSlide === 1
                            ? isDark
                              ? "#FFFFFF"
                              : "primary.main"
                            : "text.secondary",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          fontWeight: activeSlide === 1 ? 800 : 600,
                          cursor: "pointer",
                          outline: "none",
                          zIndex: 1,
                          transition: "color 0.2s ease",
                        }}
                      >
                        {activeSlide === 1 && (
                          <motion.div
                            layoutId="superpowerActiveSlide"
                            style={{
                              position: "absolute",
                              inset: 0,
                              borderRadius: 8,
                              backgroundColor: isDark
                                ? "rgba(212, 186, 130, 0.2)"
                                : "rgba(184, 149, 85, 0.12)",
                              border: isDark
                                ? "1px solid rgba(212, 186, 130, 0.5)"
                                : "1px solid rgba(184, 149, 85, 0.25)",
                              boxShadow: isDark
                                ? "0 2px 12px rgba(212, 186, 130, 0.25)"
                                : "0 2px 6px rgba(0,0,0,0.05)",
                              zIndex: -1,
                            }}
                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          />
                        )}
                        <Cpu size={14} color="#D4BA82" />
                        <span>Complex Systems Solver</span>
                      </Box>
                    </Box>

                    {/* Slider Navigation Dots & Prev/Next Arrows */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {/* Visual Indicator Dots */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                        <Box
                          onClick={() => setActiveSlide(0)}
                          sx={{
                            width: activeSlide === 0 ? 20 : 6,
                            height: 6,
                            borderRadius: "4px",
                            backgroundColor: activeSlide === 0 ? "#22B8CF" : "text.secondary",
                            opacity: activeSlide === 0 ? 1 : 0.4,
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                        <Box
                          onClick={() => setActiveSlide(1)}
                          sx={{
                            width: activeSlide === 1 ? 20 : 6,
                            height: 6,
                            borderRadius: "4px",
                            backgroundColor: activeSlide === 1 ? "#D4BA82" : "text.secondary",
                            opacity: activeSlide === 1 ? 1 : 0.4,
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      </Box>

                      {/* Previous Slide Button */}
                      <IconButton
                        size="small"
                        onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
                        aria-label="Previous superpower"
                        sx={{
                          width: 26,
                          height: 26,
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": { color: "text.primary", borderColor: "#22B8CF" },
                        }}
                      >
                        <ChevronLeft size={14} />
                      </IconButton>

                      {/* Next Slide Button */}
                      <IconButton
                        size="small"
                        onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
                        aria-label="Next superpower"
                        sx={{
                          width: 26,
                          height: 26,
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": { color: "text.primary", borderColor: "#22B8CF" },
                        }}
                      >
                        <ChevronRight size={14} />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Slider Body with Animated Depth Dissolve */}
                  <Box sx={{ p: { xs: 1.8, sm: 2.2 }, minHeight: { xs: "210px", sm: "190px" } }}>
                    <AnimatePresence mode="wait">
                      {activeSlide === 0 ? (
                        /* SLIDE 0: AI-POWERED 10X VELOCITY */
                        <motion.div
                          key="slide-ai-velocity"
                          initial={{ opacity: 0, x: -16, filter: "blur(6px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: 16, filter: "blur(6px)" }}
                          transition={{ duration: 0.38, ease: appleEase }}
                        >
                          {/* Slide Title & Value Statement */}
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(34, 184, 207, 0.15)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#22B8CF",
                                  boxShadow: "0 0 12px rgba(34, 184, 207, 0.3)",
                                }}
                              >
                                <Zap size={17} />
                              </Box>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "0.95rem", sm: "1.02rem" },
                                    color: "text.primary",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  AI-Augmented 10x Engineering Velocity
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: "#22B8CF",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                  }}
                                >
                                  RAPID PRODUCTION SHIPPING &bull; AUTOMATED QUALITY
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: { xs: "none", sm: "inline-flex" },
                                alignItems: "center",
                                gap: 0.6,
                                px: 1,
                                py: 0.3,
                                borderRadius: "6px",
                                backgroundColor: "rgba(34, 184, 207, 0.12)",
                                color: "#22B8CF",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.66rem",
                                fontWeight: 800,
                              }}
                            >
                              <Rocket size={11} />
                              3x-5x FASTER DELIVERY
                            </Box>
                          </Box>

                          {/* Hook Paragraph */}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              fontSize: "0.82rem",
                              lineHeight: 1.55,
                              mb: 1.8,
                            }}
                          >
                            I harness modern AI coding workflows (LLMs, AST codemods, and automated testing) to turn complex requirements into high-performance production code in hours instead of weeks—eliminating repetitive boilerplate while guaranteeing strict type safety.
                          </Typography>

                          {/* 3 High-Impact Capability Cards */}
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                              gap: 1.2,
                              mb: 1.4,
                            }}
                          >
                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(34, 184, 207, 0.2)"
                                  : "rgba(41, 39, 100, 0.1)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <Clock size={13} color="#22B8CF" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  5x Faster Sprints
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                Instant scaffolding of Next.js modules, form state &amp; API schemas.
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(34, 184, 207, 0.2)"
                                  : "rgba(41, 39, 100, 0.1)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <Code2 size={13} color="#38BDF8" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  Intelligent Tests
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                Automated edge-case unit tests &amp; schema contract validation.
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(34, 184, 207, 0.2)"
                                  : "rgba(41, 39, 100, 0.1)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <ShieldCheck size={13} color="#22C55E" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  Strict Type Safety
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                100% strict TypeScript types with zero technical debt or shortcuts.
                              </Typography>
                            </Box>
                          </Box>

                          {/* Live Velocity Badges */}
                          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(34, 184, 207, 0.1)",
                                color: "#22B8CF",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● 10x Rapid Iteration
                            </Box>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(56, 189, 248, 0.1)",
                                color: "#38BDF8",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● 60% Reduced Time-to-Market
                            </Box>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(34, 197, 94, 0.1)",
                                color: "#22C55E",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● Continuous AI Code Audits
                            </Box>
                          </Box>
                        </motion.div>
                      ) : (
                        /* SLIDE 1: COMPLEX SYSTEMS SOLVER */
                        <motion.div
                          key="slide-complex-solver"
                          initial={{ opacity: 0, x: 16, filter: "blur(6px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: -16, filter: "blur(6px)" }}
                          transition={{ duration: 0.38, ease: appleEase }}
                        >
                          {/* Slide Title & Value Statement */}
                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <Box
                                sx={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: "8px",
                                  backgroundColor: "rgba(184, 149, 85, 0.15)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "#D4BA82",
                                  boxShadow: "0 0 12px rgba(184, 149, 85, 0.3)",
                                }}
                              >
                                <Cpu size={17} />
                              </Box>
                              <Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "0.95rem", sm: "1.02rem" },
                                    color: "text.primary",
                                    lineHeight: 1.2,
                                  }}
                                >
                                  Mastery in Complex Architecture &amp; Hard Engineering
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: isDark ? "#D4BA82" : "#96753a",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                  }}
                                >
                                  HIGH CONCURRENCY &bull; ZERO-LAG RESILIENCE
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: { xs: "none", sm: "inline-flex" },
                                alignItems: "center",
                                gap: 0.6,
                                px: 1,
                                py: 0.3,
                                borderRadius: "6px",
                                backgroundColor: "rgba(184, 149, 85, 0.14)",
                                color: isDark ? "#D4BA82" : "#96753a",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.66rem",
                                fontWeight: 800,
                              }}
                            >
                              <Layers size={11} />
                              MISSION-CRITICAL SCALE
                            </Box>
                          </Box>

                          {/* Hook Paragraph */}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              fontSize: "0.82rem",
                              lineHeight: 1.55,
                              mb: 1.8,
                            }}
                          >
                            Where generic solutions fail, true engineering begins. I thrive on solving difficult frontend bottlenecks: sub-16ms search latencies across consolidated airline GDS inventories, dynamic multi-tenant CSS variable injection, and high-frequency WebSockets.
                          </Typography>

                          {/* 3 Real Production Solution Cards */}
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                              gap: 1.2,
                              mb: 1.4,
                            }}
                          >
                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(212, 186, 130, 0.2)"
                                  : "rgba(184, 149, 85, 0.15)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <Zap size={13} color="#22B8CF" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  &lt; 16ms Latency
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                Memoized Redux filtering 800+ multi-leg itineraries on TripFindy.
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(212, 186, 130, 0.2)"
                                  : "rgba(184, 149, 85, 0.15)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <Layers size={13} color="#D4BA82" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  Multi-Tenant Theming
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                Dynamic runtime CSS variable injection across white-label travel agencies.
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: "10px",
                                backgroundColor: isDark
                                  ? "rgba(255, 255, 255, 0.03)"
                                  : "rgba(41, 39, 100, 0.04)",
                                border: "1px solid",
                                borderColor: isDark
                                  ? "rgba(212, 186, 130, 0.2)"
                                  : "rgba(184, 149, 85, 0.15)",
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mb: 0.4 }}>
                                <Radio size={13} color="#22C55E" />
                                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.74rem", color: "text.primary" }}>
                                  Real-Time WebSockets
                                </Typography>
                              </Box>
                              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.35, display: "block" }}>
                                GotiSMS 100k+ msg/hr CPaaS &amp; Safety GPS &lt;5s satellite sync.
                              </Typography>
                            </Box>
                          </Box>

                          {/* Live Architecture Badges */}
                          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(34, 184, 207, 0.1)",
                                color: "#22B8CF",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● Normalized Redux Toolkit
                            </Box>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(184, 149, 85, 0.12)",
                                color: isDark ? "#D4BA82" : "#96753a",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● Dynamic Runtime Theming
                            </Box>
                            <Box
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: "4px",
                                backgroundColor: "rgba(34, 197, 94, 0.1)",
                                color: "#22C55E",
                                fontSize: "0.66rem",
                                fontFamily: "var(--font-mono)",
                                fontWeight: 700,
                              }}
                            >
                              ● 99.98% High-Concurrency Uptime
                            </Box>
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>

                  {/* Subtle Auto-Play Slide Progress Bar */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      key={activeSlide}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                      style={{
                        height: "100%",
                        background:
                          activeSlide === 0
                            ? "linear-gradient(90deg, #22B8CF, #38BDF8)"
                            : "linear-gradient(90deg, #B89555, #D4BA82)",
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>

              {/* 05. Clean 4-Metric Glass Strip with Specular Sheen */}
              {/* <motion.div
                initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.32, ease: appleEase }}
              >
                <Box
                  className="apple-glass-sheen"
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
                    gap: 1.2,
                    mb: 2.8,
                    p: 1.2,
                    borderRadius: "16px",
                    backgroundColor: isDark
                      ? "rgba(16, 28, 53, 0.65)"
                      : "rgba(255, 255, 255, 0.8)",
                    border: "1px solid",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(41, 39, 100, 0.1)",
                    backdropFilter: "blur(20px)",
                    boxShadow: isDark
                      ? "0 12px 30px -10px rgba(0,0,0,0.5)"
                      : "0 8px 25px -8px rgba(41, 39, 100, 0.08)",
                  }}
                >
                  {keyMetrics.map((m) => (
                    <motion.div
                      key={m.label}
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    >
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.85,
                          borderRadius: "10px",
                          backgroundColor: isDark
                            ? "rgba(255, 255, 255, 0.025)"
                            : "rgba(41, 39, 100, 0.025)",
                          transition: "background-color 0.2s ease",
                          "&:hover": {
                            backgroundColor: isDark
                              ? "rgba(34, 184, 207, 0.08)"
                              : "rgba(41, 39, 100, 0.05)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 800,
                            fontSize: { xs: "1.05rem", sm: "1.15rem" },
                            color: "#22B8CF",
                            lineHeight: 1.1,
                            mb: 0.2,
                          }}
                        >
                          {m.value}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            fontWeight: 700,
                            fontSize: "0.72rem",
                            color: "text.primary",
                            lineHeight: 1.2,
                          }}
                        >
                          {m.label}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            color: "text.secondary",
                            fontSize: "0.64rem",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {m.sub}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div> */}

              {/* 06. Minimal Modern Tech Pills with Hover Bounce */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: appleEase }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 0.8,
                    mb: 3.2,
                  }}
                >
                  {coreTechPills.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, y: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Box
                        sx={{
                          px: 1.1,
                          py: 0.35,
                          borderRadius: "6px",
                          backgroundColor: isDark
                            ? "rgba(255, 255, 255, 0.035)"
                            : "rgba(41, 39, 100, 0.04)",
                          border: "1px solid",
                          borderColor: isDark
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(41, 39, 100, 0.1)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "text.primary",
                          cursor: "default",
                        }}
                      >
                        {tech}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* 07. Apple-Style Magnetic Action Buttons & Verified Profiles */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44, ease: appleEase }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 1.6,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => handleScrollTo("projects")}
                      endIcon={<ArrowRight size={16} />}
                      sx={{
                        px: 3.2,
                        py: 1.25,
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        boxShadow: isDark
                          ? "0 8px 24px rgba(34, 184, 207, 0.35)"
                          : "0 8px 20px rgba(41, 39, 100, 0.22)",
                      }}
                    >
                      Explore Work
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => setResumeOpen(true)}
                      startIcon={<FileText size={16} />}
                      sx={{
                        px: 2.8,
                        py: 1.25,
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        borderColor: isDark
                          ? "rgba(255, 255, 255, 0.2)"
                          : "divider",
                        "&:hover": {
                          borderColor: isDark ? "#22B8CF" : "primary.main",
                        },
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>

                  {/* Instant Copy Email */}
                  <SkiperCopyButton
                    textToCopy={personalData.email}
                    label="Copy Email"
                    copiedLabel="Email Copied!"
                  />

                  {/* Verified Social Profile Icons */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      pl: { xs: 0, sm: 1 },
                      borderLeft: { sm: "1px solid" },
                      borderColor: { sm: "divider" },
                    }}
                  >
                    <Tooltip title="GitHub (@uzzal70)">
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
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "#22B8CF",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Github size={16} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="LinkedIn (@uzzal70)">
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
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "#4169F5",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Linkedin size={16} />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Direct Email (uzzalcse70@gmail.com)">
                      <IconButton
                        component="a"
                        href={`mailto:${personalData.email}`}
                        aria-label="Email developer"
                        sx={{
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "text.primary",
                            borderColor: "secondary.main",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Mail size={16} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* Right Column: Modern 3D Animated Avatar Centerpiece with Spatial Badges & Tilt Physics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, delay: 0.2, ease: appleEase }}
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ModernAvatar />
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* UK CV Preview Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
