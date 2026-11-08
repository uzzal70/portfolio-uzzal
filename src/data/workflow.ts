import { WorkflowStep } from "@/types/portfolio";

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Understand Requirements",
    tagline: "Unpack user intent & business goals",
    description:
      "Clarify project scope, user journeys, edge cases, and business constraints before writing a single line of code. Asking the right questions early prevents expensive revisions later.",
    deliverables: [
      "Product requirement breakdown",
      "User story mapping",
      "Acceptance criteria alignment",
    ],
  },
  {
    step: "02",
    title: "Analyze Business Logic",
    tagline: "Map data flows & domain rules",
    description:
      "Deconstruct core algorithms, validation rules, permissions, and domain states. Ensure edge cases like timeouts, network disconnects, and concurrent edits are accounted for.",
    deliverables: [
      "Entity state transitions",
      "Role-based access matrix",
      "Edge-case specification",
    ],
  },
  {
    step: "03",
    title: "Plan Architecture",
    tagline: "Design scalable, maintainable foundations",
    description:
      "Establish component boundaries, state management partitions (local vs global), API contracts, data normalization models, and directory structure.",
    deliverables: [
      "Component hierarchy diagram",
      "Store & cache design",
      "TypeScript interfaces & DTOs",
    ],
  },
  {
    step: "04",
    title: "Design UI/UX & Tokens",
    tagline: "Craft cohesive visual language",
    description:
      "Translate wireframes into responsive, accessible design tokens. Define color palettes, typography scales, spacing grids, and component variants in Material UI v5 theme.",
    deliverables: [
      "MUI theme palette & tokens",
      "Responsive layout grid",
      "Accessible contrast validation",
    ],
  },
  {
    step: "05",
    title: "Develop Frontend",
    tagline: "Write clean, modular, typed code",
    description:
      "Implement presentational and container components with strict TypeScript, reusable hooks, and thoughtful micro-interactions using Framer Motion.",
    deliverables: [
      "Modular React components",
      "Custom hook abstractions",
      "Framer Motion micro-animations",
    ],
  },
  {
    step: "06",
    title: "Integrate APIs",
    tagline: "Connect resilient data pipelines",
    description:
      "Implement API service layers with Axios/fetch, token authentication, error handling interceptors, optimistic updates, and comprehensive loading/empty UI states.",
    deliverables: [
      "REST API client services",
      "Error boundary coverage",
      "Loading skeletons & empty states",
    ],
  },
  {
    step: "07",
    title: "Test & Debug",
    tagline: "Verify across environments & viewports",
    description:
      "Perform rigorous cross-browser testing, responsive viewport audits, form validation stress tests, and keyboard accessibility inspections.",
    deliverables: [
      "Cross-browser verification",
      "Keyboard & screen-reader checks",
      "Console error-free guarantee",
    ],
  },
  {
    step: "08",
    title: "Optimize Performance",
    tagline: "Profile, trim bundles & accelerate UX",
    description:
      "Audit bundle sizes, code-split dynamic routes, memoize heavy computations, optimize image formats, and refine rendering waterfalls to achieve top Core Web Vitals.",
    deliverables: [
      "Lighthouse performance audit",
      "Bundle size optimization",
      "Memoization & render tuning",
    ],
  },
  {
    step: "09",
    title: "Deploy & Maintain",
    tagline: "Deliver reliably & monitor production",
    description:
      "Configure CI/CD pipelines, production build caching, error tracking with Sentry, and clean release versioning with proactive technical documentation.",
    deliverables: [
      "Production deployment",
      "Sentry exception tracking",
      "Maintainer documentation",
    ],
  },
];

