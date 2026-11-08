"use client";

import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import { CheckCircle2, Code2, Layers, Server, Wrench } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { useAppTheme } from "@/theme/ThemeContext";

interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
  skills: { name: string; tag?: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Core Commercial Strength & Daily Architecture",
    icon: <Code2 size={20} color="#B89555" />,
    isPrimary: true,
    skills: [
      { name: "React.js (v18+)", tag: "Expert" },
      { name: "Next.js (App Router)", tag: "Full-Stack" },
      { name: "TypeScript", tag: "Strict Typed" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5 & Semantic Web" },
      { name: "CSS3 & Custom Properties" },
      { name: "Material UI v5", tag: "Theme Tokens" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    id: "state-apis",
    title: "State Management & Data Flow",
    subtitle: "Complex Client Data Caching & Validation",
    icon: <Layers size={20} color="#8580FF" />,
    skills: [
      { name: "Redux Toolkit", tag: "Normalized Cache" },
      { name: "REST APIs Architecture" },
      { name: "Axios Interceptors" },
      { name: "React Custom Hooks" },
      { name: "Formik Form Lifecycles" },
      { name: "Yup Schema Validation" },
      { name: "Web Workers & OCR Streams" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data Systems",
    subtitle: "Practical Full-Stack Working Knowledge",
    icon: <Server size={20} color="#B89555" />,
    skills: [
      { name: "Node.js Event Loop" },
      { name: "NestJS Modules & Guards", tag: "Modular" },
      { name: "Express.js Routing" },
      { name: "PostgreSQL Relational DB" },
      { name: "SQL Queries & Indexing" },
      { name: "JWT Auth & Refresh Rotation" },
      { name: "Role-Based Access Control (RBAC)" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Professional Workflow",
    subtitle: "Modern Engineering Ecosystem",
    icon: <Wrench size={20} color="#8580FF" />,
    skills: [
      { name: "Git & Branching Strategies" },
      { name: "GitHub & Pull Request Reviews" },
      { name: "VS Code Tooling & Debugging" },
      { name: "Postman API Collections" },
      { name: "Vite Bundler & Asset Pipeline" },
      { name: "Figma to Production Code" },
      { name: "Sentry Error Monitoring" },
    ],
  },
];

export default function Skills() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="TECHNICAL COMPETENCE"
          title="Technical Index & Skill Matrix"
          subtitle="Honest categorization distinguishing core frontend production mastery from practical backend knowledge and professional tooling."
        />

        {/* 4 Grouped Skill Panels Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {skillGroups.map((group) => (
            <Card
              key={group.id}
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 3,
                backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                border: "1px solid",
                borderColor: group.isPrimary
                  ? "secondary.main"
                  : isDark
                  ? "rgba(255, 255, 255, 0.12)"
                  : "#E8E5DD",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s ease, transform 0.25s ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  transform: "translateY(-3px)",
                },
              }}
            >
              {/* Header */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 2,
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(41, 39, 100, 0.04)",
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {group.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>
                      {group.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.76rem" }}>
                      {group.subtitle}
                    </Typography>
                  </Box>
                </Box>

                {group.isPrimary && (
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.3,
                      borderRadius: 1,
                      backgroundColor: "rgba(184, 149, 85, 0.15)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "secondary.main",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    Core Strength
                  </Box>
                )}
              </Box>

              {/* Skills Tags Cloud */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                {group.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    sx={{
                      px: 1.5,
                      py: 0.65,
                      borderRadius: "6px",
                      backgroundColor: isDark ? "#0A1224" : "#F7F6F1",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "#E5E2D6",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {skill.name}
                    </Typography>

                    {skill.tag && (
                      <Box
                        sx={{
                          px: 0.8,
                          py: 0.15,
                          borderRadius: "4px",
                          backgroundColor: isDark ? "rgba(148, 144, 255, 0.15)" : "rgba(41, 39, 100, 0.08)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.64rem",
                          color: isDark ? "#A5A2FF" : "primary.main",
                          fontWeight: 700,
                        }}
                      >
                        {skill.tag}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
