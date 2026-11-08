import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Box, Container } from "@mui/material";

function SectionDivider() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 20%, rgba(34, 184, 207, 0.3) 50%, rgba(255, 255, 255, 0.08) 80%, transparent 100%)",
        }}
      />
    </Container>
  );
}

export default function HomePage() {
  return (
    <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
      {/* 01. Hero Section — Apple-Grade Banner & Automated Workbenches */}
      <Hero />
      <SectionDivider />

      {/* 02. About Section — Background & Commercial Engineering Focus */}
      <About />
      <SectionDivider />

      {/* 03. Project Showcase — 13 Production Ecosystem Platforms */}
      <Projects />
      <SectionDivider />

      {/* 04. Technical Index — Grouped, Visual Skill Matrix */}
      <Skills />
      <SectionDivider />

      {/* 05. Commercial Experience — Compact Scannable Career Milestones */}
      <Experience />
      <SectionDivider />

      {/* 06. Contact Section — High-Conversion Direct Channels & Form */}
      <Contact />

      {/* 07. Studio Footer */}
      <Footer />
    </Box>
  );
}
