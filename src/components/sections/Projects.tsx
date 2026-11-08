"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  type SxProps,
  type Theme,
} from "@mui/material";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { projectsData } from "@/data/projects";
import { useAppTheme } from "@/theme/ThemeContext";

type Project = (typeof projectsData)[number];

const ease = [0.16, 1, 0.3, 1] as const;

const categories = [
  "All Projects",
  "Travel Technology",
  "Cloud & Messaging",
  "IoT & Telematics",
  "Compliance & Legal",
  "Enterprise & Portals",
];

/* Same matching rules as before, moved into one function. */
function matches(project: Project, selected: string): boolean {
  if (selected === "All Projects") return true;

  if (selected === "Travel Technology") {
    return (
      project.category === "Travel Technology" ||
      project.slug.includes("travel") ||
      project.slug.includes("flight") ||
      project.slug.includes("hotel")
    );
  }
  if (selected === "Cloud & Messaging") {
    return (
      project.category === "Cloud Communications" ||
      project.category === "CPaaS & Messaging" ||
      project.slug.includes("goti")
    );
  }
  if (selected === "IoT & Telematics") {
    return project.category === "IoT & Telematics";
  }
  if (selected === "Compliance & Legal") {
    return (
      project.category === "Compliance & Legal" ||
      project.slug.includes("visa") ||
      project.slug.includes("audit")
    );
  }
  if (selected === "Enterprise & Portals") {
    return (
      project.category === "Enterprise Portals" ||
      project.category === "Document Automation" ||
      project.category === "Telecommunications"
    );
  }
  return true;
}

/* One accent per kind of product. */
function accentFor(category: string, isDark: boolean): string {
  const c = category.toLowerCase();
  if (c.includes("travel")) return isDark ? "#22B8CF" : "#0E8FA3";
  if (c.includes("cloud") || c.includes("cpaas") || c.includes("messag"))
    return isDark ? "#34D399" : "#15803D";
  if (c.includes("iot") || c.includes("telematics"))
    return isDark ? "#A78BFA" : "#6D4FD6";
  if (c.includes("compliance") || c.includes("legal"))
    return isDark ? "#E5B94E" : "#9A7414";
  return isDark ? "#F472B6" : "#BE2F7F";
}

/* ------------------------------------------------------------------ */
/*  Glass surface                                                      */
/* ------------------------------------------------------------------ */

type GlassTokens = {
  bg: string;
  border: string;
  hi: string;
  shadow: string;
  chip: string;
  line: string;
};

