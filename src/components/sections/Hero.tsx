"use client";

import React, { useCallback, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, useReducedMotion, type PanInfo } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Plane,
  Layers,
  MessageSquareText,
  Satellite,
  Blocks,
  type LucideIcon,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import ResumeModal from "../common/ResumeModal";
import { SkiperCopyButton } from "../animation/SkiperIcons";

/* ------------------------------------------------------------------ */
/*  Content (from the CV). Edit this array to change the tickets.      */
/* ------------------------------------------------------------------ */

type WorkLink = { label: string; href: string };

type Work = {
  id: string;
  tab: string;
  icon: LucideIcon;
  accent: string;
  accentLight: string;
  kind: string;
  title: string;
  summary: string;
  metric: { value: string; label: string };
  stack: string[];
  links: WorkLink[];
};

const works: Work[] = [
  {
    id: "gds",
    tab: "Travel GDS",
    icon: Plane,
    accent: "#22B8CF",
    accentLight: "#0E8FA3",
    kind: "B2B and B2C",
    title: "Flight booking on GDS and NDC",
    summary:
      "Search, fares, ticketing and agent dashboards behind Tripfindy, Ticketlagbe and FlyFar.",
    metric: { value: "<16ms", label: "to filter 800+ itineraries" },
    stack: ["Next.js", "Redux Toolkit", "TypeScript"],
    links: [
      { label: "Tripfindy", href: "https://tripfindy.com" },
      { label: "Ticketlagbe", href: "https://ticketlagbe.com" },
      { label: "B2B Tripfindy", href: "https://b2btripfindy.com" },
    ],
  },
  {
    id: "white-label",
    tab: "White label",
    icon: Layers,
    accent: "#E5B94E",
    accentLight: "#9A7414",
    kind: "Multi-tenant",
    title: "One booking engine, every agency's brand",
    summary:
      "FlightBlu and B2B FlightBlu switch colors, logos and layout at runtime with injected CSS variables.",
    metric: { value: "1 build", label: "serves every tenant" },
    stack: ["Next.js", "MUI", "CSS variables"],
    links: [{ label: "B2B FlightBlu", href: "https://b2b.flightblu.com" }],
  },
  {
    id: "messaging",
    tab: "SMS and mail",
    icon: MessageSquareText,
    accent: "#34D399",
    accentLight: "#15803D",
    kind: "Full-stack",
    title: "Bulk SMS and email, front to back",
    summary:
      "GotiSMS and GotiMail: campaign builders, delivery reports and balances, with the API and database by the same developer.",
    metric: { value: "100k+", label: "messages per hour" },
    stack: ["React", "NestJS", "PostgreSQL"],
    links: [
      { label: "GotiSMS", href: "https://gotisms.com" },
      { label: "GotiMail", href: "https://gotimail.com" },
    ],
  },
  {
    id: "gps",
    tab: "Live tracking",
    icon: Satellite,
    accent: "#A78BFA",
    accentLight: "#6D4FD6",
    kind: "Real-time",
    title: "Vehicle tracking that moves as you watch",
    summary:
      "Safety GPS Tracker streams positions over WebSockets to a live map with trip history and alerts.",
    metric: { value: "<5s", label: "satellite fix to screen" },
    stack: ["React", "WebSockets", "Node.js"],
    links: [
      { label: "Safety GPS Tracker", href: "https://safetygpstracker.com.bd" },
    ],
  },
  {
    id: "more",
    tab: "More builds",
    icon: Blocks,
    accent: "#F472B6",
    accentLight: "#BE2F7F",
    kind: "Full-stack",
    title: "Business sites and internal tools",
    summary:
      "Aero, AuditNext and Impressive BD, each designed, built and deployed end to end.",
    metric: { value: "15+", label: "production apps shipped" },
    stack: ["Next.js", "Node.js", "MongoDB"],
    links: [
      { label: "Aero", href: "https://aero.com.bd" },
      { label: "AuditNext", href: "https://auditnext.com.bd" },
      { label: "Impressive BD", href: "https://impressivebd.com" },
    ],
  },
];

const headlineLines = [
  "Interfaces for",
  "flights, messages",
  "and moving",
  "vehicles.",
];

const facts = [
  { value: "5+", label: "years of React and Next.js" },
  { value: "15+", label: "apps in production" },
  { value: "Full-stack", label: "Node, NestJS, PostgreSQL" },
];

const AUTOPLAY_MS = 6500;
const STUB = 150; // width of the ticket stub on wider screens (px)
const STUB_XS = 96; // height of the ticket stub on phones (px)
const NOTCH = 10;
const ease = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/*  Ticket                                                             */
/* ------------------------------------------------------------------ */

type Tokens = {
  ticket: string;
  edge: string;
  ink: string;
  sub: string;
  chip: string;
};

