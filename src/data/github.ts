import { RepositoryItem } from "@/types/portfolio";

export const githubProfile = {
  username: "uzzaldev",
  profileUrl: "https://github.com/uzzaldev",
  bio: "Frontend-focused Full-Stack Developer building scalable web applications with React, Next.js, TypeScript & Node.",
  stats: {
    publicRepos: 28,
    primaryLanguages: ["TypeScript", "JavaScript", "React", "Node.js"],
  },
};

export const featuredRepositories: RepositoryItem[] = [
  {
    name: "passport-ocr-scanner-prototype",
    description:
      "Client-side OCR passport extraction interface utilizing Tesseract.js and HTML5 Canvas with ICAO 9303 MRZ checksum validation.",
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 14,
    forks: 3,
    url: "https://github.com/uzzaldev/passport-ocr-scanner-prototype",
    isFeatured: true,
    tags: ["React", "Tesseract.js", "MRZ", "OCR", "Web Worker"],
  },
  {
    name: "b2b-travel-flight-search-ui",
    description:
      "Enterprise flight search and multi-segment itinerary booking UI architecture with Material UI v5 and Redux Toolkit state management.",
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 22,
    forks: 5,
    url: "https://github.com/uzzaldev/b2b-travel-flight-search-ui",
    isFeatured: true,
    tags: ["React.js", "Redux Toolkit", "Material UI", "Enterprise UI"],
  },
  {
    name: "flight-ticket-pdf-engine",
    description:
      "Client-side airline e-ticket and invoice generator built with @react-pdf/renderer with dynamic carrier branding and status watermarking.",
    language: "JavaScript",
    languageColor: "#F7DF1E",
    stars: 18,
    forks: 4,
    url: "https://github.com/uzzaldev/flight-ticket-pdf-engine",
    isFeatured: true,
    tags: ["React", "@react-pdf/renderer", "PDF Generation"],
  },
  {
    name: "nestjs-rbac-starter-core",
    description:
      "Practical enterprise backend starter using NestJS with JWT authentication, refresh token rotation, PostgreSQL integration, and RBAC guards.",
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 31,
    forks: 8,
    url: "https://github.com/uzzaldev/nestjs-rbac-starter-core",
    isFeatured: true,
    tags: ["NestJS", "PostgreSQL", "TypeORM", "JWT", "RBAC"],
  },
  {
    name: "react-mui-enterprise-boilerplate",
    description:
      "Production-ready template for enterprise applications featuring Material UI v5 dark/light theme tokens, Axios interceptors, and Formik.",
    language: "TypeScript",
    languageColor: "#3178C6",
    stars: 45,
    forks: 12,
    url: "https://github.com/uzzaldev/react-mui-enterprise-boilerplate",
    isFeatured: true,
    tags: ["React", "Material UI v5", "TypeScript", "Theme System"],
  },
];
