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
import { Menu, X, ArrowUpRight, Download, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import { personalData } from "@/data/personal";
import { useAppTheme } from "@/theme/ThemeContext";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
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
              ? "rgba(13, 13, 20, 0.88)"
              : "rgba(250, 249, 246, 0.88)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid" : "1px solid transparent",
          borderColor: isDark ? "rgba(35, 35, 54, 0.8)" : "rgba(234, 232, 226, 0.8)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1100,
          py: { xs: 0.5, md: 1 },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo / Monogram */}
            <Box
              component="a"
              href="#hero"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: isDark
                    ? "linear-gradient(135deg, #8580FF 0%, #292764 100%)"
                    : "linear-gradient(135deg, #292764 0%, #3e3b8a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  letterSpacing: "0.05em",
                  border: "1px solid",
                  borderColor: "secondary.main",
                  boxShadow: "0 2px 10px rgba(41, 39, 100, 0.15)",
                }}
              >
                {personalData.initials}
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                    color: "text.primary",
                  }}
                >
                  {personalData.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "secondary.main",
                    letterSpacing: "0.06em",
                    display: "block",
                  }}
                >
                  Senior Frontend Dev
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 0.5,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)",
                p: "4px 8px",
                borderRadius: "30px",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    sx={{
                      position: "relative",
                      px: 1.8,
                      py: 0.75,
                      textDecoration: "none",
                      color: isActive ? (isDark ? "#FFFFFF" : "primary.main") : "text.secondary",
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 600 : 500,
                      borderRadius: "20px",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "text.primary",
                      },
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "20px",
                          backgroundColor: isDark
                            ? "rgba(133, 128, 255, 0.15)"
                            : "rgba(41, 39, 100, 0.08)",
                          border: `1px solid ${isDark ? "#8580FF33" : "#29276422"}`,
                          zIndex: -1,
                        }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Right Action Controls */}
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 1.5 } }}>
              <ThemeToggle />

              <Button
                component="a"
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                startIcon={<Download size={15} />}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  fontSize: "0.82rem",
                  py: 0.8,
                  px: 1.8,
                  borderColor: "divider",
                  "&:hover": {
                    borderColor: "secondary.main",
                  },
                }}
              >
                Resume
              </Button>

              <Button
                component="a"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                variant="contained"
                size="small"
                endIcon={<ArrowUpRight size={15} />}
                sx={{
                  fontSize: "0.82rem",
                  py: 0.8,
                  px: 2,
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                Let&apos;s Talk
              </Button>

              {/* Mobile Drawer Hamburger */}
              <IconButton
                onClick={handleDrawerToggle}
                aria-label="Toggle navigation drawer"
                sx={{
                  display: { lg: "none" },
                  color: "text.primary",
                  p: 1,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "80%",
            maxWidth: 320,
            backgroundColor: isDark ? "#0D0D14" : "#FAF9F6",
            backgroundImage: "none",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #292764 0%, #3e3b8a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                }}
              >
                {personalData.initials}
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {personalData.name}
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle} size="small">
              <X size={20} />
            </IconButton>
          </Box>

          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    backgroundColor:
                      activeSection === item.href.substring(1)
                        ? isDark
                          ? "rgba(133, 128, 255, 0.1)"
                          : "rgba(41, 39, 100, 0.06)"
                        : "transparent",
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: activeSection === item.href.substring(1) ? 700 : 500,
                      color:
                        activeSection === item.href.substring(1) ? "secondary.main" : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, pt: 3 }}>
          <Button
            component="a"
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            fullWidth
            startIcon={<Download size={16} />}
          >
            Download Resume
          </Button>
          <Button
            component="a"
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            variant="contained"
            fullWidth
            endIcon={<Send size={16} />}
          >
            Let&apos;s Talk
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
