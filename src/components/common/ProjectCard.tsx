"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography, Button, Chip, Grid, Card } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, CheckCircle2, AlertCircle, Clock, FileText } from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { useAppTheme } from "@/theme/ThemeContext";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const shouldReduceMotion = useReducedMotion();
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
        mb: { xs: 6, md: 9 },
        p: { xs: 3, sm: 4, lg: 5 },
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        backgroundColor: isDark ? "#141420" : "#FFFFFF",
        border: "1px solid",
        borderColor: isDark ? "#26263B" : "#EAE8E2",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "secondary.main",
          boxShadow: isDark
            ? "0 20px 50px -10px rgba(0, 0, 0, 0.6)"
            : "0 20px 45px -10px rgba(41, 39, 100, 0.1)",
        },
      }}
    >
      <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center" direction={isEven ? "row" : "row-reverse"}>
        {/* Editorial Text Content */}
        <Grid item xs={12} lg={7}>
          <Box>
            {/* Meta Row: Order & Category & Status */}
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
                  px: 1.5,
                  py: 0.4,
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
                  px: 1.5,
                  py: 0.4,
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
                fontSize: { xs: "1.75rem", sm: "2.1rem", md: "2.4rem" },
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
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                mb: 2.5,
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
                  p: 2.5,
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
                  ENGINEERING HIGHLIGHT
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
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
              {project.technologies.map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 1.4,
                    py: 0.5,
                    borderRadius: "6px",
                    backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                    border: "1px solid",
                    borderColor: "divider",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.76rem",
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
                  py: 1.1,
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
                    py: 1.1,
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
                    py: 1.1,
                    fontSize: "0.88rem",
                  }}
                >
                  Source
                </Button>
              )}
            </Box>
          </Box>
        </Grid>

        {/* Visual Mock Interface Column */}
        <Grid item xs={12} lg={5}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid",
              borderColor: isDark ? "#2E2E44" : "#E2DFD4",
              backgroundColor: isDark ? "#0E0E18" : "#F7F6F2",
              boxShadow: isDark
                ? "0 15px 35px -8px rgba(0, 0, 0, 0.5)"
                : "0 15px 35px -8px rgba(41, 39, 100, 0.08)",
            }}
          >
            {/* Visual Header Bar */}
            <Box
              sx={{
                px: 2,
                py: 1.2,
                backgroundColor: isDark ? "#0A0A12" : "#ECEAE2",
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

            {/* High-Fidelity UI Interface Mock */}
            <Box sx={{ p: 3 }}>
              {/* Architecture Blueprint Mock */}
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  backgroundColor: isDark ? "#141422" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isDark ? "#222238" : "#E5E2D6",
                  mb: 2.5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.88rem" }}>
                    Core Responsibilities
                  </Typography>
                  <FileText size={16} color="#B89555" />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                  {project.responsibilities.slice(0, 3).map((resp, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                      <CheckCircle2
                        size={14}
                        color={isDark ? "#8580FF" : "#292764"}
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.78rem",
                          lineHeight: 1.45,
                        }}
                      >
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Key Features Badges */}
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  mb: 1.5,
                }}
              >
                Featured Modules
              </Typography>

              <Grid container spacing={1}>
                {project.keyFeatures.slice(0, 4).map((kf, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        p: 1.2,
                        borderRadius: 1.5,
                        backgroundColor: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          color: "text.primary",
                          display: "block",
                          lineHeight: 1.3,
                        }}
                      >
                        {kf.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
