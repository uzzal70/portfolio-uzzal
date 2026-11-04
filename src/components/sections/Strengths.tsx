"use client";

import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Palette,
  DatabaseZap,
  Network,
  Server,
  Wrench,
  Check,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { engineeringStrengths } from "@/data/strengths";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp, staggerContainer } from "../animation/MotionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid size={24} color="#B89555" />,
  Palette: <Palette size={24} color="#8580FF" />,
  DatabaseZap: <DatabaseZap size={24} color="#B89555" />,
  Network: <Network size={24} color="#8580FF" />,
  Server: <Server size={24} color="#B89555" />,
  Wrench: <Wrench size={24} color="#8580FF" />,
};

export default function Strengths() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="strengths"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="ENGINEERING MATURITY"
          title="Core Engineering Strengths"
          subtitle="A disciplined balance of frontend design system rigor, state predictability, API resilience, and full-stack ownership."
        />

        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Grid container spacing={3}>
            {engineeringStrengths.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 1, md: 1.5 },
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "secondary.main",
                      transform: "translateY(-4px)",
                      boxShadow: isDark
                        ? "0 16px 36px -4px rgba(133, 128, 255, 0.15)"
                        : "0 16px 32px -4px rgba(41, 39, 100, 0.1)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1 }}>
                    {/* Icon & Index */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: 2,
                          backgroundColor: isDark
                            ? "rgba(255, 255, 255, 0.04)"
                            : "rgba(41, 39, 100, 0.04)",
                          border: "1px solid",
                          borderColor: "divider",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {iconMap[item.icon] || <LayoutGrid size={24} color="#B89555" />}
                      </Box>

                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "secondary.main",
                        }}
                      >
                        0{index + 1}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: "text.primary",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Summary */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        mb: 2.5,
                        fontSize: "0.88rem",
                      }}
                    >
                      {item.summary}
                    </Typography>

                    {/* Bullet Points */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {item.points.map((pt, pIdx) => (
                        <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                          <Check
                            size={14}
                            color="#B89555"
                            style={{ marginTop: "4px", flexShrink: 0 }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.primary",
                              fontSize: "0.8rem",
                              lineHeight: 1.45,
                            }}
                          >
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
