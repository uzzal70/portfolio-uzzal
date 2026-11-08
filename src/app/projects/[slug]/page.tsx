import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/animation/AnimatedBackground";
import ScrollProgress from "@/components/animation/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} – Case Study | Uzzal Hossain`,
    description: project.overview,
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />

      <Box component="main" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 12, md: 16 } }}>
        <Container maxWidth="lg">
          {/* Back Navigation Breadcrumb */}
          <Box sx={{ mb: 4 }}>
            <Button
              component={Link}
              href="/#projects"
              startIcon={<ArrowLeft size={16} />}
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "secondary.main",
                  backgroundColor: "transparent",
                },
              }}
            >
              Back to All Projects
            </Button>
          </Box>

          {/* Case Study Hero */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  px: 1.5,
                  py: 0.4,
                  borderRadius: 1,
                  backgroundColor: "secondary.main",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </Box>

              <Box
                sx={{
                  px: 1.5,
                  py: 0.4,
                  borderRadius: 1,
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              >
                Status: {project.status}
              </Box>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
                fontWeight: 600,
                color: "text.primary",
                mb: 1.5,
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.35rem" },
                color: "secondary.main",
                fontWeight: 500,
                mb: 3.5,
                maxWidth: "850px",
              }}
            >
              {project.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.02rem", md: "1.15rem" },
                lineHeight: 1.8,
                color: "text.secondary",
                maxWidth: "900px",
                mb: 4,
              }}
            >
              {project.overview}
            </Typography>

            {/* Quick Action Links */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {project.liveDemoUrl && (
                <Button
                  component="a"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<ExternalLink size={16} />}
                >
                  Visit Live Demo
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
                >
                  View Source Code
                </Button>
              )}
            </Box>

            {/* Interactive Project Screenshot / Browser Window Showcase */}
            {project.previewImage && (
              <Box
                sx={{
                  mt: 5,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.45)",
                }}
              >
                {/* Browser Window Header Chrome */}
                <Box
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    backgroundColor: "rgba(0, 0, 0, 0.06)",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  {/* Traffic light dots */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", backgroundColor: "#27C93F" }} />
                  </Box>

                  {/* URL Address Bar */}
                  <Box
                    sx={{
                      flex: 1,
                      maxWidth: "520px",
                      px: 2.5,
                      py: 0.5,
                      borderRadius: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid",
                      borderColor: "divider",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ color: "#22C55E" }}>🔒</span>
                    <span>{project.liveDemoUrl || `https://${project.slug}.internal.dev`}</span>
                  </Box>

                  {/* Status Pill */}
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.35,
                      borderRadius: 1,
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      color: "#22C55E",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.status.toUpperCase()}
                  </Box>
                </Box>

                {/* Screenshot Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    backgroundColor: "#0A1224",
                    lineHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={project.previewImage}
                    alt={`${project.title} Interface Screenshot`}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: { xs: "360px", sm: "540px", md: "700px" },
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Problem & Solution Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
              mb: 7,
            }}
          >
            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <AlertTriangle size={22} color="#F59E0B" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    The Problem Statement
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}
                >
                  {project.problemStatement}
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Lightbulb size={22} color="#22C55E" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    The Technical Solution
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}
                >
                  {project.technicalSolution}
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Key Responsibilities */}
          <Box sx={{ mb: 7 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              My Core Engineering Responsibilities
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {project.responsibilities.map((resp, i) => (
                <Box
                  key={i}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color="#B89555"
                    style={{ marginTop: "3px", flexShrink: 0 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.primary", lineHeight: 1.6, fontSize: "0.92rem" }}
                  >
                    {resp}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Architecture Decisions & Key Challenges */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
              gap: 4,
              mb: 7,
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Layers size={22} color="#B89555" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Architecture Decisions
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {project.architectureDecisions.map((dec, i) => (
                  <Box
                    key={i}
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "var(--font-mono)",
                        color: "secondary.main",
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      DECISION 0{i + 1}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.65 }}
                    >
                      {dec}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Cpu size={22} color="#9490FF" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Challenges & Engineering Solutions
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {project.challengesSolved.map((cs, i) => (
                  <Box
                    key={i}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
                    >
                      Challenge: {cs.challenge}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      <strong>Solution:</strong> {cs.solution}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Key Features Breakdown */}
          <Box sx={{ mb: 7 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Key Features & Implementation Scope
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
                gap: 2.5,
              }}
            >
              {project.keyFeatures.map((kf, i) => (
                <Card key={i} sx={{ height: "100%", p: 1.5 }}>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}
                    >
                      {kf.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {kf.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Technologies Stack */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "block",
                mb: 1.5,
              }}
            >
              TECHNOLOGY STACK
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {project.technologies.map((t) => (
                <Box
                  key={t}
                  sx={{
                    px: 2,
                    py: 0.9,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {t}
                </Box>
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Next Project Footer Link */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Button
              component={Link}
              href="/#projects"
              variant="outlined"
              startIcon={<ArrowLeft size={16} />}
            >
              Back to Overview
            </Button>

            <Box
              component={Link}
              href={`/projects/${nextProject.slug}`}
              sx={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                "&:hover .next-title": {
                  color: "secondary.main",
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Next Project &rarr;
              </Typography>
              <Typography
                className="next-title"
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  transition: "color 0.2s ease",
                }}
              >
                {nextProject.title}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
      <BackToTop />
    </Box>
  );
}
