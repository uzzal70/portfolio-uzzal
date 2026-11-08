"use client";

import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp } from "../animation/MotionWrapper";

export default function About() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="BACKGROUND & APPROACH"
          title="Engineering Focused on Production Resilience"
          subtitle="A practical balance of frontend craftsmanship, enterprise domain architecture, and full lifecycle ownership."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: { xs: 5, lg: 8 },
            alignItems: "start",
          }}
        >
          {/* Left Column: Focused Narrative */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.02rem", md: "1.12rem" },
                lineHeight: 1.8,
                color: "text.primary",
                fontWeight: 500,
              }}
            >
              I am a frontend-focused Full-Stack Developer with 5+ years of professional experience building business-critical web applications.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.75,
                color: "text.secondary",
              }}
            >
              My primary expertise centers on modern React.js architecture, reusable design system components, strict TypeScript typing, state management with Redux Toolkit, and resilient REST API integration. In high-frequency enterprise environments like B2B travel portals, I focus on predictable state flows, fast rendering budgets, and intuitive workflows.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.75,
                color: "text.secondary",
              }}
            >
              Alongside frontend engineering, I work practically with Node.js, NestJS, and PostgreSQL. This working full-stack background allows me to design clean API contracts, manage JWT authentication and role-based guards, and collaborate seamlessly across the entire application lifecycle.
            </Typography>

            {/* Core Principle Callout */}
            <Box
              sx={{
                mt: 1.5,
                p: { xs: 2.5, md: 3 },
                borderRadius: 2.5,
                backgroundColor: isDark
                  ? "rgba(184, 149, 85, 0.08)"
                  : "rgba(184, 149, 85, 0.06)",
                borderLeft: "3px solid",
                borderColor: "secondary.main",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  color: "text.primary",
                  fontSize: { xs: "0.94rem", md: "0.98rem" },
                  lineHeight: 1.65,
                }}
              >
                &ldquo;Engineering maturity is not about introducing complexity; it is about creating systems that are reliable under production load, intuitive for users, and clean for teams to maintain.&rdquo;
              </Typography>
            </Box>
          </Box>

          {/* Right Column: 4 Key Pillars */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 2,
            }}
          >
            {[
              {
                number: "01",
                title: "Frontend Architecture & Systems",
                desc: "Modular component hierarchies with atomic design, strict TypeScript DTOs, and accessible design tokens.",
              },
              {
                number: "02",
                title: "B2B Travel & Enterprise Workflows",
                desc: "Multi-brand white-label architecture, GDS flight booking pipelines, and per-segment baggage allocation.",
              },
              {
                number: "03",
                title: "Client-Side Document Processing",
                desc: "In-browser OCR & ICAO 9303 MRZ extraction via Web Workers, plus dynamic vector airline PDF boarding pass generation.",
              },
              {
                number: "04",
                title: "Practical Full-Stack API Integration",
                desc: "Node.js & NestJS backend integration, token refresh rotation, RBAC guards, and PostgreSQL relational modeling.",
              },
            ].map((pillar) => (
              <Box
                key={pillar.number}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E8E5DD",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "secondary.main",
                    mt: 0.2,
                  }}
                >
                  {pillar.number}
                </Typography>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.92rem", mb: 0.5 }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.5, display: "block" }}>
                    {pillar.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
