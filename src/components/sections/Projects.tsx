"use client";

import React, { useState } from "react";
import { Box, Container, Tabs, Tab, Typography } from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../common/ProjectCard";
import { projectsData } from "@/data/projects";
import { useAppTheme } from "@/theme/ThemeContext";

const categories = [
  "All Projects",
  "Enterprise Travel Technology",
  "Document Automation",
  "Document Generation",
  "Business Application",
  "Enterprise Dashboard",
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const filteredProjects =
    selectedFilter === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="FEATURED CASE STUDIES"
          title="Enterprise Systems & Product Engineering"
          subtitle="Real-world B2B platforms, OCR document extraction tools, and high-precision document engines built for production environments."
        />

        {/* Project Category Filter Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: { xs: 5, md: 7 } }}>
          <Tabs
            value={selectedFilter}
            onChange={(_, val) => setSelectedFilter(val)}
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
                fontSize: { xs: "0.85rem", sm: "0.92rem" },
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
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>

        {/* Project Cards List */}
        <Box>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
