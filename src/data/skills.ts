import { Technology } from "@/types/portfolio";

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend Engineering", subtitle: "Primary Expertise" },
  { id: "backend", label: "Backend Development", subtitle: "Practical Knowledge" },
  { id: "database", label: "Database", subtitle: "Working Knowledge" },
  { id: "tools", label: "Tools & Workflow", subtitle: "Professional Tooling" },
] as const;

export const technologies: Technology[] = [
  // Frontend Engineering – Primary Expertise
  { name: "JavaScript (ES6+)", category: "frontend", level: "Primary", description: "Modern ECMAScript, closures, async patterns, event loop" },
  { name: "TypeScript", category: "frontend", level: "Primary", description: "Strict typing, generics, utility types, discriminated unions" },
  { name: "React.js", category: "frontend", level: "Primary", description: "Component composition, lifecycle, custom hooks, performance profiling" },
  { name: "Next.js", category: "frontend", level: "Primary", description: "App Router, SSR, SSG, Route Handlers, SEO optimization" },
  { name: "Material UI v5", category: "frontend", level: "Primary", description: "Theme customization, styled components, sx prop, accessibility" },
  { name: "HTML5", category: "frontend", level: "Primary", description: "Semantic markup, modern forms, web standards, ARIA accessibility" },
  { name: "CSS3", category: "frontend", level: "Primary", description: "Flexbox, CSS Grid, custom properties, responsive breakpoints" },
  { name: "Responsive Web Design", category: "frontend", level: "Primary", description: "Fluid scaling, touch-first layouts, adaptive views" },
  { name: "Redux Toolkit", category: "frontend", level: "Primary", description: "Slices, createAsyncThunk, normalized cache, state selectors" },
  { name: "React Hooks", category: "frontend", level: "Primary", description: "useMemo, useCallback, useRef, custom business hook design" },
  { name: "Framer Motion", category: "frontend", level: "Primary", description: "Layout animations, gesture controls, keyframes, scroll triggers" },
  { name: "Formik", category: "frontend", level: "Primary", description: "Complex enterprise forms, multi-step flows, validation state" },
  { name: "Yup", category: "frontend", level: "Primary", description: "Schema-based form validation, asynchronous validation rules" },

  // Backend Development – Practical Knowledge
  { name: "Node.js", category: "backend", level: "Working Knowledge", description: "Event-driven runtime, modular microservices, streams, buffers" },
  { name: "NestJS", category: "backend", level: "Working Knowledge", description: "Controllers, services, dependency injection, pipes, guards" },
  { name: "Express.js", category: "backend", level: "Working Knowledge", description: "REST endpoints, custom middleware chains, router organization" },
  { name: "REST API Development", category: "backend", level: "Working Knowledge", description: "HTTP semantics, pagination, idempotent operations, standard contracts" },
  { name: "JWT Authentication", category: "backend", level: "Working Knowledge", description: "Token signing, refresh token rotation, bearer strategies" },
  { name: "Role-Based Access Control", category: "backend", level: "Working Knowledge", description: "RBAC guards, user role permissions, protected endpoint policies" },
  { name: "Middleware", category: "backend", level: "Working Knowledge", description: "Request logging, CORS headers, rate limiting, payload parsing" },
  { name: "API Integration", category: "backend", level: "Primary", description: "Robust Axios/fetch abstractions, interceptors, retry strategies" },
  { name: "Error Handling", category: "backend", level: "Primary", description: "Global exception filters, unified error responses, status code mapping" },
  { name: "Validation", category: "backend", level: "Working Knowledge", description: "class-validator, DTO schemas, input sanitization" },

  // Database
  { name: "PostgreSQL", category: "database", level: "Working Knowledge", description: "Relational modeling, schemas, foreign keys, ACID guarantees" },
  { name: "SQL", category: "database", level: "Working Knowledge", description: "Complex DML/DDL queries, aggregation, filtering, constraints" },
  { name: "Database Relationships", category: "database", level: "Working Knowledge", description: "One-to-many, many-to-many junction tables, cascade integrity" },
  { name: "Joins", category: "database", level: "Working Knowledge", description: "Inner, left outer, full joins, query execution plans" },
  { name: "Indexing Fundamentals", category: "database", level: "Working Knowledge", description: "B-Tree indexes, composite indexes, query performance tuning" },
  { name: "Transactions", category: "database", level: "Working Knowledge", description: "BEGIN / COMMIT / ROLLBACK, isolation levels, race prevention" },
  { name: "pgAdmin", category: "database", level: "Working Knowledge", description: "Schema inspection, query analysis, database backup and recovery" },

  // Tools & Workflow
  { name: "Git", category: "tools", level: "Primary", description: "Branching strategies, rebase, merge conflict resolution, hooks" },
  { name: "GitHub", category: "tools", level: "Primary", description: "Pull requests, code reviews, GitHub Actions, project boards" },
  { name: "VS Code", category: "tools", level: "Primary", description: "Configured debugging, ESLint, Prettier, TypeScript tooling" },
  { name: "Postman", category: "tools", level: "Primary", description: "Collection runners, environment variables, mock servers" },
  { name: "npm", category: "tools", level: "Primary", description: "Package resolution, scripts, dependency auditing, workspace setup" },
  { name: "Vite", category: "tools", level: "Primary", description: "Fast HMR, bundler plugins, production asset optimization" },
  { name: "Docker Fundamentals", category: "tools", level: "Familiarity", description: "Containerization, Dockerfiles, docker-compose for local dev" },
  { name: "Sentry", category: "tools", level: "Working Knowledge", description: "Error tracking, source maps, performance monitoring, release tracking" },
  { name: "Figma", category: "tools", level: "Working Knowledge", description: "Design handoff, auto-layout inspection, design token extraction" },
];
