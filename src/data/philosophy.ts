import { PhilosophyPrinciple } from "@/types/portfolio";

export const philosophyHeading = {
  eyebrow: "CORE CREED",
  title: "Good Software Is More Than Working Code.",
  subtitle:
    "It is resilient under pressure, intuitive to humans, clean to maintain, and engineered with intentionality from day one.",
};

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Clean & Maintainable Code",
    description:
      "Code is read ten times more often than it is written. Writing self-documenting code with clear variable naming, modular boundaries, and strict types is an act of respect for your future team.",
    icon: "Code2",
  },
  {
    number: "02",
    title: "Performance-First Thinking",
    description:
      "Perceived speed is user satisfaction. High performance is not a late optimization pass; it is engineered into the architecture through lightweight renders, efficient caches, and prudent bundle weights.",
    icon: "Gauge",
  },
  {
    number: "03",
    title: "User-Focused Interfaces",
    description:
      "Engineers write software for people. Every error message, loading indicator, and button transition should provide clear reassurance, minimizing user confusion and cognitive friction.",
    icon: "Users",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "Build systems that can grow gracefully. Avoid premature over-engineering, but lay down modular boundaries so adding new business modules does not require rewriting the core.",
    icon: "Boxes",
  },
  {
    number: "05",
    title: "Secure API Integration",
    description:
      "Never trust client input or assume backend infallibility. Handle auth tokens responsibly, sanitize form payloads, guard private endpoints, and gracefully absorb server errors.",
    icon: "ShieldCheck",
  },
  {
    number: "06",
    title: "Reusable Components",
    description:
      "Invest in foundational design tokens and atomic components. Consistency in typography, colors, and button states translates directly into user trust and rapid feature delivery.",
    icon: "Blocks",
  },
  {
    number: "07",
    title: "Consistent Coding Standards",
    description:
      "Maintain shared architectural conventions, structured Git histories, and comprehensive code reviews. A unified codebase reads as though written by a single disciplined mind.",
    icon: "GitBranch",
  },
  {
    number: "08",
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. Growth requires genuine curiosity, hands-on experimentation with modern tooling, and humility to learn better paradigms from the global engineering community.",
    icon: "Sparkles",
  },
];
