"use client";

import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
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
        py: { xs: 9, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="CAREER MILESTONES"
          title="Commercial Experience & Roles"
          subtitle="Chronological track record architecting enterprise frontend applications and high-frequency travel booking portals."
        />

        {/* Compact Vertical Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "920px",
            mx: "auto",
            pl: { xs: 3, md: 4.5 },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 12,
              bottom: 12,
              left: { xs: 6, md: 10 },
              width: "2px",
              background: isDark
                ? "linear-gradient(180deg, #9490FF 0%, #B89555 60%, #242436 100%)"
                : "linear-gradient(180deg, #292764 0%, #B89555 60%, #E8E5DD 100%)",
            },
          }}
        >
          {experienceData.map((exp) => (
            <Box
              key={exp.id}
              component={motion.div}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              sx={{
                position: "relative",
                mb: { xs: 4.5, md: 6 },
                "&:last-child": { mb: 0 },
              }}
            >
              {/* Timeline Indicator Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -24, md: -34 },
                  top: 22,
                  width: { xs: 13, md: 15 },
                  height: { xs: 13, md: 15 },
                  borderRadius: "50%",
                  backgroundColor: exp.isCurrent ? "secondary.main" : "background.paper",
                  border: "2.5px solid",
                  borderColor: exp.isCurrent
                    ? "secondary.main"
                    : isDark
                    ? "#9490FF"
                    : "primary.main",
                  boxShadow: exp.isCurrent ? "0 0 10px #B89555" : "none",
                  zIndex: 2,
                }}
              />

              {/* Compact Experience Card */}
              <Card
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: 3,
                  backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E8E5DD",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                  },
                }}
              >
                {/* Header Row */}
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
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1.2rem", sm: "1.35rem" },
                        fontWeight: 700,
                        color: "text.primary",
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        color: "secondary.main",
                        fontSize: "0.95rem",
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.4,
                        py: 0.35,
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
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "secondary.main",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 0.5 }}>
                      <MapPin size={12} color="#777777" />
                      <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
                        {exp.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Scannable Bullet Points */}
                <Box
                  component="ul"
                  sx={{
                    pl: 2.5,
                    m: 0,
                    mb: 2.5,
                    "& li": {
                      fontSize: "0.88rem",
                      color: "text.secondary",
                      lineHeight: 1.6,
                      mb: 0.8,
                    },
                  }}
                >
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </Box>

                {/* Technologies Used Pills */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
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
                        color: "text.primary",
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
