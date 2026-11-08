"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Download, X, ExternalLink, Printer } from "lucide-react";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const handlePrint = () => {
    window.open(personalData.resumeUrl, "_blank");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          backgroundColor: isDark ? "#101C35" : "#FFFFFF",
          border: "1px solid",
          borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E2DFD4",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.4)",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Modal Actions Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: isDark ? "#0D162B" : "#F7F6F1",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              px: 1.2,
              py: 0.3,
              borderRadius: "4px",
              backgroundColor: "secondary.main",
              color: "#FFFFFF",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            UK Standard CV
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            {personalData.name} — Curriculum Vitae
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            component="a"
            href={personalData.resumeUrl}
            download="Uzzal_Hossain_Senior_Frontend_Developer_Resume.pdf"
            variant="contained"
            size="small"
            startIcon={<Download size={15} />}
            sx={{ px: 2, py: 0.8, fontSize: "0.82rem" }}
          >
            Download PDF
          </Button>

          <IconButton onClick={handlePrint} size="small" aria-label="Open PDF in new tab">
            <ExternalLink size={17} />
          </IconButton>

          <IconButton onClick={onClose} size="small" aria-label="Close resume preview">
            <X size={18} />
          </IconButton>
        </Box>
      </Box>

      {/* CV Document Content */}
      <DialogContent sx={{ p: { xs: 3, sm: 5 } }}>
        <Box
          sx={{
            fontFamily: "var(--font-sans)",
            maxWidth: "740px",
            mx: "auto",
            color: "text.primary",
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                fontWeight: 700,
                letterSpacing: "-0.01em",
                mb: 0.5,
              }}
            >
              UZZAL HOSSAIN
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "secondary.main",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.95rem",
                mb: 1.5,
              }}
            >
              Senior Frontend-Focused Full-Stack Developer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.86rem",
                lineHeight: 1.6,
              }}
            >
              Dhaka, Bangladesh &bull; {personalData.email} &bull; linkedin.com/in/uzzal70 &bull; github.com/uzzal70
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Professional Summary */}
          <Box sx={{ mb: 3.5 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.78rem",
                color: "secondary.main",
                letterSpacing: "0.1em",
                display: "block",
                mb: 1,
              }}
            >
              PROFESSIONAL SUMMARY
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary", lineHeight: 1.7, fontSize: "0.9rem" }}>
              Senior Frontend-Focused Full-Stack Developer with 5+ years of commercial experience architecting resilient, user-centric enterprise web applications and B2B travel management platforms. Deep specialisation in modern React.js, Next.js, TypeScript, and Material UI, supported by practical working knowledge of Node.js, NestJS, REST APIs, and PostgreSQL. Proven track record of engineering multi-brand client platforms, complex client-side document processing, and performance-optimised interfaces.
            </Typography>
          </Box>

          {/* Core Technical Skills */}
          <Box sx={{ mb: 3.5 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.78rem",
                color: "secondary.main",
                letterSpacing: "0.1em",
                display: "block",
                mb: 1.2,
              }}
            >
              CORE TECHNICAL SKILLS
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, fontSize: "0.88rem" }}>
              <div>
                <strong>Frontend:</strong> React.js (v18+), Next.js (App Router), TypeScript, JavaScript (ES6+), HTML5, CSS3, Material UI v5.
              </div>
              <div>
                <strong>State & APIs:</strong> Redux Toolkit, React Context, Custom Hooks, RESTful APIs, Axios Interceptors, Formik, Yup.
              </div>
              <div>
                <strong>Backend & Data:</strong> Node.js, NestJS, Express.js, PostgreSQL, JWT Authentication, Role-Based Access Control (RBAC).
              </div>
              <div>
                <strong>Tools & DevOps:</strong> Git, GitHub, Vite, Postman, Sentry, Figma to Code, Web Workers, Tesseract.js, @react-pdf/renderer.
              </div>
            </Box>
          </Box>

          {/* Professional Experience */}
          <Box sx={{ mb: 3.5 }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.78rem",
                color: "secondary.main",
                letterSpacing: "0.1em",
                display: "block",
                mb: 1.5,
              }}
            >
              PROFESSIONAL EXPERIENCE
            </Typography>

            {/* Experience Item 1 */}
            <Box sx={{ mb: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  Senior Frontend Developer &bull; Travel Tech Innovations Ltd.
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "var(--font-mono)", color: "secondary.main", fontWeight: 700 }}>
                  2023 &ndash; Present
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2.5, m: 0, "& li": { mb: 0.5, fontSize: "0.86rem", color: "text.secondary", lineHeight: 1.55 } }}>
                <li>Lead the frontend architecture and implementation for enterprise B2B travel platforms (TripFindy, Ticket Lagbe).</li>
                <li>Designed a multi-tenant whitelabel architecture allowing corporate travel agency brands to deploy from a unified codebase.</li>
                <li>Optimised flight search filter performance across 800+ multi-leg itineraries, cutting re-render latency by over 60%.</li>
                <li>Engineered client-side vector airline e-ticket and invoice generation using @react-pdf/renderer, eliminating server rendering overhead.</li>
                <li>Standardised component design systems with Material UI v5 and TypeScript, enforcing strict prop typing and WCAG AA contrast.</li>
              </Box>
            </Box>

            {/* Experience Item 2 */}
            <Box sx={{ mb: 2.5 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  Frontend Software Engineer &bull; Enterprise Solutions & Softwares
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "var(--font-mono)", color: "secondary.main", fontWeight: 700 }}>
                  2021 &ndash; 2023
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2.5, m: 0, "& li": { mb: 0.5, fontSize: "0.86rem", color: "text.secondary", lineHeight: 1.55 } }}>
                <li>Developed scalable single-page web applications and internal administrative dashboards using React.js and modern CSS.</li>
                <li>Built complex form validation workflows and document preview modules for regulatory agency trade license verifications.</li>
                <li>Connected frontend clients to Node.js/Express REST APIs, integrating JWT authentication and refresh token rotation.</li>
                <li>Authored reusable data table components supporting server-side sorting, column visibility toggles, and CSV transaction exports.</li>
              </Box>
            </Box>

            {/* Experience Item 3 */}
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  Junior Web Developer &bull; Digital Code Craft
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "var(--font-mono)", color: "secondary.main", fontWeight: 700 }}>
                  2020 &ndash; 2021
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2.5, m: 0, "& li": { mb: 0.5, fontSize: "0.86rem", color: "text.secondary", lineHeight: 1.55 } }}>
                <li>Translated designer Figma mockups into pixel-accurate HTML5, CSS3, and modern JavaScript components.</li>
                <li>Implemented client-side form validations, modal systems, and responsive layouts across cross-browser environments.</li>
              </Box>
            </Box>
          </Box>

          {/* Education */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.78rem",
                color: "secondary.main",
                letterSpacing: "0.1em",
                display: "block",
                mb: 1,
              }}
            >
              EDUCATION
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: "0.92rem" }}>
              Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.86rem" }}>
              Daffodil International University, Dhaka, Bangladesh &bull; 2017 &ndash; 2021
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

