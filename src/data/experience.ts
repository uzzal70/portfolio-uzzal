import { ExperienceItem } from "@/types/portfolio";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-senior-frontend",
    role: "Senior Frontend Developer",
    company: "Travel Tech Innovations Ltd.",
    location: "Dhaka, Bangladesh (Hybrid)",
    period: "2023 – Present",
    isCurrent: true,
    description:
      "Leading frontend architecture and core application development for high-volume B2B travel platforms, including TripFindy and Ticket Lagbe.",
    responsibilities: [
      "Architect and maintain core React.js application repositories with Material UI v5 and Redux Toolkit.",
      "Design and implement multi-brand white-label frontend architecture serving partner agencies from a unified codebase.",
      "Spearhead performance optimization efforts, reducing large itinerary list re-render bottlenecks by over 60%.",
      "Collaborate with backend engineers to establish standardized REST API schemas and error contract conventions.",
      "Mentor junior frontend engineers, conduct thorough code reviews, and establish frontend testing and styling guidelines.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI v5",
      "Redux Toolkit",
      "REST APIs",
      "Vite",
      "Framer Motion",
    ],
    majorContributions: [
      "Engineered the multi-tenant configuration system powering multi-brand deployment across agency partners.",
      "Built client-side PDF airline ticket generation system, eliminating server-side rendering latency.",
      "Introduced strict TypeScript definitions and shared UI components, significantly cutting duplicate code.",
    ],
  },
  {
    id: "exp-frontend-developer",
    role: "Frontend Software Engineer",
    company: "Enterprise Solutions & Softwares",
    location: "Dhaka, Bangladesh",
    period: "2021 – 2023",
    isCurrent: false,
    description:
      "Engineered responsive user interfaces and customer management dashboards for enterprise software clients and internal business workflows.",
    responsibilities: [
      "Developed responsive single-page applications using React.js and modern CSS architecture.",
      "Built role-based dashboard views, complex form wizards with Formik/Yup, and high-density data tables.",
      "Connected frontend views with Node.js and Express backend REST services, implementing token auth and error states.",
      "Participated in agile sprint planning, technical estimations, and daily standups.",
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Material UI",
      "Redux",
      "REST APIs",
      "Node.js",
      "PostgreSQL",
      "Git",
    ],
    majorContributions: [
      "Refactored legacy class component interfaces into modern functional React with custom hooks.",
      "Implemented client-side file upload and preview system for regulatory trade license documentation.",
      "Maintained zero-downtime frontend releases through structured git branching workflows.",
    ],
  },
  {
    id: "exp-junior-developer",
    role: "Junior Web Developer",
    company: "Digital Code Craft",
    location: "Dhaka, Bangladesh",
    period: "2020 – 2021",
    isCurrent: false,
    description:
      "Contributed to frontend feature implementation, cross-browser styling fixes, and API integrations for client web portals.",
    responsibilities: [
      "Built pixel-perfect responsive web pages from designer Figma mockups.",
      "Implemented client-side form validations and dynamic UI interactions.",
      "Assisted in writing integration tests and documentation for internal component libraries.",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap / MUI",
      "REST APIs",
      "Git",
    ],
    majorContributions: [
      "Delivered 10+ responsive business web portals on schedule with cross-browser compatibility.",
      "Optimized static asset delivery and image compression to boost mobile PageSpeed scores.",
    ],
  },
];

