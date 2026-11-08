"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography, Button, Card } from "@mui/material";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  FileText,
  Plane,
  Scan,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { useAppTheme } from "@/theme/ThemeContext";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const isEven = index % 2 === 0;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return { bg: "rgba(34, 197, 94, 0.12)", color: "#22C55E", border: "rgba(34, 197, 94, 0.3)" };
      case "Prototype":
        return { bg: "rgba(245, 158, 11, 0.12)", color: "#F59E0B", border: "rgba(245, 158, 11, 0.3)" };
      case "In Progress":
        return { bg: "rgba(59, 130, 246, 0.12)", color: "#3B82F6", border: "rgba(59, 130, 246, 0.3)" };
      default:
        return { bg: "rgba(184, 149, 85, 0.12)", color: "#B89555", border: "rgba(184, 149, 85, 0.3)" };
    }
  };

  const statusStyle = getStatusColor(project.status);

  // Render bespoke interactive UI mock for each project
  const renderVisualMock = () => {
    switch (project.slug) {
      case "tripfindy-b2b-travel-platform":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {/* Multi-Brand Header Bar */}
            <Box
              sx={{
                p: 1.2,
                borderRadius: 1.5,
                backgroundColor: isDark ? "#141422" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Plane size={15} color="#B89555" />
                <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                  DAC &rarr; LHR · Multi-Brand Engine
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 1,
                  py: 0.2,
                  borderRadius: "4px",
                  backgroundColor: "rgba(184, 149, 85, 0.15)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "secondary.main",
                  fontWeight: 700,
                }}
              >
                White-Label Tenant #1
              </Box>
            </Box>

            {/* Flight Itinerary Card */}
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: isDark ? "#141422" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.86rem" }}>
                  Biman BG-201 · Boeing 787-9
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "secondary.main" }}>
                  $820.00
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mb: 1.5 }}>
                10:45 DAC &rarr; 16:30 LHR (Non-stop · 10h 45m)
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Box sx={{ px: 1, py: 0.2, borderRadius: "4px", backgroundColor: isDark ? "#1E1E30" : "#F4F2EC", fontSize: "0.68rem", fontFamily: "var(--font-mono)" }}>
                  Baggage: 2x 23kg
                </Box>
                <Box sx={{ px: 1, py: 0.2, borderRadius: "4px", backgroundColor: isDark ? "#1E1E30" : "#F4F2EC", fontSize: "0.68rem", fontFamily: "var(--font-mono)" }}>
                  Refundable: Yes
                </Box>
                <Box sx={{ px: 1, py: 0.2, borderRadius: "4px", backgroundColor: isDark ? "#1E1E30" : "#F4F2EC", fontSize: "0.68rem", fontFamily: "var(--font-mono)" }}>
                  Agent Comm: 5.5%
                </Box>
              </Box>
            </Box>
          </Box>
        );

      case "passport-scanner-ocr-data-extraction":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: isDark ? "#141422" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Scan size={16} color="#8580FF" />
                  <Typography variant="caption" sx={{ fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    MRZ EXTRACTION ENGINE
                  </Typography>
                </Box>
                <Box sx={{ px: 1, py: 0.2, borderRadius: "4px", backgroundColor: "rgba(34, 197, 94, 0.15)", color: "#22C55E", fontSize: "0.68rem", fontWeight: 700 }}>
                  CHECKSUM VALID
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1.2,
                  borderRadius: 1,
                  backgroundColor: isDark ? "#0A0A12" : "#F7F6F1",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: isDark ? "#A5A2FF" : "#292764",
                  letterSpacing: "0.08em",
                  mb: 1.5,
                }}
              >
                P&lt;BGDHOSSAIN&lt;&lt;UZZAL&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
                A089421584BGD9508142M2911048&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;06
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
                <Box sx={{ p: 0.8, borderRadius: 1, backgroundColor: isDark ? "#181828" : "#F4F2EC" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", display: "block" }}>Surname</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>HOSSAIN</Typography>
                </Box>
                <Box sx={{ p: 0.8, borderRadius: 1, backgroundColor: isDark ? "#181828" : "#F4F2EC" }}>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", display: "block" }}>Given Names</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>UZZAL</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );

      case "flight-ticket-pdf-generator":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: isDark ? "#141422" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontFamily: "var(--font-serif)" }}>
                  ELECTRONIC TICKET / PASSENGER RECEIPT
                </Typography>
                <Box sx={{ px: 1, py: 0.2, borderRadius: "4px", backgroundColor: "rgba(34, 197, 94, 0.12)", color: "#22C55E", fontSize: "0.68rem", fontWeight: 700 }}>
                  CONFIRMED
                </Box>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, mb: 1.5 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", display: "block" }}>Passenger</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>HOSSAIN / UZZAL MR</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", display: "block" }}>Flight</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>EK 583 (Emirates)</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", display: "block" }}>Class / Seat</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>Economy / 18A</Typography>
                </Box>
              </Box>
              <Box sx={{ p: 1, borderRadius: 1, backgroundColor: isDark ? "#0D0D16" : "#F4F2EC", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "text.secondary" }}>
                |||||| | |||||||| |||| |||||||||||| ||||||| 982-419028401
              </Box>
            </Box>
          </Box>
        );

      default:
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: isDark ? "#141422" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.88rem" }}>
                  Core System Modules
                </Typography>
                <FileText size={16} color="#B89555" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {project.responsibilities.slice(0, 3).map((resp, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                    <CheckCircle2
                      size={14}
                      color={isDark ? "#9490FF" : "#292764"}
                      style={{ marginTop: "3px", flexShrink: 0 }}
                    />
                    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.78rem", lineHeight: 1.45 }}>
                      {resp}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        );
    }
  };

  return (
    <Card
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      sx={{
        mb: { xs: 5, md: 8 },
        p: { xs: 3, sm: 4, lg: 4.5 },
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        backgroundColor: isDark ? "#13131E" : "#FFFFFF",
        border: "1px solid",
        borderColor: isDark ? "#242436" : "#E8E5DD",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: isDark
            ? "0 20px 50px -10px rgba(0, 0, 0, 0.6)"
            : "0 20px 45px -10px rgba(41, 39, 100, 0.08)",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: isEven ? "1.15fr 0.85fr" : "0.85fr 1.15fr",
          },
          gap: { xs: 4, lg: 6 },
          alignItems: "center",
        }}
      >
        {/* Editorial Text Column */}
        <Box sx={{ order: isEven ? 1 : { xs: 1, lg: 2 } }}>
          {/* Order & Category & Status */}
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.82rem",
                color: "secondary.main",
                letterSpacing: "0.08em",
              }}
            >
              0{project.order} /
            </Typography>

            <Box
              sx={{
                px: 1.4,
                py: 0.35,
                borderRadius: 1,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(41, 39, 100, 0.04)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "text.secondary",
                }}
              >
                {project.category}
              </Typography>
            </Box>

            <Box
              sx={{
                px: 1.4,
                py: 0.35,
                borderRadius: 1,
                backgroundColor: statusStyle.bg,
                border: `1px solid ${statusStyle.border}`,
                display: "flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: statusStyle.color,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: statusStyle.color,
                  letterSpacing: "0.04em",
                }}
              >
                {project.status}
              </Typography>
            </Box>
          </Box>

          {/* Title & Subtitle */}
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.3rem" },
              color: "text.primary",
              fontWeight: 600,
              mb: 1,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              fontSize: { xs: "0.95rem", md: "1.02rem" },
              mb: 2,
            }}
          >
            {project.subtitle}
          </Typography>

          {/* Overview */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.95rem", md: "1.02rem" },
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            {project.overview}
          </Typography>

          {/* Engineering Challenge Highlight */}
          {project.challengesSolved.length > 0 && (
            <Box
              sx={{
                p: 2.2,
                borderRadius: 2,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(41, 39, 100, 0.03)",
                borderLeft: "3px solid",
                borderColor: "secondary.main",
                mb: 3,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  color: "secondary.main",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  mb: 0.5,
                }}
              >
                ENGINEERING CHALLENGE
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{project.challengesSolved[0].challenge}&rdquo;
              </Typography>
            </Box>
          )}

          {/* Technologies Pills */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3.5 }}>
            {project.technologies.map((tech) => (
              <Box
                key={tech}
                sx={{
                  px: 1.3,
                  py: 0.45,
                  borderRadius: "6px",
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                  border: "1px solid",
                  borderColor: "divider",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>

          {/* Action Links */}
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
            <Button
              component={Link}
              href={`/projects/${project.slug}`}
              variant="contained"
              endIcon={<ArrowUpRight size={16} />}
              sx={{
                px: 2.8,
                py: 1,
                fontSize: "0.88rem",
              }}
            >
              View Case Study
            </Button>

            {project.liveDemoUrl && (
              <Button
                component="a"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<ExternalLink size={16} />}
                sx={{
                  px: 2.2,
                  py: 1,
                  fontSize: "0.88rem",
                }}
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl && (
              <Button
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Github size={16} />}
                sx={{
                  px: 2.2,
                  py: 1,
                  fontSize: "0.88rem",
                }}
              >
                Source
              </Button>
            )}
          </Box>
        </Box>

        {/* Visual Mock Interface Column */}
        <Box
          sx={{
            order: isEven ? 2 : { xs: 2, lg: 1 },
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid",
            borderColor: isDark ? "#28283C" : "#E2DFD4",
            backgroundColor: isDark ? "#0C0C14" : "#F7F6F2",
            boxShadow: isDark
              ? "0 15px 35px -8px rgba(0, 0, 0, 0.5)"
              : "0 15px 35px -8px rgba(41, 39, 100, 0.08)",
          }}
        >
          {/* Header Bar */}
          <Box
            sx={{
              px: 2,
              py: 1.2,
              backgroundColor: isDark ? "#08080E" : "#ECEAE2",
              borderBottom: "1px solid",
              borderColor: "divider",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
              <Box sx={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "#27C93F" }} />
            </Box>
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "text.secondary",
              }}
            >
              {project.slug}.tsx
            </Typography>
          </Box>

          {/* Interactive UI Mock Content */}
          <Box sx={{ p: 2.5 }}>
            {renderVisualMock()}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