function Glass({
  g,
  accent,
  hover,
  sx,
  children,
}: {
  g: GlassTokens;
  accent: string;
  hover?: boolean;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}) {
  // Cursor-following light, written straight to CSS variables (no re-render).
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Box
      onMouseMove={onMove}
      sx={[
        {
          position: "relative",
          borderRadius: "22px",
          backgroundColor: g.bg,
          backdropFilter: "blur(20px) saturate(165%)",
          WebkitBackdropFilter: "blur(20px) saturate(165%)",
          border: `1px solid ${g.border}`,
          boxShadow: `${g.hi}, ${g.shadow}`,
          overflow: "hidden",
          transition: "border-color .3s ease, transform .3s ease",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), ${accent}2e, transparent 60%)`,
            opacity: 0,
            transition: "opacity .3s ease",
            pointerEvents: "none",
          },
          "&:hover::before": { opacity: 1 },
          ...(hover
            ? { "&:hover": { borderColor: `${accent}88`, transform: "translateY(-4px)" } }
            : {}),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const reduce = useReducedMotion();

  const featured = projectsData.find(
    (p) => p.slug === "tripfindy-b2b-travel-platform"
  );

  const [selected, setSelected] = useState("All Projects");

  const counts = useMemo(
    () =>
      Object.fromEntries(
        categories.map((c) => [c, projectsData.filter((p) => matches(p, c)).length])
      ) as Record<string, number>,
    []
  );

  // In "All Projects" the flagship already has its own spotlight above.
  const list = useMemo(
    () =>
      projectsData.filter(
        (p) =>
          matches(p, selected) &&
          !(selected === "All Projects" && p.slug === featured?.slug)
      ),
    [selected, featured]
  );

  const g: GlassTokens = isDark
    ? {
      bg: "rgba(16, 28, 53, 0.55)",
      border: "rgba(255,255,255,0.13)",
      hi: "inset 0 1px 0 rgba(255,255,255,0.09)",
      shadow: "0 26px 60px -26px rgba(0,0,0,0.7)",
      chip: "rgba(255,255,255,0.06)",
      line: "rgba(255,255,255,0.12)",
    }
    : {
      bg: "rgba(255, 255, 255, 0.6)",
      border: "rgba(15,23,42,0.08)",
      hi: "inset 0 1px 0 rgba(255,255,255,0.95)",
      shadow: "0 24px 50px -28px rgba(30,41,90,0.3)",
      chip: "rgba(15,23,42,0.05)",
      line: "rgba(15,23,42,0.1)",
    };

  const cyan = isDark ? "#22B8CF" : "#0E8FA3";

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.75, ease },
    },
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        position: "relative",
        py: { xs: 9, md: 13 },
        overflow: "hidden",
      }}
    >
      {/* Soft color fields behind the glass so the blur has something to refract */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: isDark
            ? "radial-gradient(520px circle at 8% 12%, rgba(34,184,207,0.16), transparent 70%), radial-gradient(560px circle at 92% 38%, rgba(167,139,250,0.14), transparent 70%), radial-gradient(520px circle at 30% 92%, rgba(229,185,78,0.1), transparent 70%)"
            : "radial-gradient(520px circle at 8% 12%, rgba(34,184,207,0.2), transparent 70%), radial-gradient(560px circle at 92% 38%, rgba(167,139,250,0.18), transparent 70%), radial-gradient(520px circle at 30% 92%, rgba(229,185,78,0.16), transparent 70%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          badge="Projects"
          title="Products and platforms in production"
          subtitle="B2B travel distribution, cloud messaging, fleet telematics, compliance and corporate systems."
        />

        {/* ------------------------ Flagship spotlight ------------------------ */}
        {featured && (
          <Box
            component={motion.div}
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            sx={{ mb: { xs: 8, md: 11 } }}
          >
            <Glass g={g} accent={cyan} sx={{ borderRadius: "28px" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "1.02fr 0.98fr" },
                  gap: { xs: 4, lg: 6 },
                  alignItems: "center",
                  p: { xs: 2.5, sm: 4, lg: 5 },
                }}
              >
                {/* Details */}
                <Box sx={{ minWidth: 0 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 1.4,
                      py: 0.45,
                      mb: 2.2,
                      borderRadius: "999px",
                      backgroundColor: g.chip,
                      border: `1px solid ${g.line}`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#22C55E",
                      }}
                    />
                    <Typography sx={{ fontSize: "0.76rem", fontWeight: 700 }}>
                      Flagship project, live in production
                    </Typography>
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.9rem", sm: "2.4rem" },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                      mb: 1,
                    }}
                  >
                    {featured.title}
                  </Typography>

                  <Typography
                    sx={{ color: cyan, fontWeight: 700, fontSize: "1rem", mb: 2.2 }}
                  >
                    {featured.subtitle}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: 1.7,
                      mb: 2.6,
                    }}
                  >
                    {featured.overview}
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.1, mb: 3 }}>
                    {[
                      "Multi-tenant white-label architecture deploying multiple travel brands from a unified core.",
                      "Optimized Redux store handling 800+ multi-leg itineraries with instant memoized filters.",
                      "Segment-level passenger and dynamic baggage allowance calculations.",
                      "Client-side vector airline e-ticket generation, with no server render latency.",
                    ].map((pt) => (
                      <Box key={pt} sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                        <CheckCircle2
                          size={16}
                          color={cyan}
                          style={{ marginTop: 3, flexShrink: 0 }}
                        />
                        <Typography sx={{ fontSize: "0.88rem", lineHeight: 1.55 }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3.4 }}>
                    {featured.technologies.map((t) => (
                      <Box
                        key={t}
                        sx={{
                          px: 1.2,
                          py: 0.4,
                          borderRadius: "8px",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          backgroundColor: g.chip,
                          border: `1px solid ${g.line}`,
                        }}
                      >
                        {t}
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.6 }}>
                    <Button
                      component={Link}
                      href={`/projects/${featured.slug}`}
                      variant="contained"
                      endIcon={<ArrowUpRight size={16} />}
                      sx={{ px: 2.8, fontWeight: 700 }}
                    >
                      View case study
                    </Button>
                    {featured.liveDemoUrl && (
                      <Button
                        component="a"
                        href={featured.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        endIcon={<ExternalLink size={16} />}
                        sx={{ px: 2.6, fontWeight: 700 }}
                      >
                        Visit platform
                      </Button>
                    )}
                  </Box>
                </Box>

                {/* Browser window with floating glass metrics */}
                <Box
                  sx={{
                    minWidth: 0,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${g.line}`,
                    backgroundColor: isDark ? "rgba(7,13,27,0.7)" : "rgba(255,255,255,0.7)",
                    boxShadow: isDark
                      ? "0 24px 50px -16px rgba(0,0,0,0.65)"
                      : "0 20px 40px -16px rgba(30,41,90,0.28)",
                  }}
                >
                  <Box
                    sx={{
                      px: 1.8,
                      py: 1.1,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      borderBottom: `1px solid ${g.line}`,
                    }}
                  >
                    {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                      <Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: c }} />
                    ))}
                    <Typography
                      sx={{
                        ml: 1,
                        px: 1.4,
                        py: 0.2,
                        borderRadius: "999px",
                        fontSize: "0.72rem",
                        color: "text.secondary",
                        backgroundColor: g.chip,
                      }}
                    >
                      tripfindy.com
                    </Typography>
                  </Box>

                  <Box sx={{ position: "relative", lineHeight: 0 }}>
                    <Box
                      component="img"
                      src={featured.previewImage}
                      alt={`${featured.title} screenshot`}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 400,
                        minHeight: 240,
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 12,
                        display: "grid",
                        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
                        gap: 0.8,
                        lineHeight: 1.2,
                      }}
                    >
                      {[
                        { l: "Filter speed", v: "<16ms" },
                        { l: "Cache hit rate", v: "99.2%" },
                        { l: "Tenant switch", v: "0ms, CSS only" },
                        { l: "PDF engine", v: "Vector, client" },
                      ].map((m) => (
                        <Box
                          key={m.l}
                          sx={{
                            px: 1.1,
                            py: 0.9,
                            borderRadius: "12px",
                            color: "#FFFFFF",
                            backgroundColor: "rgba(10,18,36,0.55)",
                            backdropFilter: "blur(14px) saturate(160%)",
                            WebkitBackdropFilter: "blur(14px) saturate(160%)",
                            border: "1px solid rgba(255,255,255,0.18)",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.66rem", opacity: 0.75 }}>
                            {m.l}
                          </Typography>
                          <Typography sx={{ fontSize: "0.82rem", fontWeight: 800 }}>
                            {m.v}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Glass>
          </Box>
        )}

        {/* ------------------------ Catalog header + filter ------------------------ */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "flex-end" },
            justifyContent: "space-between",
            gap: 2.5,
            mb: 3.5,
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              All projects
            </Typography>
            <Typography
              aria-live="polite"
              sx={{ color: "text.secondary", fontSize: "0.88rem", mt: 0.4 }}
            >
              Showing {list.length} {list.length === 1 ? "project" : "projects"}
            </Typography>
          </Box>

          <Box
            role="tablist"
            aria-label="Filter projects by category"
            sx={{
              display: "flex",
              maxWidth: "100%",
              overflowX: "auto",
              p: 0.6,
              gap: 0.3,
              borderRadius: "999px",
              backgroundColor: g.bg,
              backdropFilter: "blur(20px) saturate(165%)",
              WebkitBackdropFilter: "blur(20px) saturate(165%)",
              border: `1px solid ${g.border}`,
              boxShadow: g.hi,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {categories.map((c) => {
              const active = selected === c;
              return (
                <Box
                  key={c}
                  component="button"
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(c)}
                  sx={{
                    all: "unset",
                    position: "relative",
                    flexShrink: 0,
                    cursor: "pointer",
                    px: 1.8,
                    py: 0.85,
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    fontSize: "0.82rem",
                    fontWeight: active ? 700 : 500,
                    color: active ? "text.primary" : "text.secondary",
                    transition: "color .2s ease",
                    "&:hover": { color: "text.primary" },
                    "&:focus-visible": { outline: `2px solid ${cyan}`, outlineOffset: 1 },
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 999,
                        background: isDark
                          ? "rgba(34,184,207,0.18)"
                          : "rgba(14,143,163,0.13)",
                        border: `1px solid ${cyan}66`,
                      }}
                    />
                  )}
                  <Box component="span" sx={{ position: "relative", zIndex: 1 }}>
                    {c}
                    <Box
                      component="span"
                      sx={{ ml: 0.7, fontSize: "0.72rem", opacity: 0.6, fontWeight: 600 }}
                    >
                      {counts[c]}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ------------------------ Grid ------------------------ */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          <AnimatePresence mode="popLayout">
            {list.map((project, i) => {
              const accent = accentFor(project.category, isDark);
              return (
                <motion.div
                  key={project.slug}
                  layout={!reduce}
                  initial={{ opacity: 0, y: reduce ? 0 : 22, scale: reduce ? 1 : 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
                  transition={{
                    duration: reduce ? 0 : 0.5,
                    delay: reduce ? 0 : Math.min(i, 6) * 0.05,
                    ease,
                  }}
                  style={{ minWidth: 0 }}
                >
                  <Glass g={g} accent={accent} hover sx={{ height: "100%" }}>
                    {/* Screenshot */}
                    <Box
                      sx={{
                        position: "relative",
                        height: 200,
                        overflow: "hidden",
                        backgroundColor: "#0A1224",
                        "&:hover img": { transform: "scale(1.05)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                          display: "block",
                          transition: "transform .5s ease",
                        }}
                      />
                      <Box
                        aria-hidden
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(8,14,30,0.75), transparent 55%)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.7,
                          px: 1.1,
                          py: 0.35,
                          borderRadius: "999px",
                          color: "#FFFFFF",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          backgroundColor: "rgba(10,18,36,0.55)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.18)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#22C55E",
                          }}
                        />
                        {project.status}
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 12,
                          bottom: 12,
                          px: 1.1,
                          py: 0.35,
                          borderRadius: "999px",
                          color: "#FFFFFF",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          backgroundColor: `${accent}cc`,
                        }}
                      >
                        {project.category}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        p: 2.6,
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        component="h4"
                        sx={{
                          fontWeight: 800,
                          fontSize: "1.15rem",
                          letterSpacing: "-0.01em",
                          mb: 0.5,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: accent,
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          mb: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.subtitle}
                      </Typography>

                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.86rem",
                          lineHeight: 1.6,
                          mb: 2.2,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.overview}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mt: "auto", mb: 2.4 }}>
                        {project.technologies.slice(0, 4).map((t) => (
                          <Box
                            key={t}
                            sx={{
                              px: 1,
                              py: 0.3,
                              borderRadius: "6px",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              color: "text.secondary",
                              backgroundColor: g.chip,
                            }}
                          >
                            {t}
                          </Box>
                        ))}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pt: 1.6,
                          borderTop: `1px solid ${g.line}`,
                        }}
                      >
                        <Button
                          component={Link}
                          href={`/projects/${project.slug}`}
                          size="small"
                          endIcon={<ArrowUpRight size={14} />}
                          sx={{ fontSize: "0.8rem", fontWeight: 700, px: 1.2 }}
                        >
                          Case study
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
                            sx={{ fontSize: "0.78rem", color: "text.secondary", px: 1.2 }}
                          >
                            Live site
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Glass>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Box>

        {list.length === 0 && (
          <Typography sx={{ textAlign: "center", color: "text.secondary", py: 6 }}>
            No projects in this category yet.
          </Typography>
        )}
      </Container>
    </Box>
  );
}
