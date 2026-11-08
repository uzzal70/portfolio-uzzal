"use client";

import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  Code2,
  Gauge,
  Users,
  Boxes,
  ShieldCheck,
  Blocks,
  GitBranch,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { philosophyHeading, philosophyPrinciples } from "@/data/philosophy";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp, staggerContainer } from "../animation/MotionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={22} color="#B89555" />,
  Gauge: <Gauge size={22} color="#8580FF" />,
  Users: <Users size={22} color="#B89555" />,
  Boxes: <Boxes size={22} color="#8580FF" />,
  ShieldCheck: <ShieldCheck size={22} color="#B89555" />,
  Blocks: <Blocks size={22} color="#8580FF" />,
  GitBranch: <GitBranch size={22} color="#B89555" />,
  Sparkles: <Sparkles size={22} color="#8580FF" />,
};

export default function Philosophy() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="philosophy"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge={philosophyHeading.eyebrow}
          title={philosophyHeading.title}
          subtitle={philosophyHeading.subtitle}
        />

        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: 2.5,
          }}
        >
          {philosophyPrinciples.map((item) => (
            <Card
              key={item.number}
              component={motion.div}
              variants={fadeInUp}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 1,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "secondary.main",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
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
                    {iconMap[item.icon] || <Sparkles size={22} color="#B89555" />}
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "secondary.main",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "text.primary",
                    mb: 1.2,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: "0.86rem",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
