"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ExternalLink,
  ArrowUpRight,
  Lock,
  Layers,
  Sparkles,
  Plane,
  Radio,
  Send,
  ShieldCheck,
  Building2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import ResumeModal from "../common/ResumeModal";
import ModernAvatar from "../animation/ModernAvatar";
import SkiperTiltCard from "../animation/SkiperTiltCard";
import { SkiperCopyButton } from "../animation/SkiperIcons";

interface HeroShowcaseProject {
  slug: string;
  name: string;
  category: string;
  domain: string;
  image: string;
  liveUrl: string;
  metricLabel: string;
  metricValue: string;
  highlight: string;
  tech: string[];
  icon: React.ReactNode;
}

const showcaseProjects: HeroShowcaseProject[] = [
  {
    slug: "tripfindy-b2b-travel-platform",
    name: "TripFindy B2B",
    category: "Travel Technology",
    domain: "tripfindy.com",
    image: "/images/projects/tripfindy.png",
    liveUrl: "https://tripfindy.com",
    metricLabel: "Search Filter Response",
    metricValue: "< 16ms Latency",
    highlight:
      "Flagship multi-tenant GDS travel platform with dynamic white-label CSS theming, multi-leg flight search, and instant automated PNR issuance.",
    tech: ["Next.js App Router", "React 18", "TypeScript", "Redux Toolkit", "Material UI v5"],
    icon: <Plane size={14} />,
  },
  {
    slug: "aero-bangladesh-travel-platform",
    name: "Aero Bangladesh",
    category: "Travel Technology",
    domain: "aero.com.bd",
    image: "/images/projects/aero.png",
    liveUrl: "https://aero.com.bd/",
    metricLabel: "GDS Flight Feeds",
    metricValue: "Multi-Carrier GDS",
    highlight:
      "Enterprise flight booking engine tailored for Bangladesh agencies, featuring live fare calendars, seat maps, and agent markups.",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Vite"],
    icon: <Plane size={14} />,
  },
  {
    slug: "gotisms-bulk-sms-cpaas-platform",
    name: "GotiSMS CPaaS",
    category: "Cloud Communications",
    domain: "gotisms.com",
    image: "/images/projects/gotisms.png",
    liveUrl: "https://gotisms.com/",
    metricLabel: "OTP Verification",
    metricValue: "Sub-3s Delivery",
    highlight:
      "High-throughput carrier-grade SMS gateway with multi-operator routing across GP, Banglalink, Robi, Teletalk, and live DLR WebSockets.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Material UI", "SMPP"],
    icon: <Send size={14} />,
  },
  {
    slug: "gotimail-enterprise-email-workspace",
    name: "GotiMail Cloud",
    category: "Enterprise Cloud",
    domain: "gotimail.com",
    image: "/images/projects/gotimail.png",
    liveUrl: "https://gotimail.com/",
    metricLabel: "Message Pipeline",
    metricValue: "100k+ Emails / Hr",
    highlight:
      "Corporate business email suite with Amazon SES transactional relays, automated DKIM/SPF DNS verification, and role-based domain control.",
    tech: ["React 18", "Next.js", "Amazon SES", "TypeScript", "RBAC"],
    icon: <Mail size={14} />,
  },
  {
    slug: "safety-gps-tracker-iot-telematics",
    name: "Safety GPS",
    category: "IoT & Telematics",
    domain: "safetygpstracker.com.bd",
    image: "/images/projects/safetygps.png",
    liveUrl: "https://safetygpstracker.com.bd/",
    metricLabel: "Satellite Stream",
    metricValue: "< 5s Live Sync",
    highlight:
      "Real-time satellite GPS tracking with animated historical trip playback, automated polygon geofence breaches, and remote engine cutoff.",
    tech: ["React.js", "Leaflet", "Mapbox GL", "WebSockets", "Redux"],
    icon: <Radio size={14} />,
  },
  {
    slug: "auditnext-digital-compliance-platform",
    name: "AuditNext Engine",
    category: "Compliance & Legal",
    domain: "auditnext.com.bd",
    image: "/images/projects/auditnext.png",
    liveUrl: "https://auditnext.com.bd/",
    metricLabel: "Audit Automation",
    metricValue: "100% Automated",
    highlight:
      "Corporate statutory audit and tax compliance platform verifying filings against NBR laws with automated PDF audit trail generation.",
    tech: ["React 18", "TypeScript Strict", "Material UI v5", "Vector PDF"],
    icon: <ShieldCheck size={14} />,
  },
];

