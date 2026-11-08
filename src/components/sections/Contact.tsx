"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Alert,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";
import confetti from "canvas-confetti";
import { fadeInUp } from "../animation/MotionWrapper";

export default function Contact() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#292764", "#B89555", "#9490FF"],
          });
        } catch {
          // ignore if canvas blocked
        }
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to submit message. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please contact via direct email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have a Project in Mind? Let's Build Something Great."
          subtitle="I'm always interested in meaningful engineering challenges, product development opportunities and collaborations."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
            gap: { xs: 5, lg: 8 },
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Contacts */}
          <Box
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.35rem", md: "1.65rem" },
                color: "text.primary",
              }}
            >
              Let&apos;s Connect Directly
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.7,
                fontSize: "1rem",
              }}
            >
              Whether you have an enterprise frontend challenge, a scalable travel tech system to build, or a full-stack engineering opening, feel free to reach out.
            </Typography>

            {/* Email Card with Copy button */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: isDark
                      ? "rgba(184, 149, 85, 0.15)"
                      : "rgba(184, 149, 85, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={20} color="#B89555" />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                    Direct Email
                  </Typography>
                  <Typography
                    variant="body1"
                    component="a"
                    href={`mailto:${personalData.email}`}
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": { color: "secondary.main" },
                    }}
                  >
                    {personalData.email}
                  </Typography>
                </Box>
              </Box>

              <Tooltip title={copied ? "Copied!" : "Copy Email"}>
                <IconButton onClick={handleCopyEmail} size="small">
                  {copied ? <Check size={18} color="#22C55E" /> : <Copy size={18} />}
                </IconButton>
              </Tooltip>
            </Box>

            {/* Location Card */}
            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                backgroundColor: isDark ? "#101C35" : "#FFFFFF",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  backgroundColor: isDark
                    ? "rgba(148, 144, 255, 0.15)"
                    : "rgba(41, 39, 100, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={20} color="#8580FF" />
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                  Location
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: "text.primary" }}>
                  {personalData.location}
                </Typography>
              </Box>
            </Box>

            {/* Social Channels */}
            <Box sx={{ pt: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  color: "secondary.main",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "block",
                  mb: 2,
                }}
              >
                Professional Networks
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  component="a"
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<Linkedin size={16} />}
                >
                  LinkedIn
                </Button>

                <Button
                  component="a"
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<Github size={16} />}
                >
                  GitHub
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Right Column: Contact Form */}
          <Card
            component={motion.div}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              backgroundColor: isDark ? "#101C35" : "#FFFFFF",
              border: "1px solid",
              borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "#E8E5DD",
            }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={!!errors.subject}
                  helperText={errors.subject}
                  required
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  placeholder="Tell me about your project, team, or opportunity..."
                  required
                />

                {status.type && (
                  <Alert severity={status.type} sx={{ borderRadius: 2 }}>
                    {status.message}
                  </Alert>
                )}

                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <CircularProgress size={18} color="inherit" />
                      ) : (
                        <Send size={18} />
                      )
                    }
                    sx={{
                      px: 4,
                      py: 1.4,
                      fontSize: "0.95rem",
                    }}
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </Button>
                </Box>
              </Box>
            </form>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
