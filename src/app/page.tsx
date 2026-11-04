import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Strengths from "@/components/sections/Strengths";
import Experience from "@/components/sections/Experience";
import Workflow from "@/components/sections/Workflow";
import Philosophy from "@/components/sections/Philosophy";
import Education from "@/components/sections/Education";
import GithubShowcase from "@/components/sections/GithubShowcase";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box component="main" sx={{ position: "relative", zIndex: 1 }}>
      {/* Section 02: Hero Section */}
      <Hero />

      {/* Section 03: Professional Introduction */}
      <About />

      {/* Section 04: Technical Expertise */}
      <Skills />

      {/* Section 05: Featured Projects */}
      <Projects />

      {/* Section 06: My Engineering Strengths */}
      <Strengths />

      {/* Section 07: Professional Experience */}
      <Experience />

      {/* Section 08: My Development Workflow */}
      <Workflow />

      {/* Section 09: Engineering Philosophy */}
      <Philosophy />

      {/* Section 10: Education & Continuous Learning */}
      <Education />

      {/* Section 11: GitHub & Development Activity */}
      <GithubShowcase />

      {/* Section 12: Contact Section */}
      <Contact />

      {/* Section 13: Premium Footer */}
      <Footer />
    </Box>
  );
}
