import { ProjectCaseStudy } from "@/types/portfolio";

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "tripfindy-b2b-travel-platform",
    title: "TripFindy (B2B & B2C)",
    subtitle: "Enterprise Multi-Brand Global Travel Management Platform",
    category: "Travel Technology",
    status: "Production",
    featured: true,
    order: 1,
    previewImage: "/images/projects/tripfindy.png",
    overview:
      "A flagship multi-tenant travel platform engineered to streamline agency operations, white-label flight bookings, dynamic fare rules, and airline ticket issuance across global GDS inventories.",
    problemStatement:
      "Travel agencies managing corporate client bookings required a unified interface capable of searching consolidated airline GDS inventories, managing complex multi-leg itineraries, configuring agency-specific markups, and issuing tickets under distinct agency brandings without duplicate codebases.",
    technicalSolution:
      "Architected a scalable React.js frontend using Next.js App Router, Vite, Material UI v5, and Redux Toolkit. Engineered dynamic tenant theming with CSS variables, segment-level baggage allocation, and high-frequency flight search filters that process 800+ multi-leg itineraries in under 16ms.",
    technologies: [
      "React 18",
      "Next.js App Router",
      "TypeScript",
      "Redux Toolkit",
      "Material UI v5",
      "REST APIs",
      "CSS3 Variables",
    ],
    responsibilities: [
      "Lead frontend architecture for the multi-brand agency booking portal.",
      "Engineered flight search state normalization and high-frequency filter updates using Redux Toolkit.",
      "Built dynamic multi-tenant theming engine switching color palettes, logos, and commission rules with 0ms lag.",
      "Implemented responsive passenger detail forms with segment-level baggage selection and validation.",
      "Collaborated with backend engineers on REST API schemas for live airline seat availability, fare quotes, and ticket issuance.",
    ],
    keyFeatures: [
      {
        title: "Multi-Brand Tenant Architecture",
        description:
          "Tenant configuration engine driving theme palettes, white-label logos, and agency headers dynamically from API configurations.",
      },
      {
        title: "Flight Search & Booking Engine",
        description:
          "One-way, round-trip, and multi-city search engine with multi-criteria filtering (stops, airlines, departure times, refundability).",
      },
      {
        title: "Agent Ledger & Credit Dashboard",
        description:
          "Real-time financial overview, credit balance tracking, booking hold statuses, and ticket cancellation management.",
      },
      {
        title: "Passenger & Baggage Allocation",
        description:
          "Complex passenger data entry with per-segment baggage allowance inspection, infant/child age validation, and meal preferences.",
      },
      {
        title: "Vector PDF Ticket Generation",
        description:
          "Dynamic client-side generation of print-ready airline e-tickets and agent invoice documents with embedded barcodes.",
      },
    ],
    architectureDecisions: [
      "Separated domain API services from UI components using custom React hooks to isolate backend schema changes.",
      "Normalized Redux store structure for complex nested flight segment hierarchies to eliminate redundant re-renders.",
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
          "Handling large nested flight search JSON responses (often 800+ itineraries with multiple transit stops) causing UI lag on agency laptops.",
        solution:
          "Implemented windowed rendering for itinerary lists and memoized search filter predicates, dropping filter response latency from 350ms to under 16ms.",
      },
    ],
    liveDemoUrl: "https://tripfindy.com",
    githubUrl: undefined,
    accentColor: "#292764",
  },
  {
    slug: "ticket-lagbe-b2b-travel-portal",
    title: "Ticket Lagbe",
    subtitle: "High-Throughput Travel Agency B2B Booking Engine",
    category: "Travel Technology",
    status: "Production",
    featured: true,
    order: 2,
    previewImage: "/images/projects/ticketlagbe.png",
    overview:
      "A dedicated B2B travel portal designed for high-throughput sub-agent workflows, quick ticket reservations, wallet balance tracking, and single-click PNR lookups.",
    problemStatement:
      "Sub-agents and booking clerks needed an ultra-fast, high-density booking workflow to execute quick ticket reservations, calculate agent commissions, and manage deposit balances with minimal clicks.",
    technicalSolution:
      "Designed and delivered an optimized React.js frontend interface with Material UI v5, utilizing Redux Toolkit for atomic state updates and consistent UX guidelines across agency booking panels.",
    technologies: [
      "React.js",
      "Material UI v5",
      "Redux Toolkit",
      "REST APIs",
      "TypeScript",
      "Formik / Yup",
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
    slug: "visalagbe-regulatory-document-system",
    title: "Visa Lagbe",
    subtitle: "Automated Visa Facilitation & Regulatory Verification Engine",
    category: "Compliance & Legal",
    status: "Production",
    featured: true,
    order: 4,
    previewImage: "/images/projects/visalagbe.png",
    overview:
      "An automated visa processing platform streamlining visa application checklists, document uploads, embassy fee computation, and status tracking for international travelers.",
    problemStatement:
      "Visa processing across dozens of destination countries involved inconsistent document requirements, manual file validation, and frequent rejection due to incomplete paperwork.",
    technicalSolution:
      "Constructed a structured multi-step visa application pipeline with country-specific requirement checklists, client-side document file validation, image size optimization, and real-time application tracking.",
    technologies: [
      "React 18",
      "Next.js",
      "TypeScript",
      "Material UI v5",
      "Formik",
      "Yup",
      "Canvas API",
    ],
    responsibilities: [
      "Architected the dynamic step-by-step visa application wizard adapting to country and visa category.",
      "Engineered client-side image cropping and PDF compression ensuring uploaded files meet strict embassy size limits.",
      "Implemented live application progress tracker with SMS/email notification triggers.",
      "Designed compliance checklist verification UI for back-office visa processing officers.",
    ],
    keyFeatures: [
      {
        title: "Country Requirement Engine",
        description:
          "Dynamic checklist adapting required documents based on applicant nationality, destination country, and travel purpose.",
      },
      {
        title: "Client-Side Document Optimization",
        description:
          "Automatic rotation, cropping, and canvas compression to satisfy strict embassy file size budgets before upload.",
      },
      {
        title: "Real-Time Tracking Timeline",
        description:
          "Transparent milestone tracker showing application received, embassy submission, processing, and visa issuance.",
      },
      {
        title: "Fee & Surcharge Calculator",
        description:
          "Transparent breakdown of embassy visa fees, service charges, express processing surcharges, and courier fees.",
      },
    ],
    architectureDecisions: [
      "Used schema-driven form generation to dynamically render visa question sets based on destination embassy rules.",
      "Enforced client-side MIME-type and checksum validation to prevent corrupt file submissions.",
    ],
    challengesSolved: [
      {
        challenge:
          "Managing dozens of country-specific form fields and conditional document requirements without duplicating code.",
        solution:
          "Built a JSON-driven schema interpreter that maps country visa rules into modular Formik form fields dynamically.",
      },
    ],
    liveDemoUrl: "https://visalagbe.com",
    githubUrl: undefined,
    accentColor: "#3B82F6",
  },
  {
    slug: "aero-bangladesh-travel-platform",
    title: "Aero Bangladesh",
    subtitle: "Premium Corporate Aviation, Private Charters & Travel Web Portal",
    category: "Travel Technology",
    status: "Production",
    featured: true,
    order: 5,
    previewImage: "/images/projects/aero.png",
    overview:
      "A modern travel platform engineered for premium aviation services, corporate charters, international ticketing, and luxury travel management.",
    problemStatement:
      "High-net-worth corporate flight desks and charter clients required an editorial, trustworthy interface with direct flight inquiry handling, luxury charter quotes, and flight status tracking.",
    technicalSolution:
      "Designed and developed an editorial React web application with modern typography, smooth scroll interactions, responsive charter booking forms, and live status verification.",
    technologies: [
      "React 18",
      "Next.js",
      "TypeScript",
      "Material UI v5",
      "Framer Motion",
      "CSS Variables",
    ],
    responsibilities: [
      "Crafted luxury editorial visual presentation and responsive layout architecture.",
      "Implemented private charter quotation wizard with multi-city routing and passenger manifests.",
      "Optimized Core Web Vitals achieving 95+ PageSpeed scores on mobile and desktop.",
    ],
    keyFeatures: [
      {
        title: "Private Charter Quotation",
        description:
          "Interactive aircraft selection with passenger capacity, luggage volume, and route pricing estimation.",
      },
      {
        title: "Editorial Travel Presentation",
        description:
          "Refined typography and visual balance reflecting luxury aviation industry standards.",
      },
    ],
    architectureDecisions: [
      "Applied modern CSS Grid and CSS variables for a crisp, responsive layout without layout bleed.",
    ],
    challengesSolved: [
      {
        challenge: "Delivering rich visual imagery while maintaining fast load times across slower connections.",
        solution: "Implemented Next.js responsive image srcset optimization with blur-up placeholders and WebP delivery.",
      },
    ],
    liveDemoUrl: "https://aero.com.bd",
    githubUrl: undefined,
    accentColor: "#B89555",
  },
  {
    slug: "gotimail-enterprise-email-workspace",
    title: "GotiMail",
    subtitle: "Enterprise Email Workspace, Transactional API & Campaign Automation Platform",
    category: "Cloud Communications",
    status: "Production",
    featured: true,
    order: 6,
    previewImage: "/images/projects/gotimail.png",
    overview:
      "An all-in-one enterprise business email workspace developed for modern enterprises, providing custom domain business email hosting, developer transactional email APIs via Amazon SES relay, contact list hygiene scrubbers, and multi-channel shared support inboxes.",
    problemStatement:
      "Growing digital businesses and travel tech agencies struggled with fragmented communication tools—paying high per-seat subscriptions across separate marketing tools, developer SMTP relays, and support ticketing software with poor deliverability and complex DNS setup.",
    technicalSolution:
      "Architected a responsive React/Next.js single-page application dashboard integrated with Material UI v5. Implemented drag-and-drop template editors, automated DNS verification assistants (DKIM, SPF, DMARC), real-time deliverability analytics, and WebSocket-driven shared inbox interfaces.",
    technologies: [
      "React 18",
      "Next.js App Router",
      "TypeScript",
      "Redux Toolkit",
      "Material UI v5",
      "Amazon SES API",
      "WebSockets",
      "Chart.js",
    ],
    responsibilities: [
      "Lead frontend architecture for the campaign builder, domain verification wizard, and contact management views.",
      "Built dynamic DNS status checker giving users instant feedback on MX, SPF, DKIM, and DMARC record propagation.",
      "Engineered high-performance contact list table supporting virtualized scrolling on 100,000+ subscriber records.",
      "Integrated transactional email template preview with client-side syntax highlighting and responsive viewport switching (Desktop/Mobile).",
    ],
    keyFeatures: [
      {
        title: "Transactional Email API Console",
        description:
          "Developer playground for generating API keys, testing SMTP relays, and reviewing JSON delivery logs with status codes.",
      },
      {
        title: "Automated Domain DNS Wizard",
        description:
          "One-click DNS instruction generation with live propagation checks against authoritative nameservers.",
      },
      {
        title: "Multi-Channel Shared Inbox",
        description:
          "Unified inbox routing live chat, customer emails, WhatsApp, and Facebook messages to collaborative team queues.",
      },
      {
        title: "Campaign Analytics Dashboard",
        description:
          "Real-time telemetry tracking open rates, click-through rates, bounce rates, and unsubscribe statistics.",
      },
    ],
    architectureDecisions: [
      "Employed Web Workers for client-side CSV parsing to ensure zero UI freezing when uploading lists of 100k+ subscribers.",
      "Encapsulated SES REST calls behind an abstraction layer with client-side retry logic and rate limit exponential backoff.",
    ],
    challengesSolved: [
      {
        challenge:
          "Validating large imported CSV/Excel subscriber files in-browser without UI thread freezes or memory leaks.",
        solution:
          "Implemented chunked Web Worker streaming, validating email regex formats and deduplicating addresses in background threads.",
      },
    ],
    liveDemoUrl: "https://gotimail.com",
    githubUrl: undefined,
    accentColor: "#4169F5",
  },
  {
    slug: "gotisms-bulk-sms-cpaas-platform",
    title: "GotiSMS",
    subtitle: "Enterprise CPaaS Bulk SMS Gateway, Masking & OTP Delivery Infrastructure",
    category: "CPaaS & Messaging",
    status: "Production",
    featured: true,
    order: 7,
    previewImage: "/images/projects/gotisms.png",
    overview:
      "A high-throughput enterprise messaging platform and SMS gateway providing masking/non-masking campaigns, developer REST APIs, and instant OTP delivery across all major telecom operators in Bangladesh.",
    problemStatement:
      "Enterprises, travel portals, and e-commerce platforms needed an ultra-reliable SMS dispatch system capable of blasting 100,000+ promotional messages while guaranteeing sub-second delivery for critical authentication OTPs.",
    technicalSolution:
      "Designed and engineered an enterprise React.js dashboard with Material UI v5, featuring dynamic GSM character counter (English vs Unicode/Bengali), real-time delivery status reports (DLR), developer API token management, and instant bKash wallet balance top-ups.",
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI v5",
      "Redux Toolkit",
      "REST APIs",
      "bKash Payment Gateway",
      "Socket.io",
      "MUI Data Grid",
    ],
    responsibilities: [
      "Engineered the messaging composer with intelligent GSM-7 vs UCS-2 Unicode detection and automated multi-part SMS credit calculators.",
      "Built developer API playground with interactive cURL/Node.js/Python code snippet generators and IP allowlisting.",
      "Implemented high-density live delivery log stream with color-coded carrier statuses (Delivered, Undelivered, Queued, DND).",
      "Integrated bKash and local MFS checkout flows for instant automated wallet recharge and invoice downloads.",
    ],
    keyFeatures: [
      {
        title: "Carrier-Grade Masking SMS",
        description:
          "Support for approved government and enterprise alphanumeric sender IDs across GP, Robi, Banglalink, and Teletalk.",
      },
      {
        title: "Sub-Second OTP Routing",
        description:
          "Priority queue dispatch infrastructure ensuring two-factor authentication codes arrive within 3 seconds.",
      },
      {
        title: "Bulk Contact Grouping & Excel Upload",
        description:
          "Drag-and-drop subscriber file upload with dynamic merge tag interpolation (e.g. {name}, {order_id}).",
      },
      {
        title: "Real-Time Telemetry & DLR Logs",
        description:
          "Live message lifecycle status tracking with exportable Excel/CSV delivery audits.",
      },
    ],
    architectureDecisions: [
      "Constructed a high-concurrency client data grid capable of rendering thousands of real-time SMS delivery event rows with zero jank.",
    ],
    challengesSolved: [
      {
        challenge:
          "Accurately calculating billing credits when users mix English and Bengali Unicode characters in a single campaign.",
        solution:
          "Engineered an encoding analyzer evaluating byte length according to telecom GSM 03.38 standard and UCS-2 70-character thresholds.",
      },
    ],
    liveDemoUrl: "https://gotisms.com",
    githubUrl: undefined,
    accentColor: "#F59E0B",
  },
  {
    slug: "safety-gps-tracker-iot-telematics",
    title: "Safety GPS Tracker",
    subtitle: "Real-Time IoT Fleet Telematics & Vehicle Security Management Platform",
    category: "IoT & Telematics",
    status: "Production",
    featured: true,
    order: 8,
    previewImage: "/images/projects/safetygps.png",
    overview:
      "A full-featured IoT vehicle telematics and fleet intelligence platform providing live satellite tracking, remote engine immobilization, geofence monitoring, and trip history playback for private cars, logistics fleets, and commercial transports across Bangladesh.",
    problemStatement:
      "Fleet owners, transport managers, and car owners faced vehicle theft risks, unauthorized mileage usage, fuel pilferage, and lack of real-time visibility into vehicle positions.",
    technicalSolution:
      "Constructed an interactive React web application featuring Leaflet/Mapbox vector maps, high-frequency GPS coordinate streaming via WebSockets, remote IoT command relays (engine kill/restore), and animated route history replay.",
    technologies: [
      "React 18",
      "TypeScript",
      "Leaflet / Mapbox GL",
      "Material UI v5",
      "WebSockets",
      "IoT Protocols",
      "Recharts",
      "Date-fns",
    ],
    responsibilities: [
      "Architected the live map view with smooth vehicle marker rotations based on vehicle heading bearings.",
      "Implemented historical route timeline playback allowing users to fast-forward, pause, and inspect speed at every GPS waypoint.",
      "Built geofencing polygon drawing tool with client-side point-in-polygon containment checks and instant SMS/app alert triggers.",
      "Engineered fleet health diagnostics dashboard displaying battery voltage, ignition status, speed violation counters, and BRTA paper expiry warnings.",
    ],
    keyFeatures: [
      {
        title: "Real-Time Satellite Map Tracking",
        description:
          "Sub-5 second GPS position updates with vehicle ignition, speed, and fuel status indicators.",
      },
      {
        title: "Remote Engine Immobilization",
        description:
          "Single-click digital engine cutoff command disabling fuel pump relay in case of vehicle theft.",
      },
      {
        title: "Route Playback & Stoppage Analysis",
        description:
          "Interactive timeline scrubber replaying vehicle trips with color-coded speed gradients and parking stoppage duration.",
      },
      {
        title: "Geofence Breach Alerts",
        description:
          "Circular and polygonal custom boundaries triggering instantaneous SMS and email notifications upon entry/exit.",
      },
    ],
    architectureDecisions: [
      "Used canvas-based vector markers to render hundreds of concurrent moving vehicles on map view without DOM node explosion.",
    ],
    challengesSolved: [
      {
        challenge:
          "Interpolating vehicle movement smoothly between GPS coordinate pings so markers do not teleport erratically.",
        solution:
          "Created a client-side linear bezier interpolation algorithm computing intermediate frames synchronized with requestAnimationFrame.",
      },
    ],
    liveDemoUrl: "https://safetygpstracker.com.bd",
    githubUrl: undefined,
    accentColor: "#E11D48",
  },
  {
    slug: "auditnext-digital-compliance-platform",
    title: "AuditNext",
    subtitle: "Digital Compliance Management, ISO Certification & Corporate Audit Platform",
    category: "Compliance & Legal",
    status: "Production",
    featured: true,
    order: 9,
    previewImage: "/images/projects/auditnext.png",
    overview:
      "A digital regulatory compliance and corporate audit facilitation platform streamlining ISO certification workflows (ISO 9001, 14001, 27001), gap assessment checklists, statutory audit preparation, and corporate legal documentation.",
    problemStatement:
      "Enterprises seeking ISO certifications and tender audit clearances were plagued by manual paper binders, missed surveillance audit deadlines, and lack of transparency during compliance assessments.",
    technicalSolution:
      "Constructed a secure, role-based audit management web platform with interactive compliance scoring matrices, document vault with cryptographic checksums, audit milestone trackers, and printable compliance audit reports.",
    technologies: [
      "React 18",
      "Next.js",
      "TypeScript",
      "Material UI v5",
      "Formik",
      "Yup",
      "PDF Generation",
      "REST APIs",
    ],
    responsibilities: [
      "Developed dynamic audit checklist interface adapting questions to ISO standard clauses.",
      "Engineered client-side file upload and preview system for regulatory audit evidence files with format and size validations.",
      "Built audit timeline milestone dashboard providing corporate clients with transparent progress from initial gap assessment to final accreditation.",
      "Implemented automated surveillance audit reminder system with calendar sync and email notifications.",
    ],
    keyFeatures: [
      {
        title: "Clause-by-Clause Compliance Matrix",
        description:
          "Interactive checklist scoring enterprise readiness across standard ISO quality criteria.",
      },
      {
        title: "Evidence Document Vault",
        description:
          "Centralized repository organizing audit proof files with version history and reviewer comments.",
      },
      {
        title: "Audit Progress Milestone Tracker",
        description:
          "Stage-by-stage status tracker showing preliminary assessment, documentation review, and certification issuance.",
      },
      {
        title: "Automated Gap Analysis Generator",
        description:
          "Instant printable summary highlighting non-conformities and remediation recommendations.",
      },
    ],
    architectureDecisions: [
      "Enforced schema-driven audit questionnaires allowing compliance officers to introduce new standards without frontend code releases.",
    ],
    challengesSolved: [
      {
        challenge: "Handling complex hierarchical clause dependencies and scoring weights in audit questionnaires.",
        solution: "Built a tree-traversal calculation engine in TypeScript that computes overall compliance scores in real time.",
      },
    ],
    liveDemoUrl: "https://auditnext.com.bd",
    githubUrl: undefined,
    accentColor: "#059669",
  },
  {
    slug: "impressive-group-enterprise-portal",
    title: "Impressive Group",
    subtitle: "Multi-Sector Enterprise Technology Conglomerate & Digital Portfolio Portal",
    category: "Enterprise Portals",
    status: "Production",
    featured: true,
    order: 10,
    previewImage: "/images/projects/impressivebd.png",
    overview:
      "The flagship enterprise digital portal for Impressive Group, showcasing the conglomerate's multi-industry subsidiaries across Software Development, FinTech, IoT Fleet Telematics, CPaaS Bulk SMS, Corporate Security, and Travel Tech.",
    problemStatement:
      "A large enterprise conglomerate required a unified, high-performance corporate portal reflecting modern engineering standards, corporate prestige, and interactive discovery of its diverse subsidiary companies.",
    technicalSolution:
      "Engineered an editorial corporate web portal with Next.js, Material UI v5, Framer Motion transitions, interactive business unit showcases, and responsive multi-division contact routing.",
    technologies: [
      "Next.js App Router",
      "React 18",
      "TypeScript",
      "Material UI v5",
      "Framer Motion",
      "CSS3 Variables",
    ],
    responsibilities: [
      "Designed and implemented high-performance responsive web architecture achieving 95+ PageSpeed scores.",
      "Built interactive business vertical explorer allowing corporate partners to inspect subsidiary capabilities and tech stacks.",
      "Connected centralized enterprise inquiry form with department routing and anti-spam protection.",
    ],
    keyFeatures: [
      {
        title: "Corporate Division Showcase",
        description:
          "Interactive overview of software, telematics, aviation, and financial compliance subsidiaries.",
      },
      {
        title: "Executive Governance & News Hub",
        description:
          "Corporate media releases, press articles, and investor relations documents.",
      },
      {
        title: "Sub-Second Static Delivery",
        description:
          "Optimized Next.js server components and responsive image delivery across all device sizes.",
      },
    ],
    architectureDecisions: [
      "Utilized Next.js App Router static site generation (SSG) with incremental static regeneration for optimal SEO and instant page transitions.",
    ],
    challengesSolved: [
      {
        challenge: "Organizing deep hierarchical subsidiary information without confusing navigation menus.",
        solution: "Structured an intuitive tabbed navigation panel with visual breadcrumb tracking and sticky section anchors.",
      },
    ],
    liveDemoUrl: "https://www.impressivebd.com",
    githubUrl: undefined,
    accentColor: "#4F46E5",
  },
  {
    slug: "flightblu-corporate-travel-portal",
    title: "FlightBlu (B2B & B2C)",
    subtitle: "Corporate White-Label Airline Reservation Platform",
    category: "Travel Technology",
    status: "Production",
    featured: false,
    order: 11,
    previewImage: "/images/projects/flightblu.png",
    overview:
      "A white-label airline booking solution delivering branded passenger booking interfaces, corporate travel expense reporting, and live GDS integration.",
    problemStatement:
      "Corporate partners required custom-branded flight reservation portals with company-specific travel policies, approval workflows, and centralized invoicing.",
    technicalSolution:
      "Engineered a modular white-label React.js frontend architecture with dynamic branding injection, corporate policy enforcement, and consolidated corporate billing summaries.",
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI v5",
      "Redux Toolkit",
      "REST APIs",
    ],
    responsibilities: [
      "Built corporate flight search flow with policy compliance badges (e.g. 'Within Travel Policy').",
      "Implemented white-label theme engine applying corporate brand colors and logos dynamically.",
      "Connected corporate ledger billing with monthly consolidated invoice generation.",
    ],
    keyFeatures: [
      {
        title: "Corporate Policy Enforcement",
        description:
          "Visual badges indicating whether selected flights adhere to company expense rules and cabin class limits.",
      },
      {
        title: "Consolidated Billing Reports",
        description:
          "Aggregated monthly travel expenditure summaries with department-level cost center tagging.",
      },
    ],
    architectureDecisions: [
      "Normalized corporate employee profiles and saved passenger data in client cache for one-click passenger assignment.",
    ],
    challengesSolved: [
      {
        challenge: "Real-time travel policy validation across multiple flight options.",
        solution: "Implemented client-side policy evaluation rules that run synchronously upon flight selection.",
      },
    ],
    liveDemoUrl: "https://flightblu.com",
    githubUrl: undefined,
    accentColor: "#0284C7",
  },
  {
    slug: "simwindy-global-esim-store",
    title: "SimWindy eSIM",
    subtitle: "Global Travel eSIM Provisioning & Data Roaming Store",
    category: "Telecommunications",
    status: "Production",
    featured: false,
    order: 12,
    previewImage: "/images/projects/simwindy.png",
    overview:
      "A global digital marketplace providing international travelers with instant eSIM data packages across 150+ countries with digital QR code delivery.",
    problemStatement:
      "International travelers faced exorbitant roaming charges and physical SIM swapping hassles upon arrival at destination airports.",
    technicalSolution:
      "Developed a fast React e-commerce web application with country-based package filtering, real-time currency conversion, and instant QR code installation instructions upon checkout.",
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "REST APIs",
      "Stripe Integration",
      "QR Code Generation",
    ],
    responsibilities: [
      "Built interactive country search and multi-region data package comparison interface.",
      "Implemented client-side currency switcher updating package prices instantaneously.",
      "Engineered automated in-browser QR code rendering for instant eSIM activation profiles.",
    ],
    keyFeatures: [
      {
        title: "150+ Countries Coverage",
        description: "Instant country lookup with regional packages (Europe, Asia-Pacific, North America).",
      },
      {
        title: "Instant QR Profile Delivery",
        description: "Vector QR code generation allowing travelers to scan and install eSIMs directly from screen.",
      },
    ],
    architectureDecisions: [
      "Integrated lightweight client-side QR renderer avoiding heavy canvas image downloads.",
    ],
    challengesSolved: [
      {
        challenge: "Handling multi-currency pricing across dynamic international exchange rates.",
        solution: "Created a localized pricing store that recalculates tariffs smoothly without re-fetching packages.",
      },
    ],
    liveDemoUrl: "https://simwindy.netlify.app",
    githubUrl: undefined,
    accentColor: "#F59E0B",
  },

];
