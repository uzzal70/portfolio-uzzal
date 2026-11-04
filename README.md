# Premium Senior Full-Stack Developer Portfolio

An Awwwards-inspired, editorial-grade personal portfolio website built for a **Senior Frontend-Focused Full-Stack Developer** with 3–5 years of professional engineering experience.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Material UI v5**, **Framer Motion**, and **CSS Variables**.

---

## 💎 Project Positioning

> **"Frontend-focused Full-Stack Developer | React.js | Next.js | TypeScript | Node.js | NestJS"**

- **Frontend Excellence:** Advanced React 18 architecture, design tokens, strict TypeScript, responsive micro-interactions, and normalized Redux Toolkit state stores.
- **Full-Stack Pragmatism:** Production-informed practical backend knowledge in Node.js, NestJS, REST APIs, and PostgreSQL.
- **Enterprise Proven:** Deep domain focus on B2B travel management, OCR data extraction pipelines, and high-precision dynamic PDF generation.

---

## 🎨 Design System & Colors

Crafted with an editorial luxury aesthetic combining modern sans-serif readability, classic serif headings, and monospace metadata tags:

| Token | Light Theme (Default) | Dark Theme | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary** | `#292764` (Deep Indigo) | `#8580FF` | Brand core, strong accents |
| **Secondary** | `#B89555` (Muted Gold) | `#CBB075` | Editorial highlights, active pills |
| **Background** | `#FAF9F6` (Warm White) | `#0D0D14` | Global page backdrop |
| **Surface** | `#FFFFFF` (Pure White) | `#141420` | Cards, elevated sheets |
| **Text Primary** | `#202124` | `#F5F5F7` | Headings and high-contrast copy |
| **Text Secondary** | `#777777` | `#A2A2B8` | Body copy and secondary metrics |
| **Border** | `#EAE8E2` | `#232336` | Subtle dividers and outlines |

- **Instant Theme Toggle:** Synchronized between Material UI v5 and root CSS variables via `ThemeContext` and `data-theme` attribute.
- **Accessibility:** Full `prefers-reduced-motion` detection and WCAG AA contrast compliance.

---

## 🌌 Continuous Animation System ("Elegant Digital Atmosphere")

- **Floating Gradient Orbs:** Slow continuous ambient lighting shifts across Indigo and Gold hues.
- **Animated SVG Curves:** Vector paths with animated stroke-dash offsets providing gentle kinetic energy.
- **Gentle Particles & Noise:** Fine particles and an SVG fractal noise overlay giving depth and tactility.
- **Micro-Interactions:** Magnetic CTA buttons, scroll progress indicator, smooth active navigation tracking, and celebratory confetti upon contact submission.

---

## 📑 Complete Website Structure

1. **Section 01: Premium Navigation** — Sticky, transparent-to-frosted transition, monogram badge, active section indicator, resume download, and responsive drawer.
2. **Section 02: Hero Section** — "Building Digital Experiences That Feel Effortless.", live status badge, core stack tags, interactive terminal profile card, and animated scroll indicator.
3. **Section 03: Professional Introduction** — "Engineering with Purpose. Designing with Precision.", narrative paragraphs, working philosophy card, and quantitative highlights.
4. **Section 04: Technical Expertise** — Category tabs (Frontend, Backend, Database, Tools) visually distinguishing *Primary Expertise*, *Working Knowledge*, and *Familiarity* without deceptive percentage bars.
5. **Section 05: Featured Projects** — Editorial case studies including:
   - **TripFindy:** Enterprise B2B Multi-Brand Travel Platform
   - **Ticket Lagbe:** High-Throughput Agency Booking Engine
   - **Passport Scanner:** OCR & ICAO 9303 MRZ Checksum Parsing Prototype
   - **Flight Ticket PDF Generator:** Client-side dynamic vector boarding pass engine
   - **Trade License & Profile Management:** Regulatory compliance and document preview workflow
   - **Multi-Role Business Dashboard:** JWT-based RBAC administration console
   - *Plus dedicated `/projects/[slug]` case study detail routes.*
6. **Section 06: Engineering Strengths** — 6 maturity pillars (Frontend Architecture, UI/UX Implementation, State Management, API Integration, Backend Understanding, Problem Solving).
7. **Section 07: Professional Experience** — Vertical career timeline with progress rail, company records, and major contributions.
8. **Section 08: Development Workflow** — Interactive 9-phase execution pipeline (01 Requirements to 09 Deploy & Maintain).
9. **Section 09: Engineering Philosophy** — "Good Software Is More Than Working Code" creed cards.
10. **Section 10: Education & Continuous Learning** — B.Sc. in Computer Science & Engineering paired with active research in distributed systems, PostgreSQL internals, and React 19 compiler paradigms.
11. **Section 11: GitHub & Development Repositories** — Real repositories with languages, tags, and direct source links.
12. **Section 12: Contact Section** — Validated contact form with honeypot spam protection, server-side API handler (`/api/contact`), and direct email copy action.
13. **Section 13: Premium Footer** — Connected wave SVG, dynamic copyright year, quick navigation, and back-to-top control.

---

## 🛠️ Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   └── resume/
│       └── Uzzal_Hossain_Senior_Frontend_Developer_Resume.pdf
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── animation/
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── MotionWrapper.tsx
│   │   │   └── ScrollProgress.tsx
│   │   ├── common/
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── TechnologyBadge.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/
│   │   │   ├── BackToTop.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       ├── Education.tsx
│   │       ├── Experience.tsx
│   │       ├── GithubShowcase.tsx
│   │       ├── Hero.tsx
│   │       ├── Philosophy.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Strengths.tsx
│   │       └── Workflow.tsx
│   ├── data/
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── github.ts
│   │   ├── personal.ts
│   │   ├── philosophy.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── strengths.ts
│   │   └── workflow.ts
│   ├── theme/
│   │   ├── EmotionRegistry.tsx
│   │   ├── ThemeContext.tsx
│   │   └── theme.ts
│   └── types/
│       └── portfolio.ts
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 🔒 Contact Form API & Environment Setup

The contact endpoint (`POST /api/contact`) includes:
- Client-side and server-side schema verification.
- Honeypot bot protection.
- Prepared integration hooks for transactional email providers (SendGrid, Resend, AWS SES, or custom SMTP).
