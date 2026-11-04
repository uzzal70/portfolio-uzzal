import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseTypography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  h1: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontWeight: 600,
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
  },
  h2: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontWeight: 600,
    letterSpacing: "-0.015em",
    lineHeight: 1.25,
  },
  h4: {
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },
  h5: {
    fontWeight: 600,
    letterSpacing: "-0.005em",
    lineHeight: 1.35,
  },
  h6: {
    fontWeight: 600,
    letterSpacing: "0em",
    lineHeight: 1.4,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.7,
    letterSpacing: "-0.005em",
  },
  body2: {
    fontSize: "0.885rem",
    lineHeight: 1.6,
  },
  button: {
    textTransform: "none" as const,
    fontWeight: 500,
    letterSpacing: "0.01em",
  },
  overline: {
    fontFamily: '"JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    fontWeight: 600,
    textTransform: "uppercase" as const,
  },
};

export const getAppTheme = (mode: "light" | "dark") => {
  const isLight = mode === "light";

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: isLight ? "#292764" : "#8580FF",
        light: isLight ? "#3E3B8A" : "#A5A2FF",
        dark: isLight ? "#1B1945" : "#5853C9",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: isLight ? "#B89555" : "#CBB075",
        light: isLight ? "#CFAE70" : "#DFC794",
        dark: isLight ? "#96753A" : "#A78B4E",
        contrastText: isLight ? "#FFFFFF" : "#111118",
      },
      background: {
        default: isLight ? "#FAF9F6" : "#0D0D14",
        paper: isLight ? "#FFFFFF" : "#141420",
      },
      text: {
        primary: isLight ? "#202124" : "#F5F5F7",
        secondary: isLight ? "#777777" : "#A2A2B8",
      },
      divider: isLight ? "#EAE8E2" : "#232336",
    },
    typography: baseTypography,
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: isLight ? "#D6D2C4 #FAF9F6" : "#32324C #0D0D14",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "10px 22px",
            fontSize: "0.92rem",
            boxShadow: "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              boxShadow: "none",
              transform: "translateY(-1px)",
            },
          },
          containedPrimary: {
            backgroundColor: isLight ? "#292764" : "#8580FF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: isLight ? "#1E1C4D" : "#726CE8",
            },
          },
          outlined: {
            borderColor: isLight ? "#EAE8E2" : "#2E2E42",
            color: isLight ? "#202124" : "#F5F5F7",
            "&:hover": {
              borderColor: isLight ? "#B89555" : "#CBB075",
              backgroundColor: isLight ? "rgba(184, 149, 85, 0.05)" : "rgba(203, 176, 117, 0.08)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: `1px solid ${isLight ? "#EAE8E2" : "#232336"}`,
            backgroundColor: isLight ? "#FFFFFF" : "#141420",
            boxShadow: isLight
              ? "0 4px 20px -2px rgba(41, 39, 100, 0.04)"
              : "0 4px 24px -2px rgba(0, 0, 0, 0.4)",
            transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontWeight: 500,
            fontSize: "0.78rem",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
              backgroundColor: isLight ? "#FFFFFF" : "#1A1A28",
              "& fieldset": {
                borderColor: isLight ? "#EAE8E2" : "#2A2A3E",
              },
              "&:hover fieldset": {
                borderColor: isLight ? "#B89555" : "#CBB075",
              },
              "&.Mui-focused fieldset": {
                borderColor: isLight ? "#292764" : "#8580FF",
                borderWidth: "1.5px",
              },
            },
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
