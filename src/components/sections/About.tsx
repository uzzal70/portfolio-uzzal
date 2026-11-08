"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Plane, ScanLine, Server, type LucideIcon } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { useAppTheme } from "@/theme/ThemeContext";

const ease = [0.16, 1, 0.3, 1] as const;

const frontendStack = [
  // Core Technologies

  "JavaScript (ES6+)",
  "TypeScript",

  // Frontend Frameworks
  "React.js",
  "Next.js",
  "Vite",

  // State Management
  "Redux Toolkit",
  "RTK Query",
  "Context API",

  // UI & Styling
  "Material UI",
  "Tailwind CSS",

  // Forms & Validation
  "React Hook Form",
  "Formik",
  "Yup",

  // Animation & Visualization
  "Framer Motion",
  "GSAP",

  // Performance & Optimization
  "React.memo",
  "useMemo / useCallback",
  "Lazy Loading",
  "Web Vitals Optimization",

  // Testing
  "React Testing Library",
  "Cypress",


];

const fullstackStack = [
  "Node.js",
  "NestJS",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
];

const pillars: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Layers,
    title: "Frontend architecture",
    desc: "Modular component hierarchies, strict TypeScript DTOs and accessible design tokens that teams can extend without breaking each other.",
  },
  {
    icon: Plane,
    title: "B2B travel workflows",
    desc: "Multi-brand white-label architecture, GDS and NDC flight booking pipelines, and per-segment baggage allocation.",
  },
  {
    icon: ScanLine,
    title: "In-browser document processing",
    desc: "OCR and ICAO 9303 MRZ extraction in Web Workers, plus vector airline boarding pass PDFs generated on the client.",
  },
  {
    icon: Server,
    title: "Full-stack API ownership",
    desc: "Node.js and NestJS services, token refresh rotation, role-based guards and relational modeling in PostgreSQL.",
  },
];

export default function About() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const reduce = useReducedMotion();

  const accent = isDark ? "#22B8CF" : "#0E8FA3";
  const panel = isDark ? "#101C35" : "#FFFFFF";
  const hairline = isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)";
  const chip = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.06)";

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, delay: reduce ? 0 : i * 0.08, ease },
    }),
  };

  const view = { once: true, amount: 0.2 } as const;

  return (
    <Box
      id="about"
      component="section"
      sx={{ py: { xs: 9, md: 13 }, position: "relative" }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="About"
          title="Senior frontend developer, 5+ years, with full-stack reach"
          subtitle="Frontend craft, enterprise travel domain knowledge and ownership of the whole delivery cycle."
        />

        {/* Top: story + profile card */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: { xs: 5, lg: 7 },
            alignItems: "start",
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Story */}
          <Box
            component={motion.div}
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={view}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                lineHeight: 1.55,
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              I&apos;m a Senior Frontend Developer with 5+ years of experience building
              business-critical web applications, and I work full-stack whenever a
              product needs it.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", md: "1.04rem" },
                lineHeight: 1.75,
                color: "text.secondary",
              }}
            >
              My core is modern React architecture: reusable design system components,
              strict TypeScript, Redux Toolkit state management and resilient REST API
              integration. In high-frequency B2B travel portals I focus on predictable
              state flows, fast rendering and workflows agents can use all day without
              friction.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", md: "1.04rem" },
                lineHeight: 1.75,
                color: "text.secondary",
              }}
            >
              On the backend I work with Node.js, NestJS and PostgreSQL. That lets me
              design clean API contracts, handle JWT authentication and role-based
              guards, and collaborate across the whole application lifecycle instead of
              stopping at the UI.
            </Typography>

            <Box
              sx={{
                mt: 1,
                pl: 2.4,
                borderLeft: "3px solid",
                borderColor: accent,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.96rem", md: "1rem" },
                  lineHeight: 1.65,
                  fontStyle: "italic",
                }}
              >
                &ldquo;Engineering maturity is not about adding complexity. It is about
                systems that stay reliable under production load, feel intuitive to
                users and are clean for teams to maintain.&rdquo;
              </Typography>
            </Box>
          </Box>

          {/* Profile card */}
          <Box
            component={motion.div}
            variants={rise}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={view}
            sx={{
              position: { lg: "sticky" },
              top: { lg: 110 },
              borderRadius: "20px",
              backgroundColor: panel,
              border: "1px solid",
              borderColor: hairline,
              overflow: "hidden",
              boxShadow: isDark
                ? "0 24px 50px -24px rgba(0,0,0,0.6)"
                : "0 20px 40px -24px rgba(15,23,42,0.2)",
            }}
          >
            <Box sx={{ height: 5, backgroundColor: accent }} />

            <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Box sx={{ display: "flex", alignItems: "flex-end", gap: 2, mb: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "3.4rem", sm: "4rem" },
                    fontWeight: 800,
                    lineHeight: 0.9,
                    letterSpacing: "-0.05em",
                    color: accent,
                  }}
                >
                  5+
                </Typography>
                <Box sx={{ pb: 0.4 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.02rem", lineHeight: 1.2 }}>
                    Years of experience
                  </Typography>
                  <Typography sx={{ color: "text.secondary", fontSize: "0.84rem" }}>
                    Senior Frontend Developer
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1.2,
                  mb: 2.8,
                }}
              >
                {[
                  { v: "15+", l: "apps in production" },
                  { v: "Full-stack", l: "Node, NestJS, Postgres" },
                ].map((s) => (
                  <Box
                    key={s.l}
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      backgroundColor: chip,
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", lineHeight: 1.1 }}>
                      {s.v}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.76rem", mt: 0.3 }}>
                      {s.l}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {[
                { label: "Frontend", items: frontendStack },
                { label: "Full-stack", items: fullstackStack },
              ].map((group, gi) => (
                <Box key={group.label} sx={{ mb: gi === 0 ? 2.2 : 0 }}>
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "text.secondary",
                      mb: 0.9,
                    }}
                  >
                    {group.label}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                    {group.items.map((t) => (
                      <Box
                        key={t}
                        sx={{
                          px: 1.1,
                          py: 0.35,
                          borderRadius: "6px",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          backgroundColor: chip,
                          border: "1px solid",
                          borderColor: gi === 0 ? `${accent}55` : "transparent",
                        }}
                      >
                        {t}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Pillars */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 2,
          }}
        >
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Box
                key={p.title}
                component={motion.div}
                variants={rise}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={view}
                sx={{
                  position: "relative",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "16px",
                  backgroundColor: panel,
                  border: "1px solid",
                  borderColor: hairline,
                  transition: "border-color .25s ease, transform .25s ease",
                  "&:hover": { borderColor: accent, transform: "translateY(-3px)" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.8 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      display: "grid",
                      placeItems: "center",
                      color: accent,
                      backgroundColor: `${accent}1f`,
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      color: "text.secondary",
                      opacity: 0.6,
                    }}
                  >
                    0{i + 1}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.8, letterSpacing: "-0.01em" }}>
                  {p.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {p.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
