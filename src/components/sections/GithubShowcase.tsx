"use client";

import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { githubProfile, featuredRepositories } from "@/data/github";
import { useAppTheme } from "@/theme/ThemeContext";
import { fadeInUp, staggerContainer } from "../animation/MotionWrapper";

export default function GithubShowcase() {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <Box
      id="github"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          badge="OPEN SOURCE & CODE"
          title="GitHub & Development Repositories"
          subtitle="Selected public code repositories, utility architectures, and modular proof-of-concept projects."
        />

        {/* GitHub Profile Callout Banner */}
        <Box
          sx={{
            mb: 5,
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            backgroundColor: isDark ? "#141420" : "#FFFFFF",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Github size={22} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                github.com/{githubProfile.username}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {githubProfile.bio}
              </Typography>
            </Box>
          </Box>

          <Button
            component="a"
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            endIcon={<ExternalLink size={15} />}
          >
            Explore Profile
          </Button>
        </Box>

        {/* Repositories Grid */}
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={3}>
            {featuredRepositories.map((repo) => (
              <Grid item xs={12} sm={6} lg={4} key={repo.name}>
                <Card
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    p: 1,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "secondary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    {/* Repo Title & External link */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 1,
                        mb: 1.5,
                      }}
                    >
                      <Box
                        component="a"
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: "none",
                          color: "inherit",
                          "&:hover .repo-title": {
                            color: "secondary.main",
                          },
                        }}
                      >
                        <Typography
                          className="repo-title"
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            fontSize: "0.98rem",
                            lineHeight: 1.3,
                            transition: "color 0.2s ease",
                          }}
                        >
                          {repo.name}
                        </Typography>
                      </Box>
                      <Code2 size={18} color="#B89555" style={{ flexShrink: 0 }} />
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.84rem",
                        lineHeight: 1.6,
                        mb: 2.5,
                        minHeight: "48px",
                      }}
                    >
                      {repo.description}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                      {repo.tags.map((tag) => (
                        <Box
                          key={tag}
                          sx={{
                            px: 1,
                            py: 0.2,
                            borderRadius: "4px",
                            backgroundColor: isDark
                              ? "rgba(255, 255, 255, 0.03)"
                              : "rgba(0, 0, 0, 0.03)",
                            border: "1px solid",
                            borderColor: "divider",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            color: "text.secondary",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>

                    {/* Language & Stats Footer */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 1.5,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 9,
                            height: 9,
                            borderRadius: "50%",
                            backgroundColor: repo.languageColor,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.74rem",
                            fontWeight: 600,
                            color: "text.secondary",
                          }}
                        >
                          {repo.language}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        {repo.stars !== undefined && (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                            <Star size={13} color="#B89555" />
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                color: "text.secondary",
                              }}
                            >
                              {repo.stars}
                            </Typography>
                          </Box>
                        )}

                        {repo.forks !== undefined && (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
                            <GitFork size={13} color="#777777" />
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                color: "text.secondary",
                              }}
                            >
                              {repo.forks}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
