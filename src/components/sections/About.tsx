"use client";

import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Briefcase, Layers, Terminal, Sparkles, CheckCircle2, Compass } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp, staggerContainer } from "../animation/MotionWrapper";

export default function About() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="ABOUT MY WORK"
          title={personalData.about.heading}
          subtitle="Combining high-standard frontend craftsmanship with practical full-stack execution."
        />

        <Grid container spacing={{ xs: 5, lg: 8 }} alignItems="stretch">
          {/* Left Column: Narrative paragraphs & Philosophy */}
          <Grid item xs={12} lg={7}>
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
              {personalData.about.paragraphs.map((p, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.02rem", md: "1.12rem" },
                    lineHeight: 1.8,
                    color: "text.secondary",
                  }}
                >
                  {p}
                </Typography>
              ))}

              {/* Working Philosophy Callout Card */}
              <Box
                sx={{
                  mt: 2,
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  backgroundColor: isDark
                    ? "rgba(184, 149, 85, 0.08)"
                    : "rgba(184, 149, 85, 0.06)",
                  border: "1px solid",
                  borderColor: isDark
                    ? "rgba(184, 149, 85, 0.25)"
                    : "rgba(184, 149, 85, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 16,
                    color: "secondary.main",
                    opacity: 0.3,
                  }}
                >
                  <Compass size={40} />
                </Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    display: "block",
                    mb: 1,
                  }}
                >
                  ENGINEERING PHILOSOPHY
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "text.primary",
                    fontSize: { xs: "0.98rem", md: "1.05rem" },
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{personalData.about.workingPhilosophy}&rdquo;
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Key Metrics & Highlight Cards */}
          <Grid item xs={12} lg={5}>
            <Box
              component={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2.5,
                height: "100%",
              }}
            >
              {personalData.about.highlights.map((item, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "secondary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 700,
                        fontSize: { xs: "1.8rem", md: "2.1rem" },
                        mb: 1,
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      {item.metric}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: "text.primary",
                        fontSize: "0.92rem",
                        mb: 0.75,
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.detail}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