const keyMetrics = [
  { value: "5+ Years", label: "Commercial Experience", sub: "Frontend & Full-Stack" },
  { value: "15+ Apps", label: "Shipped To Production", sub: "B2B Travel, CPaaS, IoT" },
  { value: "< 16ms", label: "Search Filter Response", sub: "Memoized Redux Selectors" },
  { value: "100k+", label: "Concurrent Throughput", sub: "Carrier-Grade Messaging" },
];

export default function Hero() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<HeroShowcaseProject>(
    showcaseProjects[0]
  );

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
          pt: { xs: 12, sm: 15, md: 17 },
          pb: { xs: 8, md: 12 },
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
            opacity: isDark ? 1 : 0.45,
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          className="schematic-grid"
          style={{
            position: "absolute",
            inset: 0,
            opacity: isDark ? 0.75 : 0.5,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Main Hero 2-Column Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
              gap: { xs: 5, lg: 7 },
              alignItems: "center",
            }}
          >
            {/* Left Column: Modern Avatar, Authoritative Headline, Metrics & CTAs */}
            <Box>
              {/* 01. Modern Animated Developer Avatar with 3D Physics */}
              <ModernAvatar />

              {/* 02. Headline with Apple Shimmer Fluid Gradient */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "2.9rem", md: "3.5rem" },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "text.primary",
                  mb: 2.2,
                }}
              >
                Engineering Resilient Digital Products{" "}
                <span className="apple-shimmer-text">
                  With Deep Frontend Mastery.
                </span>
              </Typography>

              {/* 03. Punchy Value Proposition */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.98rem", md: "1.08rem" },
                  lineHeight: 1.75,
                  color: "text.secondary",
                  maxWidth: "580px",
                  mb: 3.5,
                }}
              >
                Senior Frontend Architect with{" "}
                <strong style={{ color: isDark ? "#FFFFFF" : "#0A1224" }}>
                  5+ years of commercial experience
                </strong>{" "}
                building mission-critical B2B travel distribution platforms
                (TripFindy, Aero Bangladesh), carrier-grade CPaaS engines
                (GotiSMS, GotiMail), real-time IoT fleet telematics (Safety GPS),
                and corporate compliance systems (AuditNext, Impressive Group).
              </Typography>

              {/* 04. Key Metrics Grid (Glass Badges) */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
                  gap: 1.5,
                  mb: 3.5,
                }}
              >
                {keyMetrics.map((m) => (
                  <Box
                    key={m.label}
                    sx={{
                      p: 1.4,
                      borderRadius: "12px",
                      backgroundColor: isDark
                        ? "rgba(16, 28, 53, 0.7)"
                        : "rgba(255, 255, 255, 0.8)",
                      border: "1px solid",
                      borderColor: isDark
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(41, 39, 100, 0.1)",
                      backdropFilter: "blur(12px)",
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
                        mb: 0.3,
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
                        mb: 0.2,
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
                ))}
              </Box>

              {/* 05. Core Technology Pills */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1,
                  mb: 4,
                }}
              >
                {[
                  "React 19 & Next.js 15 (App Router)",
                  "TypeScript Strict",
                  "Redux Toolkit (<16ms Cache)",
                  "Material UI v5 / Tailwind",
                  "WebSockets Real-Time",
                  "Node.js & NestJS",
                ].map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 1.2,
                      py: 0.45,
                      borderRadius: "6px",
                      backgroundColor: isDark
                        ? "rgba(255, 255, 255, 0.04)"
                        : "rgba(41, 39, 100, 0.04)",
                      border: "1px solid",
                      borderColor: isDark
                        ? "rgba(255, 255, 255, 0.12)"
                        : "rgba(41, 39, 100, 0.12)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>

              {/* 06. Action Buttons & Quick Copy Email */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleScrollTo("projects")}
                  endIcon={<ArrowRight size={17} />}
                  sx={{
                    px: 3.2,
                    py: 1.3,
                    fontSize: "0.94rem",
                    fontWeight: 600,
                  }}
                >
                  Explore Selected Work
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setResumeOpen(true)}
                  startIcon={<FileText size={17} />}
                  sx={{
                    px: 2.8,
                    py: 1.3,
                    fontSize: "0.94rem",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "divider",
                  }}
                >
                  Download CV (PDF)
                </Button>

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
                    pl: { xs: 0, sm: 1.5 },
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
                        "&:hover": {
                          color: "text.primary",
                          borderColor: "#22B8CF",
                        },
                      }}
                    >
                      <Github size={17} />
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
                        "&:hover": {
                          color: "text.primary",
                          borderColor: "#4169F5",
                        },
                      }}
                    >
                      <Linkedin size={17} />
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
                        "&:hover": {
                          color: "text.primary",
                          borderColor: "secondary.main",
                        },
                      }}
                    >
                      <Mail size={17} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>

            {/* Right Column: Interactive Production Ecosystem Showcase Hub */}
            <Box
              sx={{
                position: "relative",
                mx: "auto",
                width: "100%",
                maxWidth: { xs: "100%", sm: "520px", lg: "540px" },
              }}
            >
              {/* 3D Perspective Tilt Card */}
              <SkiperTiltCard maxTilt={5}>
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: isDark ? "#0A1224" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isDark
                      ? "rgba(34, 184, 207, 0.35)"
                      : "rgba(41, 39, 100, 0.18)",
                    backdropFilter: "blur(24px) saturate(180%)",
                    boxShadow: isDark
                      ? "0 25px 70px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(34, 184, 207, 0.15)"
                      : "0 20px 50px -10px rgba(41, 39, 100, 0.12)",
                  }}
                >
                  {/* Mac Browser Frame Top Header */}
                  <Box
                    sx={{
                      px: 2,
                      py: 1.2,
                      backgroundColor: isDark ? "#060B17" : "#ECEAE2",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <Box
                        sx={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#FF5F56",
                        }}
                      />
                      <Box
                        sx={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#FFBD2E",
                        }}
                      />
                      <Box
                        sx={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#27C93F",
                        }}
                      />

                      {/* Verified Domain Bar */}
                      <Box
                        sx={{
                          ml: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.6,
                          px: 1.2,
                          py: 0.3,
                          borderRadius: "5px",
                          backgroundColor: isDark ? "#0E182D" : "#FFFFFF",
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        <Lock size={10} color="#22C55E" />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            color: "text.primary",
                            fontWeight: 600,
                          }}
                        >
                          https://{activeProject.domain}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Live Production Status Badge */}
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.6,
                        px: 1,
                        py: 0.25,
                        borderRadius: "4px",
                        backgroundColor: "rgba(34, 197, 94, 0.12)",
                        color: "#22C55E",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.66rem",
                        fontWeight: 700,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#22C55E",
                          boxShadow: "0 0 6px #22C55E",
                        }}
                      />
                      LIVE ARCHITECTURE
                    </Box>
                  </Box>

                  {/* Interactive Platform Tabs (Switch Live Previews) */}
                  <Box
                    sx={{
                      p: 1.2,
                      backgroundColor: isDark ? "#080F1E" : "#F7F6F1",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 0.8,
                    }}
                  >
                    {showcaseProjects.map((p) => {
                      const isActive = p.slug === activeProject.slug;
                      return (
                        <Box
                          key={p.slug}
                          component="button"
                          onClick={() => setActiveProject(p)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,
                            p: 0.8,
                            borderRadius: "8px",
                            border: "1px solid",
                            borderColor: isActive
                              ? isDark
                                ? "#22B8CF"
                                : "primary.main"
                              : "transparent",
                            backgroundColor: isActive
                              ? isDark
                                ? "rgba(34, 184, 207, 0.15)"
                                : "rgba(41, 39, 100, 0.08)"
                              : "transparent",
                            color: isActive
                              ? isDark
                                ? "#FFFFFF"
                                : "primary.main"
                              : "text.secondary",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: isActive
                                ? undefined
                                : isDark
                                ? "rgba(255, 255, 255, 0.04)"
                                : "rgba(0, 0, 0, 0.04)",
                            },
                          }}
                        >
                          <Box sx={{ color: isActive ? "#22B8CF" : "inherit" }}>
                            {p.icon}
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              fontWeight: isActive ? 700 : 500,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {p.name}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Live High-Resolution Screenshot Preview */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: "220px", sm: "260px" },
                      backgroundColor: "#060B17",
                      overflow: "hidden",
                      lineHeight: 0,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProject.slug}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Box
                          component="img"
                          src={activeProject.image}
                          alt={`${activeProject.name} Architecture Preview`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Metric Chip Floating on Screenshot */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                        px: 1.4,
                        py: 0.6,
                        borderRadius: "8px",
                        backgroundColor: isDark
                          ? "rgba(6, 11, 23, 0.92)"
                          : "rgba(255, 255, 255, 0.94)",
                        border: "1px solid",
                        borderColor: isDark ? "#22B8CF" : "primary.main",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.62rem",
                          fontFamily: "var(--font-mono)",
                          display: "block",
                        }}
                      >
                        {activeProject.metricLabel}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#22B8CF",
                          fontSize: "0.76rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                        }}
                      >
                        {activeProject.metricValue}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Active Platform Information & Case Study Trigger */}
                  <Box
                    sx={{
                      p: 2.2,
                      backgroundColor: isDark ? "#0A1224" : "#FFFFFF",
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          fontSize: "1rem",
                          color: "text.primary",
                        }}
                      >
                        {activeProject.name} &bull; {activeProject.category}
                      </Typography>

                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                          component={Link}
                          href={`/projects/${activeProject.slug}`}
                          size="small"
                          variant="contained"
                          endIcon={<ArrowUpRight size={13} />}
                          sx={{
                            fontSize: "0.74rem",
                            fontWeight: 700,
                            py: 0.4,
                            px: 1.4,
                          }}
                        >
                          Case Study
                        </Button>

                        <Button
                          component="a"
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          variant="outlined"
                          endIcon={<ExternalLink size={13} />}
                          sx={{
                            fontSize: "0.74rem",
                            py: 0.4,
                            px: 1.2,
                          }}
                        >
                          Live Site
                        </Button>
                      </Box>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "text.secondary",
                        fontSize: "0.78rem",
                        lineHeight: 1.55,
                        mb: 1.8,
                      }}
                    >
                      {activeProject.highlight}
                    </Typography>

                    {/* Tech Badges */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                      {activeProject.tech.map((t) => (
                        <Box
                          key={t}
                          sx={{
                            px: 0.9,
                            py: 0.25,
                            borderRadius: "4px",
                            backgroundColor: isDark
                              ? "rgba(255, 255, 255, 0.04)"
                              : "rgba(41, 39, 100, 0.04)",
                            border: "1px solid",
                            borderColor: "divider",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.66rem",
                            color: "text.secondary",
                          }}
                        >
                          {t}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Architecture Telemetry Footer Strip */}
                  <Box
                    sx={{
                      px: 2,
                      py: 0.8,
                      backgroundColor: isDark ? "#060B17" : "#F7F6F1",
                      borderTop: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <Cpu size={12} color="#22B8CF" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.66rem",
                          color: "text.secondary",
                        }}
                      >
                        CORE SYSTEM: NORMALIZED REDUX &bull; APP ROUTER
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.64rem",
                        color: "#22C55E",
                        fontWeight: 700,
                      }}
                    >
                      ● 99.98% RESILIENCE
                    </Typography>
                  </Box>
                </Box>
              </SkiperTiltCard>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* UK CV Preview Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
