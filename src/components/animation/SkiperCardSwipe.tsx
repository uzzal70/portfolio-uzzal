"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import {
  motion,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  Play,
  Pause,
  Layers,
  Sparkles,
  Lock,
} from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { useAppTheme } from "@/theme/ThemeContext";

interface SkiperCardSwipeProps {
  projects: ProjectCaseStudy[];
  autoPlayInterval?: number;
}

/**
 * Skiper UI 3D Card Swipe Stack Carousel (Inspired by skiper48 / Carousel_002)
 * Features physics-based touch/drag gesture handling, 3D stacked perspective layers,
 * momentum swipe-away physics, and interactive pagination.
 */
export default function SkiperCardSwipe({
  projects,
  autoPlayInterval = 6500,
}: SkiperCardSwipeProps) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const total = projects.length;

  // Auto-play timer with progress indicator
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const stepMs = 50;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setActiveIndex((current) => (current + 1) % total);
          return 0;
        }
        return prev + (stepMs / autoPlayInterval) * 100;
      });
    }, stepMs);

    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, total, activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setProgress(0);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 70;
    const velocityThreshold = 350;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNext();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handlePrev();
    }
  };

  const handleSelectIndex = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setProgress(0);
  };

  // Visible stack items (up to 3 cards visible simultaneously)
  const getStackPosition = (cardIndex: number) => {
    const diff = (cardIndex - activeIndex + total) % total;
    if (diff === 0) return 0; // Front active
    if (diff === 1) return 1; // Immediately behind
    if (diff === 2) return 2; // Second behind
    return -1; // Hidden
  };

  return (
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        position: "relative",
        width: "100%",
        mx: "auto",
        perspective: "1200px",
        userSelect: "none",
      }}
    >
      {/* Top Header Dock: Controls, Progress & Indices */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.8,
              px: 1.4,
              py: 0.5,
              borderRadius: "20px",
              backgroundColor: isDark
                ? "rgba(34, 184, 207, 0.12)"
                : "rgba(41, 39, 100, 0.08)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(34, 184, 207, 0.3)"
                : "rgba(41, 39, 100, 0.15)",
            }}
          >
            <Layers size={14} color={isDark ? "#22B8CF" : "#292764"} />
            <Typography
              variant="caption"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.72rem",
                color: isDark ? "#22B8CF" : "primary.main",
                letterSpacing: "0.04em",
              }}
            >
              SKIPER 3D CARD STACK
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              display: { xs: "none", sm: "inline" },
            }}
          >
            &bull; Drag or swipe cards horizontally
          </Typography>
        </Box>

        {/* Carousel Navigation Buttons & Auto-play indicator */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "text.primary",
              mr: 0.5,
            }}
          >
            0{activeIndex + 1} / 0{total}
          </Typography>

          {/* Pause / Play Toggle */}
          <IconButton
            size="small"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play slide rotation" : "Pause slide rotation"}
            sx={{
              width: 32,
              height: 32,
              border: "1px solid",
              borderColor: "divider",
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
                borderColor: "#22B8CF",
              },
            }}
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
          </IconButton>

          {/* Prev Button */}
          <IconButton
            size="small"
            onClick={handlePrev}
            aria-label="Previous card"
            sx={{
              width: 32,
              height: 32,
              border: "1px solid",
              borderColor: "divider",
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
                borderColor: "#22B8CF",
                backgroundColor: isDark
                  ? "rgba(34, 184, 207, 0.1)"
                  : "rgba(41, 39, 100, 0.05)",
              },
            }}
          >
            <ChevronLeft size={16} />
          </IconButton>

          {/* Next Button */}
          <IconButton
            size="small"
            onClick={handleNext}
            aria-label="Next card"
            sx={{
              width: 32,
              height: 32,
              border: "1px solid",
              borderColor: "divider",
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
                borderColor: "#22B8CF",
                backgroundColor: isDark
                  ? "rgba(34, 184, 207, 0.1)"
                  : "rgba(41, 39, 100, 0.05)",
              },
            }}
          >
            <ChevronRight size={16} />
          </IconButton>
        </Box>
      </Box>

      {/* 3D Stack Stage Container */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "560px", sm: "480px", md: "460px" },
          width: "100%",
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {projects.map((project, idx) => {
            const stackPos = getStackPosition(idx);
            if (stackPos === -1) return null;

            const isFront = stackPos === 0;
            const isSecond = stackPos === 1;
            const isThird = stackPos === 2;

            // Stack transform metrics
            const scale = isFront ? 1 : isSecond ? 0.95 : 0.9;
            const yOffset = isFront ? 0 : isSecond ? 16 : 30;
            const rotation = isFront ? 0 : isSecond ? -1.8 : 1.8;
            const opacity = isFront ? 1 : isSecond ? 0.8 : 0.55;
            const zIndex = isFront ? 10 : isSecond ? 8 : 6;

            return (
              <motion.div
                key={project.slug}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.65}
                onDragEnd={isFront ? handleDragEnd : undefined}
                onClick={!isFront ? () => handleSelectIndex(idx) : undefined}
                initial={{
                  scale: 0.85,
                  y: 40,
                  opacity: 0,
                }}
                animate={{
                  scale,
                  y: yOffset,
                  rotate: rotation,
                  opacity,
                  zIndex,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    mass: 0.6,
                  },
                }}
                exit={{
                  scale: 0.8,
                  x: direction * -280,
                  opacity: 0,
                  rotate: direction * -8,
                  transition: { duration: 0.35, ease: "easeInOut" },
                }}
                whileTap={isFront ? { cursor: "grabbing" } : undefined}
                style={{
                  position: isFront ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  cursor: isFront ? "grab" : "pointer",
                  transformOrigin: "center bottom",
                }}
              >
                {/* Skiper Card Surface */}
                <Box
                  sx={{
                    borderRadius: "20px",
                    p: { xs: 2.5, sm: 3.5 },
                    backgroundColor: isDark ? "#0E182D" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: isFront
                      ? isDark
                        ? "rgba(34, 184, 207, 0.45)"
                        : "rgba(41, 39, 100, 0.35)"
                      : isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(41, 39, 100, 0.12)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: isFront
                      ? isDark
                        ? "0 24px 60px -12px rgba(0, 0, 0, 0.75), 0 0 30px rgba(34, 184, 207, 0.12)"
                        : "0 20px 50px -10px rgba(41, 39, 100, 0.15)"
                      : isDark
                      ? "0 10px 30px rgba(0, 0, 0, 0.4)"
                      : "0 10px 25px rgba(0, 0, 0, 0.05)",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
                      gap: { xs: 3, lg: 4.5 },
                      alignItems: "center",
                    }}
                  >
                    {/* Left Details Column */}
                    <Box>
                      {/* Top Category Pill & Live Badge */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          mb: 1.5,
                        }}
                      >
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            backgroundColor: isDark
                              ? "rgba(34, 184, 207, 0.15)"
                              : "rgba(41, 39, 100, 0.08)",
                            color: isDark ? "#22B8CF" : "primary.main",
                            fontWeight: 700,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            borderRadius: "6px",
                          }}
                        />

                        {project.liveDemoUrl && (
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.6,
                              px: 1,
                              py: 0.25,
                              borderRadius: "4px",
                              backgroundColor: "rgba(34, 197, 94, 0.12)",
                              border: "1px solid rgba(34, 197, 94, 0.3)",
                              color: "#22C55E",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: "#22C55E",
                                boxShadow: "0 0 6px #22C55E",
                              }}
                            />
                            LIVE PRODUCTION
                          </Box>
                        )}
                      </Box>

                      {/* Project Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.1rem" },
                          fontWeight: 700,
                          lineHeight: 1.2,
                          mb: 1.5,
                          color: "text.primary",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {project.title}
                      </Typography>

                      {/* Short Punchy Summary */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.88rem", sm: "0.95rem" },
                          lineHeight: 1.65,
                          color: "text.secondary",
                          mb: 2.5,
                        }}
                      >
                        {project.subtitle}
                      </Typography>

                      {/* Problem & Solution Bullet Highlights */}
                      <Box
                        sx={{
                          p: 1.6,
                          borderRadius: "10px",
                          backgroundColor: isDark
                            ? "rgba(6, 11, 23, 0.6)"
                            : "rgba(247, 246, 241, 0.8)",
                          border: "1px solid",
                          borderColor: "divider",
                          mb: 2.5,
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.8,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              color: "secondary.main",
                              fontSize: "0.72rem",
                              lineHeight: 1.4,
                              flexShrink: 0,
                            }}
                          >
                            CHALLENGE:
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.primary",
                              fontSize: "0.74rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {project.problemStatement.slice(0, 115)}...
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              color: "#22B8CF",
                              fontSize: "0.72rem",
                              lineHeight: 1.4,
                              flexShrink: 0,
                            }}
                          >
                            SOLUTION:
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.primary",
                              fontSize: "0.74rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {project.technicalSolution.slice(0, 125)}...
                          </Typography>
                        </Box>
                      </Box>

                      {/* Tech Chips */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.8,
                          mb: 3,
                        }}
                      >
                        {project.technologies.slice(0, 5).map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.1,
                              py: 0.35,
                              borderRadius: "6px",
                              backgroundColor: isDark
                                ? "rgba(255, 255, 255, 0.04)"
                                : "rgba(41, 39, 100, 0.04)",
                              border: "1px solid",
                              borderColor: isDark
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(41, 39, 100, 0.12)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              color: "text.primary",
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      {/* Action Buttons */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: 1.8,
                        }}
                      >
                        <Button
                          component={Link}
                          href={`/projects/${project.slug}`}
                          variant="contained"
                          size="medium"
                          endIcon={<ArrowUpRight size={16} />}
                          sx={{
                            px: 2.8,
                            py: 1,
                            fontSize: "0.88rem",
                            fontWeight: 600,
                          }}
                        >
                          View Full Case Study
                        </Button>

                        {project.liveDemoUrl && (
                          <Button
                            component="a"
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            size="medium"
                            endIcon={<ExternalLink size={15} />}
                            sx={{
                              px: 2.4,
                              py: 1,
                              fontSize: "0.88rem",
                              borderColor: isDark
                                ? "rgba(255, 255, 255, 0.2)"
                                : "divider",
                            }}
                          >
                            Live Platform
                          </Button>
                        )}
                      </Box>
                    </Box>

                    {/* Right Column: Mac Browser Window Screenshot */}
                    <Box
                      sx={{
                        borderRadius: "14px",
                        overflow: "hidden",
                        border: "1px solid",
                        borderColor: isDark
                          ? "rgba(255, 255, 255, 0.15)"
                          : "#E2DFD4",
                        backgroundColor: isDark ? "#0A1224" : "#F7F6F1",
                        boxShadow: "0 14px 35px -8px rgba(0,0,0,0.35)",
                      }}
                    >
                      {/* Browser Chrome Header */}
                      <Box
                        sx={{
                          px: 1.6,
                          py: 1,
                          backgroundColor: isDark ? "#070D1B" : "#ECEAE2",
                          borderBottom: "1px solid",
                          borderColor: "divider",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#FF5F56",
                            }}
                          />
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#FFBD2E",
                            }}
                          />
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#27C93F",
                            }}
                          />

                          {/* URL Pill */}
                          <Box
                            sx={{
                              ml: 1,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 0.6,
                              px: 1,
                              py: 0.2,
                              borderRadius: "4px",
                              backgroundColor: isDark ? "#0F1A30" : "#FFFFFF",
                              border: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Lock size={10} color="#22C55E" />
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.66rem",
                                color: "text.secondary",
                              }}
                            >
                              {project.liveDemoUrl
                                ? project.liveDemoUrl.replace("https://", "")
                                : `${project.slug}.internal`}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Screenshot Container */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          maxHeight: { xs: "240px", sm: "300px", lg: "330px" },
                          overflow: "hidden",
                          lineHeight: 0,
                        }}
                      >
                        <Box
                          component="img"
                          src={project.previewImage}
                          alt={`${project.title} Preview`}
                          sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            transition: "transform 0.4s ease",
                            "&:hover": {
                              transform: "scale(1.025)",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>

      {/* Bottom Progress Bar & Pagination Pills */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.2,
          mt: 4,
        }}
      >
        {projects.map((p, dotIdx) => {
          const isActive = dotIdx === activeIndex;
          return (
            <Box
              key={p.slug}
              component="button"
              onClick={() => handleSelectIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}: ${p.title}`}
              sx={{
                background: "none",
                border: "none",
                p: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                height: "22px",
              }}
            >
              <Box
                sx={{
                  height: "5px",
                  width: isActive ? "34px" : "8px",
                  borderRadius: "3px",
                  backgroundColor: isActive
                    ? "#22B8CF"
                    : isDark
                    ? "rgba(255, 255, 255, 0.25)"
                    : "rgba(41, 39, 100, 0.2)",
                  boxShadow: isActive ? "0 0 8px #22B8CF" : "none",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  "&:hover": {
                    backgroundColor: isActive ? "#22B8CF" : "text.secondary",
                  },
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

