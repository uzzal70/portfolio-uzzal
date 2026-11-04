import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
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
  ShieldCheck,
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

  // Find next project for bottom transition
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
                fontSize: { xs: "2.5rem", sm: "3.2rem", md: "4rem" },
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
                fontSize: { xs: "1.15rem", md: "1.45rem" },
                color: "secondary.main",
                fontWeight: 500,
                mb: 4,
                maxWidth: "850px",
              }}
            >
              {project.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
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
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Problem & Solution Grid */}
          <Grid container spacing={4} sx={{ mb: 7 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", p: 2 }}>
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
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: "100%", p: 2 }}>
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
            </Grid>
          </Grid>

          {/* Key Responsibilities */}
          <Box sx={{ mb: 7 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              My Core Engineering Responsibilities
            </Typography>
            <Grid container spacing={2}>
              {project.responsibilities.map((resp, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      height: "100%",
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
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Architecture Decisions & Key Challenges */}
          <Grid container spacing={4} sx={{ mb: 7 }}>
            <Grid item xs={12} lg={6}>
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
            </Grid>

            <Grid item xs={12} lg={6}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <Cpu size={22} color="#8580FF" />
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
            </Grid>
          </Grid>

          {/* Key Features Breakdown */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Key Features & Implementation Scope
            </Typography>
            <Grid container spacing={3}>
              {project.keyFeatures.map((kf, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card sx={{ height: "100%", p: 2 }}>
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
                </Grid>
              ))}
            </Grid>
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
                    py: 1,
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
