"use client";

import React, { useEffect, useState } from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          sx={{
            position: "fixed",
            bottom: { xs: 24, md: 32 },
            right: { xs: 24, md: 32 },
            zIndex: 900,
          }}
        >
          <Tooltip title="Back to Top">
            <IconButton
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              sx={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                backgroundColor: "surface.main",
                color: "text.primary",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 24px -4px rgba(0,0,0,0.15)",
                backdropFilter: "blur(12px)",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#FFFFFF",
                  borderColor: "primary.main",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              <ArrowUp size={20} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </AnimatePresence>
  );
}
