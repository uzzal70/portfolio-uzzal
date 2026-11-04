import { ProjectCaseStudy } from "@/types/portfolio";

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "tripfindy-b2b-travel-platform",
    title: "TripFindy",
    subtitle: "Enterprise B2B Multi-Brand Travel Management Platform",
    category: "Enterprise Travel Technology",
    status: "Completed",
    featured: true,
    order: 1,
    overview:
      "A multi-brand B2B travel platform designed to streamline travel agent operations, booking workflows and travel-related services across global airline inventories.",
    problemStatement:
      "Travel agencies managing corporate client bookings required a single interface capable of searching consolidated airline GDS inventories, managing complex multi-leg itineraries, configuring branded markups, and issuing tickets under distinct agency identities without duplicate codebases.",
    technicalSolution:
      "Architected a scalable React.js frontend using Vite, Material UI v5, and Redux Toolkit. Built modular flight search filters, passenger segment mapping, dynamic baggage allowance calculations, and a tenant-based theming engine allowing multiple travel partner brands to operate off a unified core.",
    technologies: [
      "React.js",
      "Vite",
      "Material UI v5",
      "Redux Toolkit",
      "REST APIs",
      "JavaScript",
      "CSS3",
    ],
    responsibilities: [
      "Lead frontend architecture for the multi-brand client portal.",
      "Engineered flight search state management and high-frequency filter updates using Redux Toolkit.",
      "Implemented responsive passenger detail forms with segment-level baggage selection.",
      "Integrated secure REST APIs for live airline seat availability, fare quotes, and ticket issuance.",
      "Developed client-side PDF ticket and itinerary generation with dynamic agency branding.",
    ],
    keyFeatures: [
      {
        title: "Multi-Brand Architecture",
        description:
          "Tenant configuration engine driving theme palettes, white-label logos, and agency headers from dynamic API configurations.",
      },
      {
        title: "Flight Search & Booking Flow",
        description:
          "One-way, round-trip, and multi-city search engine with multi-criteria filtering (stops, airlines, departure times, refundability).",
      },
      {
        title: "Agent Management Dashboard",
        description:
          "Real-time ledger overview, credit balance tracking, booking hold statuses, and ticket cancellation management.",
      },
      {
        title: "Passenger & Baggage Allocation",
        description:
          "Complex passenger data entry with per-segment baggage allowance inspection, infant/child age validation, and meal preferences.",
      },
      {
        title: "PDF Ticket & Itinerary Generation",
        description:
          "Dynamic generation of print-ready airline e-tickets and agent invoice documents with embedded barcodes and agency contacts.",
      },
    ],
    architectureDecisions: [
      "Separated domain API services from UI components using custom React hooks to isolate backend schema changes.",
      "Normalized Redux store structure for complex nested flight segment hierarchies to avoid unnecessary component re-renders.",
      "Adopted Material UI v5 styled-system with CSS variables to enable instantaneous multi-brand theme switching.",
    ],
    challengesSolved: [
      {
        challenge:
          "Building reusable frontend architecture for multiple travel brands while maintaining separate branding, assets and configuration from a shared codebase.",
        solution:
          "Implemented a configuration injection pattern at root level that hydrates theme definitions, brand assets, and API endpoints during initial app bootstrapping.",
      },
      {
        challenge:
          "Handling large nested flight search JSON responses (often 300+ itineraries with multiple transit stops) causing UI lag on lower-spec agency laptops.",
        solution:
          "Implemented windowed rendering for itinerary lists and memoized search filter predicates, dropping filter response latency from 350ms to under 16ms.",
      },
    ],
    liveDemoUrl: "https://tripfindy.com",
    githubUrl: undefined, // Enterprise proprietary
    accentColor: "#292764",
  },
  {
    slug: "ticket-lagbe-b2b-travel-portal",
    title: "Ticket Lagbe",
    subtitle: "High-Throughput Travel Agency Booking Engine",
    category: "Enterprise Travel Technology",
    status: "Completed",
    featured: true,
    order: 2,
    overview:
      "A business-focused travel portal with an emphasis on travel agency workflows, reusable frontend components and consistent enterprise user experience.",
    problemStatement:
      "Sub-agents and independent booking clerks needed a fast, high-density booking workflow to execute quick ticket reservations, manage deposit balances, and reissue tickets with minimal clicks.",
    technicalSolution:
      "Designed and delivered an optimized React.js frontend interface with Material UI v5, utilizing Redux Toolkit for atomic state updates and consistent UX guidelines across agency booking panels.",
    technologies: [
      "React.js",
      "Material UI v5",
      "Redux Toolkit",
      "REST API",
      "JavaScript",
    ],
    responsibilities: [
      "Designed reusable UI component library tailored for high-density tabular enterprise data.",
      "Built flight booking flow with instant fare breakdown, agent commission computation, and payment reconciliation.",
      "Collaborated with backend engineers to streamline REST API payload schemas for travel services.",
      "Engineered multi-brand configuration layers allowing rapid whitelabel deployments.",
    ],
    keyFeatures: [
      {
        title: "Agent-Oriented Workflows",
        description:
          "Keyboard-friendly input flows, bulk passenger data pasting, and single-click PNR retrieval.",
      },
      {
        title: "Flight Booking & Fare Rules",
        description:
          "Interactive breakdown of base fare, taxes, fuel surcharges, agency commissions, and refund policy penalties.",
      },
      {
        title: "Deposit & Wallet Management",
        description:
          "Agent credit balance warnings, instant bank slip upload, and ledger statement exports.",
      },
      {
        title: "Reusable Design Tokens",
        description:
          "Standardized design system ensuring consistent spacing, contrast ratios, and iconography across all travel modules.",
      },
    ],
    architectureDecisions: [
      "Strict separation of shared travel platform utilities from agency-specific UI wrappers.",
      "Centralized API error handler intercepting session expirations, rate limits, and GDS downtime with user-friendly retry states.",
    ],
    challengesSolved: [
      {
        challenge:
          "Ensuring consistent UX between shared core travel services and custom portal variations.",
        solution:
          "Structured an atomic component architecture with clear separation between container controllers and presentational cards.",
      },
    ],
    liveDemoUrl: "https://ticketlagbe.com",
    githubUrl: undefined,
    accentColor: "#B89555",
  },
  {
    slug: "passport-scanner-ocr-data-extraction",
    title: "Passport Scanner & MRZ Parser",
    subtitle: "OCR-Assisted Passenger Information Extraction Interface",
    category: "Document Automation",
    status: "Prototype",
    featured: true,
    order: 3,
    overview:
      "An OCR-assisted passport information extraction interface designed to reduce manual passenger data entry errors and accelerate agency booking speeds.",
    problemStatement:
      "Manual entry of international passenger passport numbers, expiry dates, nationalities, and names takes up to 4 minutes per passenger and leads to costly typo penalties when issuing airline tickets.",
    technicalSolution:
      "Developed an interactive client-side OCR tool combining Tesseract.js with specialized image canvas preprocessing (grayscale, contrast thresholding, rotation) and an ICAO Doc 9303 MRZ checksum parsing algorithm.",
    technologies: [
      "React.js",
      "Tesseract.js",
      "JavaScript",
      "Canvas Image Processing",
      "MRZ Parsing",
    ],
    responsibilities: [
      "Built the full client-side image upload, cropping, and preprocessing pipeline.",
      "Integrated Tesseract.js worker threads to prevent blocking the main browser UI during OCR parsing.",
      "Implemented regex-based Machine Readable Zone (MRZ) parser with check digit calculation.",
      "Constructed a dual-pane verification UI allowing travel agents to review and manually correct extracted values side-by-side with the uploaded passport image.",
    ],
    keyFeatures: [
      {
        title: "Passport Image Ingestion",
        description:
          "Drag-and-drop file upload with client-side image orientation correction, bounding box crop, and brightness adjustments.",
      },
      {
        title: "Tesseract OCR & Worker Pool",
        description:
          "Web Worker-driven OCR execution preventing UI freezes during heavy image text analysis.",
      },
      {
        title: "MRZ Line Extraction & Checksum",
        description:
          "Detects 2-line Type 3 machine-readable zones; computes check digits for document number, birthdate, and expiration date.",
      },
      {
        title: "Form Auto-Population & Side-by-Side Review",
        description:
          "Instantly populates booking form fields with visual confidence markers and field correction controls.",
      },
    ],
    architectureDecisions: [
      "Processed image files entirely in-browser using HTML5 Canvas API and Web Workers to protect passenger PII data from unnecessary cloud transit.",
      "Engineered fallback manual editing mode where any unconfident OCR character is flagged with amber highlight for clerk confirmation.",
    ],
    challengesSolved: [
      {
        challenge:
          "Improving recognition accuracy and handling inconsistent OCR output, especially glare on glossy passport laminates and MRZ character variations (e.g., confusing O with 0, or I with 1).",
        solution:
          "Applied adaptive thresholding preprocessing on the bottom 25% of the passport image where MRZ resides, coupled with ICAO 9303 checksum validation to automatically correct numeric vs alpha character ambiguities.",
      },
    ],
    liveDemoUrl: undefined,
    githubUrl: "https://github.com/uzzaldev/passport-ocr-scanner-prototype",
    accentColor: "#2A4365",
  },
  {
    slug: "flight-ticket-pdf-generator",
    title: "Flight Ticket PDF Generator",
    subtitle: "Enterprise Dynamic Document Generation Engine",
    category: "Document Generation",
    status: "Completed",
    featured: true,
    order: 4,
    overview:
      "A high-precision PDF document generation system creating branded, airline-compliant passenger tickets and booking vouchers directly from React component trees.",
    problemStatement:
      "Traditional server-side headless browser PDF generation was resource-intensive, slow, and prone to formatting shifts across different agent print drivers.",
    technicalSolution:
      "Leveraged React.js with @react-pdf/renderer to compile structured flight booking JSON directly into vector-accurate, print-ready PDF documents client-side, with dynamic watermarking and multi-brand theming.",
    technologies: [
      "React.js",
      "@react-pdf/renderer",
      "JavaScript",
      "Vector Graphics",
      "PDF Specification",
    ],
    responsibilities: [
      "Engineered responsive print layouts adhering to airline boarding pass and travel voucher standards.",
      "Implemented dynamic page breaking for multi-passenger, multi-segment journeys.",
      "Configured conditional watermarks for 'CONFIRMED', 'VOID', 'TICKET ISSUED', and 'CANCELLED' statuses.",
      "Integrated baggage allowance tables, terminal info, and dynamic airline carrier logos.",
    ],
    keyFeatures: [
      {
        title: "Pixel-Perfect Vector Output",
        description:
          "Crisp typography, airline logos, and barcode rendering that remains vector-sharp at any printer DPI.",
      },
      {
        title: "Multi-Segment Journey Layouts",
        description:
          "Dynamic expansion for layover stops, terminal transfers, baggage collection rules, and codeshare notices.",
      },
      {
        title: "Conditional Status Watermarking",
        description:
          "Security watermarks and booking reference badges that dynamically reflect the real-time ticket status.",
      },
      {
        title: "Instant In-Browser Preview",
        description:
          "Live interactive preview modal with zoom, download, and direct print invocation.",
      },
    ],
    architectureDecisions: [
      "Decoupled document template data mapping from the rendering layer, making it trivial to add new agency header templates.",
      "Utilized lazy loading for the PDF rendering engine to avoid bundling heavy PDF fonts on non-print views.",
    ],
    challengesSolved: [
      {
        challenge:
          "Preventing unwanted layout orphan breaks across multi-page flight itineraries when a passenger list exceeded 4 travelers.",
        solution:
          "Implemented strict page-break-inside avoid containers and computed dynamic segment height budgets before rendering.",
      },
    ],
    liveDemoUrl: undefined,
    githubUrl: undefined,
    accentColor: "#1B3A4B",
  },
  {
    slug: "trade-license-agent-profile-management",
    title: "Trade License & Profile Management",
    subtitle: "Agent Verification & Regulatory Document Workflow",
    category: "Business Application",
    status: "Completed",
    featured: false,
    order: 5,
    overview:
      "A business-critical compliance module enabling travel agency onboarding, regulatory trade license verification, and agent profile lifecycle management.",
    problemStatement:
      "B2B platforms require stringent verification of travel agency trade licenses and bank certificates before granting ticketing credit, which previously suffered from fragmented email exchanges.",
    technicalSolution:
      "Engineered an integrated profile and document management dashboard in React.js and Material UI v5, providing real-time document preview, status tracking, and compliance remarks.",
    technologies: [
      "React.js",
      "Material UI v5",
      "REST API",
      "JavaScript",
      "Formik",
      "Yup",
    ],
    responsibilities: [
      "Developed secure file upload components with drag-and-drop, format validation, and file size checks.",
      "Built synchronous document viewer modal supporting PDF and image previews.",
      "Created compliance remarks audit trail enabling back-office officers to request document re-uploads.",
      "Integrated agent profile REST APIs with optimistic UI updates.",
    ],
    keyFeatures: [
      {
        title: "Document Ingestion & Preview",
        description:
          "Supports PDF, PNG, and JPG uploads with client-side thumbnail generation and full-screen preview lightbox.",
      },
      {
        title: "Verification Workflow Status",
        description:
          "Clear visual progress badges: 'Under Review', 'Verified', 'Action Required', and 'Expired'.",
      },
      {
        title: "Interactive Remarks & Revision Notes",
        description:
          "Two-way communication thread between agency applicants and compliance reviewers.",
      },
      {
        title: "Agency Profile Aggregation",
        description:
          "Single view consolidating business registration numbers, tax identifiers, authorized signatories, and bank guarantee accounts.",
      },
    ],
    architectureDecisions: [
      "Chunked upload handler with progress indication for reliable submission over mobile connections.",
      "Robust client-side validation using Formik and Yup schema for tax identification formatting.",
    ],
    challengesSolved: [
      {
        challenge:
          "Allowing agencies to review multi-page PDF trade licenses without downloading the files locally.",
        solution:
          "Integrated an embedded iframe/canvas stream viewer with rotate and zoom controls directly within the Material UI modal.",
      },
    ],
    liveDemoUrl: undefined,
    githubUrl: undefined,
    accentColor: "#3D405B",
  },
  {
    slug: "multi-role-business-dashboard",
    title: "Multi-Role Business Dashboard",
    subtitle: "Role-Based Enterprise Administration Platform",
    category: "Enterprise Dashboard",
    status: "Completed",
    featured: false,
    order: 6,
    overview:
      "A comprehensive enterprise back-office management console featuring granular role-based access control (RBAC), analytical data tables, and transactional reporting.",
    problemStatement:
      "System administrators, account managers, and customer support agents required tailored visibility into system transactions, booking queues, and user permissions without exposing sensitive administrative controls.",
    technicalSolution:
      "Constructed a modular dashboard architecture with dynamic navigation rendering based on JWT user roles (Super Admin, Account Manager, Ticketing Agent, Auditor). Added high-performance data tables with server-side pagination, multi-column sorting, and comprehensive filter presets.",
    technologies: [
      "React.js",
      "Material UI v5",
      "Redux Toolkit",
      "REST API",
      "JavaScript",
      "JWT RBAC",
    ],
    responsibilities: [
      "Architected route guards and permission-based UI component wrappers.",
      "Developed high-volume transactional data tables with debounced search, custom filters, and CSV exports.",
      "Built dynamic form builders for role assignment and staff access privileges.",
      "Implemented comprehensive error logging and user session monitors.",
    ],
    keyFeatures: [
      {
        title: "Role-Based Navigation & View Guards",
        description:
          "Navigation tree dynamically filters modules according to user capabilities decoded from cryptographically verified tokens.",
      },
      {
        title: "Analytical Data Tables",
        description:
          "Custom Material UI tables supporting server-side sorting, complex date range filters, column visibility toggles, and status chips.",
      },
      {
        title: "Transaction & Booking Queue Management",
        description:
          "Real-time ticket issue queues with urgency indicators and one-click agent assignment.",
      },
      {
        title: "Audit Logging & Activity Trails",
        description:
          "Chronological history of status transitions, credit adjustments, and user profile edits.",
      },
    ],
    architectureDecisions: [
      "Implemented higher-order component (HOC) and custom hook `usePermission` for fine-grained button and menu level permission checks.",
      "URL query-state synchronization for table filters, enabling shareable dashboard views between operations team members.",
    ],
    challengesSolved: [
      {
        challenge:
          "Preventing unauthorized UI flashing before permission verification completes during page refresh.",
        solution:
          "Engineered an authentication gateway state machine that holds navigation rendering until user claims are validated.",
      },
    ],
    liveDemoUrl: undefined,
    githubUrl: undefined,
    accentColor: "#2F3E46",
  },
];
