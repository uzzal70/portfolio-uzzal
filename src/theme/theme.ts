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
        main: isLight ? "#292764" : "#858FFF",
        light: isLight ? "#3E3B8A" : "#A5AFFF",
        dark: isLight ? "#1B1945" : "#5B65E6",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: isLight ? "#B89555" : "#D4BA82",
        light: isLight ? "#CFAE70" : "#E5D0A4",
        dark: isLight ? "#96753A" : "#B39659",
        contrastText: isLight ? "#FFFFFF" : "#0A1224",
      },
      background: {
        default: isLight ? "#FAF9F6" : "#0A1224",
        paper: isLight ? "#FFFFFF" : "#101C35",
      },
      text: {
        primary: isLight ? "#202124" : "#F7F7FA",
        secondary: isLight ? "#5F6368" : "#9C9CB2",
      },
      divider: isLight ? "#E8E5DD" : "rgba(255, 255, 255, 0.12)",
    },
    typography: baseTypography,
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: isLight ? "#D5D1C5 #FAF9F6" : "#303048 #0A1224",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
            "@media (min-width: 600px)": {
              paddingLeft: "32px",
              paddingRight: "32px",
            },
            "@media (min-width: 1200px)": {
              paddingLeft: "40px",
              paddingRight: "40px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "10px 24px",
            fontSize: "0.92rem",
            boxShadow: "none",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              boxShadow: "none",
              transform: "translateY(-1px)",
            },
          },
          containedPrimary: {
            backgroundColor: isLight ? "#292764" : "#9490FF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: isLight ? "#1E1C4D" : "#7E7AE6",
            },
          },
          outlined: {
            borderColor: isLight ? "#E8E5DD" : "#2A2A40",
            color: isLight ? "#202124" : "#F7F7FA",
            "&:hover": {
              borderColor: isLight ? "#B89555" : "#D4BA82",
              backgroundColor: isLight ? "rgba(184, 149, 85, 0.05)" : "rgba(212, 186, 130, 0.08)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            border: `1px solid ${isLight ? "#E8E5DD" : "rgba(255, 255, 255, 0.12)"}`,
            backgroundColor: isLight ? "#FFFFFF" : "#101C35",
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
              backgroundColor: isLight ? "#FFFFFF" : "#181826",
              "& fieldset": {
                borderColor: isLight ? "#E8E5DD" : "#28283C",
              },
              "&:hover fieldset": {
                borderColor: isLight ? "#B89555" : "#D4BA82",
              },
              "&.Mui-focused fieldset": {
                borderColor: isLight ? "#292764" : "#9490FF",
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
