"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import ResumeModal from "../common/ResumeModal";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "resume-modal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "resume-modal") {
      setResumeModalOpen(true);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolled
            ? isDark
              ? "rgba(10, 18, 36, 0.92)"
              : "rgba(250, 249, 246, 0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid" : "1px solid transparent",
          borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(232, 229, 221, 0.85)",
          transition: "background-color 0.25s ease, border-color 0.25s ease, padding 0.25s ease",
          zIndex: 1100,
          py: isScrolled ? 0.75 : 1.25,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: { xs: 52, md: 60 },
            }}
          >
            {/* Logo: Compact & Professional */}
            <Box
              component="a"
              href="#hero"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: isDark
                    ? "linear-gradient(135deg, #9490FF 0%, #292764 100%)"
                    : "linear-gradient(135deg, #292764 0%, #3e3b8a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  border: "1px solid",
                  borderColor: "secondary.main",
                  flexShrink: 0,
                }}
              >
                {personalData.initials}
              </Box>

              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "-0.01em",
                  color: "text.primary",
                  whiteSpace: "nowrap",
                }}
              >
                {personalData.name}
              </Typography>
            </Box>

            {/* Desktop Navigation Links: Clean, Short, Uncluttered */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                borderRadius: "30px",
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              {navItems.map((item) => {
                const isResume = item.href === "resume-modal";
                const isActive = !isResume && activeSection === item.href.substring(1);
                return (
                  <Box
                    key={item.label}
                    component="button"
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      px: 1.6,
                      py: 0.65,
                      borderRadius: "20px",
                      fontSize: "0.86rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "secondary.main" : "text.secondary",
                      transition: "color 0.2s ease, background-color 0.2s ease",
                      backgroundColor: isActive
                        ? isDark
                          ? "rgba(148, 144, 255, 0.12)"
                          : "rgba(41, 39, 100, 0.06)"
                        : "transparent",
                      "&:hover": {
                        color: "text.primary",
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Box>

            {/* Right Action Controls: Theme Toggle & Clear CTA */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <ThemeToggle />

              <Button
                variant="contained"
                size="small"
                onClick={() => handleNavClick("#contact")}
                endIcon={<ArrowUpRight size={15} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontSize: "0.84rem",
                  py: 0.8,
                  px: 2.2,
                  fontWeight: 600,
                }}
              >
                Let&apos;s Talk
              </Button>

              {/* Mobile Drawer Trigger */}
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="Toggle navigation drawer"
                sx={{
                  display: { md: "none" },
                  color: "text.primary",
                  p: 0.8,
                  borderRadius: 1.5,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "75%",
            maxWidth: 300,
            backgroundColor: isDark ? "#0A1224" : "#FAF9F6",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderLeft: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <Box>
          {/* Drawer Top */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3.5,
              pb: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {personalData.name}
            </Typography>
            <IconButton onClick={handleDrawerToggle} size="small">
              <X size={18} />
            </IconButton>
          </Box>

          {/* Links List */}
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.75 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    borderRadius: 1.5,
                    py: 1,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Drawer Bottom CTA */}
        <Box sx={{ pt: 3, borderTop: "1px solid", borderColor: "divider" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavClick("#contact")}
            endIcon={<ArrowUpRight size={16} />}
          >
            Let&apos;s Talk
          </Button>
        </Box>
      </Drawer>

      {/* UK CV Preview Modal */}
      <ResumeModal open={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
    </>
  );
}
