"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import {
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Plane,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Mail,
  MessageSquare,
  Navigation,
  FileCheck,
  Building,
  Radio,
  Search,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { projectsData } from "@/data/projects";
import { useAppTheme } from "@/theme/ThemeContext";
import SkiperCardSwipe from "../animation/SkiperCardSwipe";
import SkiperTiltCard from "../animation/SkiperTiltCard";
import SkiperMarquee from "../animation/SkiperMarquee";

const categories = [
  "All Projects",
  "Travel Technology",
  "Cloud & Messaging",
  "IoT & Telematics",
  "Compliance & Legal",
  "Enterprise & Portals",
];

export default function Projects() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  // First project is the Flagship Spotlight (TripFindy)
  const featuredTripFindy = projectsData.find(
    (p) => p.slug === "tripfindy-b2b-travel-platform"
  )!;

  // Carousel projects: 6 featured platforms
  const carouselProjects = projectsData.filter(
    (p) =>
      p.slug === "aero-bangladesh-travel-platform" ||
      p.slug === "gotimail-enterprise-email-workspace" ||
      p.slug === "gotisms-bulk-sms-cpaas-platform" ||
      p.slug === "safety-gps-tracker-iot-telematics" ||
      p.slug === "auditnext-digital-compliance-platform" ||
      p.slug === "impressive-group-enterprise-portal" ||
      p.slug === "ticket-lagbe-b2b-travel-portal"
  );

  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Interactive TripFindy Views (Topology vs. Multi-Brand Console)
  const [tripFindyTab, setTripFindyTab] = useState<"topology" | "console">(
    "topology"
  );
  const [selectedTenant, setSelectedTenant] = useState<
    "Agency Alpha" | "Global Jet B2B" | "Direct Partner"
  >("Agency Alpha");

  const tenantConfig: Record<
    string,
    { color: string; margin: string; net: number; comm: number; total: number }
  > = {
    "Agency Alpha": {
      color: "#B89555",
      margin: "+6.5%",
      net: 820,
      comm: 53.3,
      total: 873.3,
    },
    "Global Jet B2B": {
      color: "#22B8CF",
      margin: "+8.0%",
      net: 820,
      comm: 65.6,
      total: 885.6,
    },
    "Direct Partner": {
      color: "#4169F5",
      margin: "+5.0%",
      net: 820,
      comm: 41.0,
      total: 861.0,
    },
  };

  // Filtered projects for the Grid
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All Projects") return true;
    if (selectedCategory === "Travel Technology") {
      return (
        project.category === "Travel Technology" ||
        project.slug.includes("travel") ||
        project.slug.includes("flight") ||
        project.slug.includes("hotel")
      );
    }
    if (selectedCategory === "Cloud & Messaging") {
      return (
        project.category === "Cloud Communications" ||
        project.category === "CPaaS & Messaging" ||
        project.slug.includes("goti")
      );
    }
    if (selectedCategory === "IoT & Telematics") {
      return project.category === "IoT & Telematics";
    }
    if (selectedCategory === "Compliance & Legal") {
      return (
        project.category === "Compliance & Legal" ||
        project.slug.includes("visa") ||
        project.slug.includes("audit")
      );
    }
    if (selectedCategory === "Enterprise & Portals") {
      return (
        project.category === "Enterprise Portals" ||
        project.category === "Document Automation" ||
        project.category === "Telecommunications"
      );
    }
    return true;
  });

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="PRODUCTION ECOSYSTEM"
          title="Engineered Products & Enterprise Platforms"
          subtitle="Real-world high-throughput platforms spanning B2B travel distribution, cloud communications, IoT fleet telematics, regulatory compliance, and corporate systems."
        />

        {/* ---------------- 1. FLAGSHIP SPOTLIGHT: TripFindy ---------------- */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                px: 1.4,
                py: 0.35,
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
              FLAGSHIP SPOTLIGHT &bull; 01
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
              }}
            >
              Enterprise B2B Travel Distribution Platform
            </Typography>
          </Box>

          <Card
            sx={{
              borderRadius: 4,
              p: { xs: 3, sm: 4.5 },
              backgroundColor: isDark ? "#101C35" : "#FFFFFF",
              border: "1px solid",
              borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E5E2D6",
              boxShadow: isDark
                ? "0 25px 60px -15px rgba(0, 0, 0, 0.6)"
                : "0 20px 45px -10px rgba(41, 39, 100, 0.08)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
                gap: { xs: 4, lg: 6 },
                alignItems: "center",
              }}
            >
              {/* Left Column: Details */}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.3rem" },
                    color: "text.primary",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {featuredTripFindy.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 600,
                    fontSize: "1rem",
                    mb: 2.5,
                  }}
                >
                  {featuredTripFindy.subtitle}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.02rem" },
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {featuredTripFindy.overview}
                </Typography>

                {/* Key Architectural Bullets */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                    mb: 3.5,
                  }}
                >
                  {[
                    "Multi-tenant white-label architecture deploying multiple travel brands from a unified core.",
                    "Optimized Redux store handling 800+ multi-leg itineraries with instant memoized filters.",
                    "Segment-level passenger and dynamic baggage allowance calculations.",
                    "Client-side vector airline e-ticket generation eliminating server render latency.",
                  ].map((pt, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.25,
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="#B89555"
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontSize: "0.88rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Tech pills */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                  {featuredTripFindy.technologies.map((t) => (
                    <Box
                      key={t}
                      sx={{
                        px: 1.3,
                        py: 0.45,
                        borderRadius: "6px",
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.04)"
                          : "rgba(0, 0, 0, 0.03)",
                        border: "1px solid",
                        borderColor: "divider",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.74rem",
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>

                {/* Actions */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    component={Link}
                    href={`/projects/${featuredTripFindy.slug}`}
                    variant="contained"
                    endIcon={<ArrowUpRight size={16} />}
                  >
                    View Case Study
                  </Button>

                  {featuredTripFindy.liveDemoUrl && (
                    <Button
                      component="a"
                      href={featuredTripFindy.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      endIcon={<ExternalLink size={16} />}
                    >
                      Visit Platform
                    </Button>
                  )}
                </Box>
              </Box>

              {/* Right Column: Live Screenshot Browser Window */}
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E2DFD4",
                  backgroundColor: isDark ? "#0A1224" : "#F7F6F2",
                  boxShadow: isDark
                    ? "0 20px 50px -10px rgba(0, 0, 0, 0.6)"
                    : "0 15px 35px -8px rgba(0, 0, 0, 0.12)",
                }}
              >
                {/* Header Chrome */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.2,
                    backgroundColor: isDark ? "#070D1B" : "#ECEAE2",
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
                    <Typography
                      variant="caption"
                      sx={{
                        ml: 1,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "text.secondary",
                      }}
                    >
                      tripfindy.com &bull; B2B &amp; B2C Travel Portal
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      color: "#22C55E",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    PRODUCTION LIVE
                  </Box>
                </Box>

                {/* Screenshot Container */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    lineHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={featuredTripFindy.previewImage}
                    alt="TripFindy Platform Screenshot"
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "380px",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  />
                </Box>

                {/* Telemetry Strip */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 1,
                    p: 1.5,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    backgroundColor: isDark ? "#0A1224" : "#F7F6F1",
                  }}
                >
                  {[
                    { label: "Filter Speed", val: "< 16ms", color: "#22B8CF" },
                    { label: "Cache Hit Rate", val: "99.2%", color: "#22C55E" },
                    {
                      label: "Tenant Switch",
                      val: "0ms (CSS)",
                      color: "#B89555",
                    },
                    {
                      label: "PDF Engine",
                      val: "Vector Client",
                      color: "#4169F5",
                    },
                  ].map((metric) => (
                    <Box
                      key={metric.label}
                      sx={{
                        p: 0.8,
                        borderRadius: 1,
                        backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                        border: "1px solid",
                        borderColor: "divider",
                        textAlign: "center",
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
                        {metric.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: metric.color,
                          fontSize: "0.74rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                        }}
                      >
                        {metric.val}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* ---------------- 2. SKIPER UI 3D CARD SWIPE CAROUSEL (SKIPER48) ---------------- */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                display: "block",
              }}
            >
              SKIPER UI &bull; 3D CARD SWIPE CAROUSEL (SKIPER48)
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                color: "text.primary",
              }}
            >
              Featured Production Ecosystem
            </Typography>
          </Box>

          <SkiperCardSwipe projects={carouselProjects} />
        </Box>

        {/* ---------------- 2.1 SKIPER INFINITE MARQUEE TICKER ---------------- */}
        <Box sx={{ mb: { xs: 8, md: 11 } }}>
          <SkiperMarquee />
        </Box>

        {/* ---------------- 3. FILTERABLE PREMIUM PROJECT GRID ---------------- */}
        <Box>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: "0.1em",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                display: "block",
                mb: 1,
              }}
            >
              COMPLETE PORTFOLIO CATALOG
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                color: "text.primary",
                mb: 3,
              }}
            >
              Explore All Production Platforms &amp; Systems
            </Typography>

            {/* Category Filter Pills */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <Box
                    key={cat}
                    component="button"
                    onClick={() => setSelectedCategory(cat)}
                    sx={{
                      px: 2,
                      py: 0.7,
                      borderRadius: "20px",
                      border: "1px solid",
                      borderColor: isActive
                        ? isDark
                          ? "#22B8CF"
                          : "primary.main"
                        : "divider",
                      backgroundColor: isActive
                        ? isDark
                          ? "rgba(34, 184, 207, 0.12)"
                          : "rgba(41, 39, 100, 0.08)"
                        : "transparent",
                      color: isActive
                        ? isDark
                          ? "#22B8CF"
                          : "primary.main"
                        : "text.secondary",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.76rem",
                      fontWeight: isActive ? 700 : 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: isDark ? "#22B8CF" : "primary.main",
                        color: "text.primary",
                      },
                    }}
                  >
                    {cat}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Grid Cards Container */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 3.5,
            }}
          >
            {filteredProjects.map((project) => (
              <SkiperTiltCard key={project.slug} maxTilt={5}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "#E5E2D6",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      boxShadow: isDark
                        ? "0 20px 40px -10px rgba(0,0,0,0.5)"
                        : "0 15px 35px -8px rgba(41,39,100,0.12)",
                      borderColor: isDark ? "#22B8CF" : "secondary.main",
                    },
                  }}
                >
                {/* Card Top: Browser Mockup Screenshot */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "190px",
                    backgroundColor: "#0A1224",
                    overflow: "hidden",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    component="img"
                    src={project.previewImage}
                    alt={`${project.title} Preview`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 0.35s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Top Status Pill */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      px: 1,
                      py: 0.3,
                      borderRadius: 1,
                      backgroundColor: "rgba(10, 18, 36, 0.85)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#22C55E",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    {project.status.toUpperCase()}
                  </Box>

                  {/* Category Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                      px: 1,
                      py: 0.3,
                      borderRadius: 1,
                      backgroundColor: "rgba(10, 18, 36, 0.85)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {project.category.toUpperCase()}
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent
                  sx={{
                    p: 2.8,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.18rem",
                      color: "text.primary",
                      mb: 0.5,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      fontSize: "0.78rem",
                      mb: 1.5,
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      mb: 2.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.overview}
                  </Typography>

                  {/* Technology Chips */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.6,
                      mb: 3,
                      mt: "auto",
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          px: 1,
                          py: 0.3,
                          borderRadius: "4px",
                          backgroundColor: isDark
                            ? "rgba(255, 255, 255, 0.04)"
                            : "rgba(0, 0, 0, 0.04)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "text.secondary",
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Button
                      component={Link}
                      href={`/projects/${project.slug}`}
                      size="small"
                      endIcon={<ArrowUpRight size={14} />}
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        px: 1.5,
                        py: 0.4,
                      }}
                    >
                      Case Study
                    </Button>

                    {project.liveDemoUrl && (
                      <Button
                        component="a"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        color="inherit"
                        endIcon={<ExternalLink size={14} />}
                        sx={{
                          fontSize: "0.76rem",
                          color: "text.secondary",
                          px: 1.2,
                          py: 0.4,
                        }}
                      >
                        Live Site
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </SkiperTiltCard>
          ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
