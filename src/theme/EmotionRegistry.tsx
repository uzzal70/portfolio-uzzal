"use client";

import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppThemeProvider } from "./ThemeContext";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // CRITICAL FIX: Do NOT use enableCssLayer: true because it places MUI CSS into @layer mui
  // which causes unlayered CSS resets (like padding/margin) to wipe out all MUI padding,
  // margins, and alignments across the entire site.
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </AppRouterCacheProvider>
  );
}
