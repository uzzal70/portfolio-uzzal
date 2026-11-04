"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Tabs, Tab, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import TechnologyBadge from "../common/TechnologyBadge";
import { technologies, skillCategories } from "@/data/skills";
import { useAppTheme } from "@/theme/ThemeContext";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const filteredTechs =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <Box
      id="expertise"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="TECHNICAL REPERTOIRE"
          title="Technical Expertise & Competencies"
          subtitle="Honest categorization distinguishing core frontend mastery from practical working knowledge and supporting tools."
        />

        {/* Legend for Skill Levels */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            mb: 4,
            p: 2,
            borderRadius: 2,
            backgroundColor: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "text.secondary",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Proficiency Levels:
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 600, color: "text.primary" }}>
              Primary Expertise (Daily Production Architecture)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: isDark ? "#8580FF" : "#292764",
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 500, color: "text.secondary" }}>
              Working Knowledge (Active Full-Stack Implementation)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "1.5px dashed var(--text-muted)",
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 500, color: "text.secondary" }}>
              Familiarity (Supporting Tools & DevOps Fundamentals)
            </Typography>
          </Box>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "secondary.main",
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: "0.88rem", sm: "0.95rem" },
                color: "text.secondary",
                minWidth: "auto",
                px: { xs: 2, sm: 3 },
                py: 1.5,
                "&.Mui-selected": {
                  color: isDark ? "#FFFFFF" : "primary.main",
                },
              },
            }}
          >
            {skillCategories.map((cat) => (
              <Tab key={cat.id} label={cat.label} value={cat.id} />
            ))}
          </Tabs>
        </Box>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={2}>
              {filteredTechs.map((tech) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={tech.name}>
                  <TechnologyBadge tech={tech} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