function Ticket({
  work,
  accent,
  tok,
  interactive,
}: {
  work: Work;
  accent: string;
  tok: Tokens;
  interactive: boolean;
}) {
  const Icon = work.icon;

  const maskXs = `radial-gradient(circle ${NOTCH}px at 0 calc(100% - ${STUB_XS}px), #0000 98%, #000), radial-gradient(circle ${NOTCH}px at 100% calc(100% - ${STUB_XS}px), #0000 98%, #000)`;
  const maskSm = `radial-gradient(circle ${NOTCH}px at calc(100% - ${STUB}px) 0, #0000 98%, #000), radial-gradient(circle ${NOTCH}px at calc(100% - ${STUB}px) 100%, #0000 98%, #000)`;

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 470, sm: 310 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        borderRadius: "18px",
        backgroundColor: tok.ticket,
        border: "1px solid",
        borderColor: tok.edge,
        color: tok.ink,
        overflow: "hidden",
        WebkitMaskImage: { xs: maskXs, sm: maskSm },
        maskImage: { xs: maskXs, sm: maskSm },
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      }}
    >
      {/* accent strip */}
      <Box
        aria-hidden
        sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, backgroundColor: accent }}
      />

      {/* Main section */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          px: { xs: 2.2, sm: 2.8 },
          pt: 3,
          pb: 2.2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.6 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "10px",
              display: "grid",
              placeItems: "center",
              color: accent,
              backgroundColor: `${accent}22`,
            }}
          >
            <Icon size={18} />
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: "0.86rem" }}>
            {work.tab}
          </Typography>
          <Typography
            sx={{
              ml: "auto",
              fontSize: "0.76rem",
              fontWeight: 600,
              color: tok.sub,
            }}
          >
            {work.kind}
          </Typography>
        </Box>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.3rem", sm: "1.4rem" },
            fontWeight: 800,
            lineHeight: 1.18,
            letterSpacing: "-0.02em",
            mb: 0.9,
          }}
        >
          {work.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.84rem",
            lineHeight: 1.55,
            color: tok.sub,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 1.6,
          }}
        >
          {work.summary}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: "auto" }}>
          {work.stack.map((s) => (
            <Box
              key={s}
              sx={{
                px: 1,
                py: 0.3,
                borderRadius: "6px",
                fontSize: "0.74rem",
                fontWeight: 600,
                backgroundColor: tok.chip,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, pt: 1.4 }}>
          {work.links.map((l) => (
            <Box
              key={l.href}
              component="a"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              tabIndex={interactive ? 0 : -1}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.4,
                px: 1.2,
                py: 0.45,
                borderRadius: "999px",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: accent,
                textDecoration: "none",
                border: "1px solid",
                borderColor: `${accent}77`,
                transition: "background-color .2s ease",
                "&:hover": { backgroundColor: `${accent}22` },
                "&:focus-visible": { outline: `2px solid ${accent}`, outlineOffset: 2 },
              }}
            >
              {l.label}
              <ArrowUpRight size={13} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Stub */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", sm: STUB },
          height: { xs: STUB_XS, sm: "auto" },
          borderTop: { xs: "2px dashed", sm: "none" },
          borderLeft: { xs: "none", sm: "2px dashed" },
          borderColor: tok.edge,
          px: { xs: 2.2, sm: 2 },
          py: { xs: 1.4, sm: 2.6 },
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "space-between",
          gap: 1.5,
        }}
      >
        <Box sx={{ pt: { sm: 1.5 } }}>
          <Typography
            sx={{
              fontSize: { xs: "1.7rem", sm: "2.1rem" },
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: accent,
            }}
          >
            {work.metric.value}
          </Typography>
          <Typography sx={{ fontSize: "0.74rem", color: tok.sub, mt: 0.6, maxWidth: "16ch", lineHeight: 1.35 }}>
            {work.metric.label}
          </Typography>
        </Box>

        {/* barcode */}
        <Box
          aria-hidden
          sx={{
            width: { xs: 96, sm: "100%" },
            height: 26,
            opacity: 0.55,
            background: `repeating-linear-gradient(90deg, ${tok.ink} 0 2px, transparent 2px 4px, ${tok.ink} 4px 5px, transparent 5px 8px, ${tok.ink} 8px 11px, transparent 11px 13px)`,
          }}
        />
      </Box>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";
  const reduce = useReducedMotion();

  const [resumeOpen, setResumeOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const n = works.length;
  const active = works[index];
  const accent = isDark ? active.accent : active.accentLight;

  const step = useCallback((d: number) => setIndex((c) => (c + d + n) % n), [n]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) step(1);
    else if (info.offset.x > 60) step(-1);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const tok: Tokens = isDark
    ? {
      ticket: "#121C38",
      edge: "rgba(255,255,255,0.12)",
      ink: "#E8EEFB",
      sub: "rgba(232,238,251,0.66)",
      chip: "rgba(255,255,255,0.07)",
    }
    : {
      ticket: "#FFFFFF",
      edge: "rgba(15,23,42,0.12)",
      ink: "#0F172A",
      sub: "rgba(15,23,42,0.64)",
      chip: "rgba(15,23,42,0.06)",
    };

  const hairline = isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)";

  return (
    <>
      <Box
        id="hero"
        component="section"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: { xs: 12, sm: 14, md: 15 },
          pb: { xs: 8, md: 10 },
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Flight path: the one ambient moment. A plane crosses once on load. */}
        <Box
          component="svg"
          aria-hidden
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <path
            id="hero-arc"
            d="M-60 800 C 280 680, 480 140, 880 190 S 1290 380, 1520 120"
            fill="none"
            stroke={isDark ? "#7DD3E8" : "#1B2A6B"}
            strokeOpacity={isDark ? 0.35 : 0.22}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 11"
          />
          {!reduce && (
            <g fill={isDark ? "#E8EEFB" : "#1B2A6B"}>
              <path d="M16 0 L-10 -9 L-5 0 L-10 9 Z" />
              <animateMotion
                dur="11s"
                begin="1s"
                repeatCount="1"
                fill="freeze"
                rotate="auto"
              >
                <mpath href="#hero-arc" />
              </animateMotion>
            </g>
          )}
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.02fr 0.98fr" },
              gap: { xs: 6, lg: 7 },
              alignItems: "center",
            }}
          >
            {/* ------------------------- Left ------------------------- */}
            <Box sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.5,
                  py: 0.5,
                  mb: 3,
                  borderRadius: "999px",
                  border: "1px solid",
                  borderColor: hairline,
                  backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.75)",
                }}
              >
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#22C55E" }} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.78rem" }}>
                  Open to senior frontend and architecture roles
                </Typography>
              </Box>

              <Typography
                component="h1"
                aria-label={headlineLines.join(" ")}
                sx={{
                  fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3.8rem", lg: "3.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  mb: 2.6,
                }}
              >
                {headlineLines.map((line, i) => (
                  <Box key={line} aria-hidden sx={{ overflow: "hidden", pb: "0.1em" }}>
                    <motion.span
                      style={{ display: "block" }}
                      initial={{ y: reduce ? 0 : "108%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.1 + i * 0.12, ease }}
                    >
                      {line}
                    </motion.span>
                  </Box>
                ))}
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.06rem" },
                  lineHeight: 1.65,
                  maxWidth: "52ch",
                  mb: 3.5,
                }}
              >
                I&apos;m Md. Uzzal Hossain, a Software Engineer at Tripfindy. I build
                booking, messaging and tracking products in React and Next.js, and I
                write the Node.js, NestJS and PostgreSQL behind them.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1.6, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollTo("projects")}
                  endIcon={<ArrowRight size={16} />}
                  sx={{ px: 3.2, py: 1.25, fontSize: "0.92rem", fontWeight: 700 }}
                >
                  See all projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => setResumeOpen(true)}
                  startIcon={<FileText size={16} />}
                  sx={{
                    px: 2.8,
                    py: 1.25,
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    borderColor: isDark ? "rgba(255,255,255,0.22)" : "divider",
                  }}
                >
                  Download CV
                </Button>
                <SkiperCopyButton
                  textToCopy={personalData.email}
                  label="Copy email"
                  copiedLabel="Email copied"
                />
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: { xs: 3, sm: 0 } }}>
                {facts.map((f, i) => (
                  <Box
                    key={f.label}
                    sx={{
                      pr: { sm: 3.5 },
                      pl: { sm: i === 0 ? 0 : 3.5 },
                      borderLeft: { sm: i === 0 ? "none" : "1px solid" },
                      borderColor: hairline,
                    }}
                  >
                    <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", lineHeight: 1.1 }}>
                      {f.value}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.78rem", mt: 0.3 }}>
                      {f.label}
                    </Typography>
                  </Box>
                ))}

                <Box sx={{ display: "flex", gap: 1, ml: { sm: "auto" } }}>
                  {[
                    { t: "GitHub", href: personalData.github, I: Github },
                    { t: "LinkedIn", href: personalData.linkedin, I: Linkedin },
                    { t: "Email", href: `mailto:${personalData.email}`, I: Mail },
                  ].map(({ t, href, I }) => (
                    <Tooltip key={t} title={t}>
                      <IconButton
                        component="a"
                        href={href}
                        target={t === "Email" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={t}
                        size="small"
                        sx={{
                          color: "text.secondary",
                          border: "1px solid",
                          borderColor: "divider",
                          "&:hover": { color: "text.primary", borderColor: accent },
                        }}
                      >
                        <I size={15} />
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* ------------------------- Right ------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.35, ease }}
              style={{ minWidth: 0 }}
            >
              <Box
                role="region"
                aria-roledescription="carousel"
                aria-label="Selected work"
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                sx={{
                  outline: "none",
                  borderRadius: "20px",
                  "&:focus-visible": { boxShadow: `0 0 0 3px ${accent}88` },
                }}
              >
                {/* header */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography aria-live="polite" sx={{ fontWeight: 700, fontSize: "0.9rem" }}>
                    Selected work
                    <Box component="span" sx={{ color: "text.secondary", fontWeight: 500, ml: 1 }}>
                      {index + 1} of {n}
                    </Box>
                  </Typography>
                  <Box sx={{ display: "flex", gap: 0.8 }}>
                    {[-1, 1].map((d) => (
                      <IconButton
                        key={d}
                        size="small"
                        onClick={() => step(d)}
                        aria-label={d === -1 ? "Previous project" : "Next project"}
                        sx={{
                          width: 32,
                          height: 32,
                          border: "1px solid",
                          borderColor: hairline,
                          color: "text.secondary",
                          "&:hover": { color: accent, borderColor: accent },
                        }}
                      >
                        {d === -1 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                {/* ticket stack */}
                <Box sx={{ position: "relative", height: { xs: 506, sm: 346 } }}>
                  {works.map((w, i) => {
                    const offset = (i - index + n) % n;
                    const leaving = offset === n - 1;
                    const front = offset === 0;
                    const a = isDark ? w.accent : w.accentLight;

                    const pose = leaving
                      ? { x: -80, y: 0, scale: 0.97, rotate: reduce ? 0 : -5, opacity: 0 }
                      : offset <= 2
                        ? {
                          x: 0,
                          y: offset * 18,
                          scale: 1 - offset * 0.05,
                          rotate: 0,
                          opacity: 1 - offset * 0.2,
                        }
                        : { x: 0, y: 36, scale: 0.9, rotate: 0, opacity: 0 };

                    return (
                      <motion.div
                        key={w.id}
                        animate={pose}
                        transition={{ duration: reduce ? 0 : 0.6, ease }}
                        drag={front ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        dragSnapToOrigin
                        onDragEnd={onDragEnd}
                        onClick={() => !front && offset <= 2 && setIndex(i)}
                        role={front ? undefined : "button"}
                        aria-label={front ? undefined : `Show ${w.tab}`}
                        aria-hidden={offset > 2 || leaving}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          zIndex: n - offset,
                          transformOrigin: "50% 100%",
                          touchAction: "pan-y",
                          cursor: front ? "grab" : offset <= 2 ? "pointer" : "default",
                          pointerEvents: offset <= 2 ? "auto" : "none",
                          filter: isDark
                            ? "drop-shadow(0 22px 28px rgba(0,0,0,0.45))"
                            : "drop-shadow(0 18px 24px rgba(15,23,42,0.16))",
                        }}
                      >
                        <Ticket work={w} accent={a} tok={tok} interactive={front} />
                      </motion.div>
                    );
                  })}
                </Box>

                {/* progress rail */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${n}, 1fr)`,
                    gap: 0.9,
                    mt: 1.2,
                  }}
                >
                  {works.map((w, i) => {
                    const isActive = i === index;
                    const done = i < index;
                    const c = isDark ? w.accent : w.accentLight;
                    return (
                      <Box
                        key={w.id}
                        component="button"
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Show ${w.tab}`}
                        aria-current={isActive}
                        sx={{
                          all: "unset",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.8,
                          minWidth: 0,
                          py: 0.5,
                          "&:focus-visible .rail": { outline: `2px solid ${c}`, outlineOffset: 3 },
                        }}
                      >
                        <Box
                          className="rail"
                          sx={{
                            position: "relative",
                            height: 3,
                            borderRadius: 2,
                            overflow: "hidden",
                            backgroundColor: isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)",
                          }}
                        >
                          <Box
                            key={isActive ? `run-${index}` : `idle-${i}`}
                            onAnimationEnd={() => isActive && !reduce && step(1)}
                            sx={{
                              position: "absolute",
                              inset: 0,
                              backgroundColor: c,
                              width: done || (isActive && reduce) ? "100%" : 0,
                              animation:
                                isActive && !reduce
                                  ? `heroFill ${AUTOPLAY_MS}ms linear forwards`
                                  : "none",
                              animationPlayState: paused ? "paused" : "running",
                              "@keyframes heroFill": {
                                from: { width: "0%" },
                                to: { width: "100%" },
                              },
                            }}
                          />
                        </Box>
                        <Typography
                          noWrap
                          sx={{
                            display: { xs: "none", sm: "block" },
                            fontSize: "0.72rem",
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? "text.primary" : "text.secondary",
                          }}
                        >
                          {w.tab}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
