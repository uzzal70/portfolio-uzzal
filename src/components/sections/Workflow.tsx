"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Card, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { workflowSteps } from "@/data/workflow";
import { useAppTheme } from "@/theme/ThemeContext";

export default function Workflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const currentStep = workflowSteps[activeStepIndex];

  return (
    <Box
      id="workflow"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="METHODICAL EXECUTION"
          title="My Development Workflow"
          subtitle="An intentional, disciplined engineering pipeline that takes ideas from business ambiguity to hardened, production-grade applications."
        />

        {/* Step Navigation Rail */}
        <Box
          sx={{
            display: "flex",
            gap: 1.2,
            overflowX: "auto",
            pb: 2,
            mb: 4,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {workflowSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <Box
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                sx={{
                  flexShrink: 0,
                  cursor: "pointer",
                  px: 2,
                  py: 1.1,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: isActive
                    ? "secondary.main"
                    : isDark
                    ? "#242436"
                    : "#E8E5DD",
                  backgroundColor: isActive
                    ? isDark
                      ? "rgba(184, 149, 85, 0.12)"
                      : "rgba(184, 149, 85, 0.08)"
                    : isDark
                    ? "#13131E"
                    : "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                  },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: isActive ? "secondary.main" : "text.secondary",
                  }}
                >
                  {step.step}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "text.primary" : "text.secondary",
                    fontSize: "0.88rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Active Step Showcase Card */}
        <AnimatePresence mode="wait">
          <Card
            key={currentStep.step}
            component={motion.div}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            sx={{
              p: { xs: 3, sm: 4.5 },
              borderRadius: 4,
              backgroundColor: isDark ? "#13131E" : "#FFFFFF",
              border: "1px solid",
              borderColor: "secondary.main",
              boxShadow: isDark
                ? "0 20px 50px -10px rgba(0, 0, 0, 0.5)"
                : "0 20px 45px -10px rgba(41, 39, 100, 0.08)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
                gap: { xs: 4, lg: 6 },
                alignItems: "center",
              }}
            >
              {/* Left Column: Description & Step Info */}
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "var(--font-serif)",
                      fontSize: { xs: "2.4rem", md: "3.2rem" },
                      color: "secondary.main",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {currentStep.step}
                  </Typography>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "text.secondary",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                      }}
                    >
                      PHASE {currentStep.step} OF 09
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.35rem", md: "1.7rem" },
                        color: "text.primary",
                      }}
                    >
                      {currentStep.title}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 600,
                    fontSize: "1.02rem",
                    mb: 2,
                  }}
                >
                  {currentStep.tagline}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.98rem", md: "1.05rem" },
                    mb: 4,
                  }}
                >
                  {currentStep.description}
                </Typography>

                {/* Navigation Buttons for Step */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    variant="outlined"
                    size="small"
                  >
                    Previous Phase
                  </Button>

                  <Button
                    disabled={activeStepIndex === workflowSteps.length - 1}
                    onClick={() =>
                      setActiveStepIndex((prev) => Math.min(workflowSteps.length - 1, prev + 1))
                    }
                    variant="contained"
                    size="small"
                    endIcon={<ArrowRight size={16} />}
                  >
                    Next Phase
                  </Button>
                </Box>
              </Box>

              {/* Right Column: Deliverables Box */}
              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  backgroundColor: isDark ? "#0A0A12" : "#F7F6F1",
                  border: "1px solid",
                  borderColor: isDark ? "#222234" : "#E2DFD4",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    color: "secondary.main",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    mb: 2,
                  }}
                >
                  PHASE DELIVERABLES
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                  {currentStep.deliverables.map((item, dIdx) => (
                    <Box
                      key={dIdx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: 2,
                        backgroundColor: isDark ? "#13131E" : "#FFFFFF",
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <CheckCircle2
                        size={17}
                        color="#22C55E"
                        style={{ marginTop: "2px", flexShrink: 0 }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: "0.88rem",
                          lineHeight: 1.45,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
