"use client";

import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { educationData, continuousLearningTopics, certifications } from "@/data/education";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp, staggerContainer } from "../animation/MotionWrapper";

export default function Education() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="ACADEMIC FOUNDATION & GROWTH"
          title="Education & Continuous Learning"
          subtitle="Formal computer science principles paired with proactive study of distributed systems, database internals, and advanced frontend paradigms."
        />

        <Grid container spacing={{ xs: 5, lg: 6 }}>
          {/* Left Column: Formal Degree & Certifications */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* Formal Degree */}
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                  <GraduationCap size={22} color="#B89555" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Formal Education
                  </Typography>
                </Box>

                {educationData.map((edu, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, fontSize: "1.05rem", color: "text.primary", mb: 0.5 }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "secondary.main", fontWeight: 600, mb: 1.5 }}
                    >
                      {edu.institution}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "text.secondary",
                      }}
                    >
                      <span>{edu.period}</span>
                      <span>&bull;</span>
                      <span>{edu.location}</span>
                    </Box>

                    {edu.details && (
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {edu.details.map((d, dIdx) => (
                          <Typography
                            key={dIdx}
                            variant="body2"
                            sx={{ color: "text.secondary", fontSize: "0.86rem", lineHeight: 1.6 }}
                          >
                            &bull; {d}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Card>
                ))}
              </Box>

              {/* Verified Certifications */}
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                  <Award size={22} color="#8580FF" />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Technical Certifications
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {certifications.map((cert, cIdx) => (
                    <Box
                      key={cIdx}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: isDark
                          ? "rgba(255, 255, 255, 0.02)"
                          : "rgba(0, 0, 0, 0.02)",
                        border: "1px solid",
                        borderColor: "divider",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, color: "text.primary" }}
                        >
                          {cert.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "text.secondary" }}>
                          {cert.issuer}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          color: "secondary.main",
                          fontWeight: 700,
                        }}
                      >
                        {cert.year}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Continuous Learning Topics */}
          <Grid item xs={12} lg={7}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <BookOpen size={22} color="#B89555" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Active Learning & Specialization Areas
                </Typography>
              </Box>

              <Grid container spacing={2.5}>
                {continuousLearningTopics.map((topic, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        p: 1,
                        borderRadius: 2.5,
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "secondary.main",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.68rem",
                              color: "secondary.main",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            {topic.category}
                          </Typography>
                          <Box
                            sx={{
                              px: 1,
                              py: 0.2,
                              borderRadius: "4px",
                              backgroundColor: isDark
                                ? "rgba(133, 128, 255, 0.12)"
                                : "rgba(41, 39, 100, 0.06)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.66rem",
                              color: isDark ? "#A5A2FF" : "primary.main",
                              fontWeight: 600,
                            }}
                          >
                            {topic.status}
                          </Box>
                        </Box>

                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 700, fontSize: "0.95rem", color: "text.primary", mb: 0.75 }}
                        >
                          {topic.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", fontSize: "0.82rem", lineHeight: 1.55 }}
                        >
                          {topic.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
