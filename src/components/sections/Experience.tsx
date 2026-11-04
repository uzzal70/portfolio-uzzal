"use client";

import React from "react";
import { Box, Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { experienceData } from "@/data/experience";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp } from "../animation/MotionWrapper";

export default function Experience() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="CAREER TRAJECTORY"
          title="Professional Experience"
          subtitle="Progressive ownership across enterprise B2B travel portals, responsive web platforms, and client-side document automation."
        />

        {/* Timeline Container */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1000px",
            mx: "auto",
            pl: { xs: 3, md: 6 },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              left: { xs: 8, md: 18 },
              width: "2px",
              background: isDark
                ? "linear-gradient(180deg, #8580FF 0%, #B89555 50%, #232336 100%)"
                : "linear-gradient(180deg, #292764 0%, #B89555 50%, #EAE8E2 100%)",
            },
          }}
        >
          {experienceData.map((exp, index) => (
            <Box
              key={exp.id}
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                position: "relative",
                mb: { xs: 6, md: 8 },
              }}
            >
              {/* Timeline Indicator Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -28, md: -48 },
                  top: 8,
                  width: { xs: 14, md: 18 },
                  height: { xs: 14, md: 18 },
                  borderRadius: "50%",
                  backgroundColor: exp.isCurrent ? "secondary.main" : "background.paper",
                  border: "3px solid",
                  borderColor: exp.isCurrent
                    ? "secondary.main"
                    : isDark
                    ? "#8580FF"
                    : "primary.main",
                  boxShadow: exp.isCurrent ? "0 0 12px #B89555" : "none",
                  zIndex: 2,
                }}
              />

              {/* Experience Card */}
              <Card
                sx={{
                  p: { xs: 2.5, md: 4 },
                  borderRadius: 3,
                  backgroundColor: isDark ? "#141420" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isDark ? "#26263B" : "#EAE8E2",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    boxShadow: isDark
                      ? "0 16px 36px -4px rgba(0, 0, 0, 0.4)"
                      : "0 16px 32px -4px rgba(41, 39, 100, 0.08)",
                  },
                }}
              >
                {/* Header Row: Role, Company, Period */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 1.5,
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.3rem", sm: "1.5rem" },
                        fontWeight: 700,
                        color: "text.primary",
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: "secondary.main",
                        fontSize: "1rem",
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "flex-start", sm: "flex-end" },
                      gap: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.5,
                        py: 0.4,
                        borderRadius: "20px",
                        backgroundColor: isDark
                          ? "rgba(184, 149, 85, 0.12)"
                          : "rgba(184, 149, 85, 0.08)",
                        border: "1px solid",
                        borderColor: "secondary.main",
                      }}
                    >
                      <Calendar size={13} color="#B89555" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          color: "secondary.main",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <MapPin size={12} color="#777777" />
                      <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
                        {exp.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.92rem", md: "0.98rem" },
                    mb: 3,
                  }}
                >
                  {exp.description}
                </Typography>

                {/* Responsibilities */}
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "secondary.main",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    mb: 1.5,
                  }}
                >
                  Key Responsibilities:
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <Box key={rIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckCircle2
                        size={15}
                        color={isDark ? "#8580FF" : "#292764"}
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary", fontSize: "0.88rem", lineHeight: 1.55 }}
                      >
                        {resp}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Major Contributions */}
                {exp.majorContributions.length > 0 && (
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: isDark
                        ? "rgba(133, 128, 255, 0.05)"
                        : "rgba(41, 39, 100, 0.03)",
                      border: "1px solid",
                      borderColor: "divider",
                      mb: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                      <Award size={15} color="#B89555" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          fontSize: "0.72rem",
                          color: "text.primary",
                          textTransform: "uppercase",
                        }}
                      >
                        Major Engineering Contributions:
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                      {exp.majorContributions.map((contrib, cIdx) => (
                        <Typography
                          key={cIdx}
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            display: "block",
                          }}
                        >
                          &bull; {contrib}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Technologies Used */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {exp.technologies.map((t) => (
                    <Box
                      key={t}
                      sx={{
                        px: 1.2,
                        py: 0.35,
                        borderRadius: "5px",
                        backgroundColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)",
                        border: "1px solid",
                        borderColor: "divider",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "text.secondary",
                      }}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
