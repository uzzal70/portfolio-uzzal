import { EngineeringStrength } from "@/types/portfolio";

export const engineeringStrengths: EngineeringStrength[] = [
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    icon: "LayoutGrid",
    summary:
      "Designing scalable, modular frontend structures that maintain clarity and agility as projects grow in scope and complexity.",
    points: [
      "Modular, reusable component hierarchies with atomic design principles.",
      "Strict separation of domain logic, state management, and UI rendering layers.",
      "Scalable multi-brand theming configurations sharing a single maintainable core.",
      "Strict TypeScript typing to prevent runtime errors and streamline developer onboarding.",
    ],
  },
  {
    id: "ui-ux-implementation",
    title: "UI/UX Implementation",
    icon: "Palette",
    summary:
      "Transforming complex workflows and Figma designs into fluid, pixel-conscious, and accessible enterprise interfaces.",
    points: [
      "Pixel-conscious translation of modern design tokens into Material UI v5 themes.",
      "Deep responsive design across handheld phones, tablets, laptops, and ultra-wide screens.",
      "Adherence to WCAG accessibility guidelines, keyboard navigation, and semantic DOM structures.",
      "Smooth micro-interactions that clarify user state without introducing cognitive load.",
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    icon: "DatabaseZap",
    summary:
      "Orchestrating state predictability across complex enterprise applications with minimal re-render footprints.",
    points: [
      "Normalized Redux Toolkit state stores for multi-entity relational frontend caches.",
      "Pragmatic local vs global state partitioning using custom React hooks and Context.",
      "Optimistic UI updates for high-frequency actions to maximize perceived performance.",
      "URL query-state synchronization for shareable filters and reproducible views.",
    ],
  },
  {
    id: "api-integration",
    title: "API Integration",
    icon: "Network",
    summary:
      "Building resilient data pipelines that gracefully handle network variance, latency, and edge-case exceptions.",
    points: [
      "Clean Axios / Fetch abstraction layers with unified request/response interceptors.",
      "Comprehensive error boundary isolation, retry policies, and graceful degradation.",
      "Meaningful loading skeletons, empty states, and descriptive user-facing alerts.",
      "Tight schema synchronization between backend contracts and frontend TypeScript DTOs.",
    ],
  },
  {
    id: "backend-understanding",
    title: "Backend Understanding",
    icon: "Server",
    summary:
      "Bridging the full-stack gap with practical working knowledge of Node.js, NestJS, and relational databases.",
    points: [
      "Building RESTful API endpoints with Express and modular NestJS architecture.",
      "JWT-based authentication flows, refresh token rotation, and RBAC authorization guards.",
      "Relational data modeling, foreign keys, joins, and indexing fundamentals with PostgreSQL.",
      "Understanding payload optimization, rate limits, and caching strategies at the network boundary.",
    ],
  },
  {
    id: "problem-solving",
    title: "Problem Solving & Ownership",
    icon: "Wrench",
    summary:
      "Diagnosing challenging production bottlenecks, profiling performance, and owning issues to resolution.",
    points: [
      "Systematic debugging with browser DevTools, network waterfalls, and React Profiler.",
      "Resolving complex layout recalculations, memory leaks, and DOM bloat.",
      "Root-cause analysis for production exceptions with Sentry error telemetry.",
      "Engineering ownership with pragmatic trade-offs balancing speed, stability, and scale.",
    ],
  },
];

