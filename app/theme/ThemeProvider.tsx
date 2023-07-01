"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import SteamAchievements from "./SteamAchievements";
import { getTheme, SeasonalImage } from "./theme";

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />

      <Link href="/" prefetch={false}>
        <h1 className="text-center text-4xl font-bold underline decoration-wavy mb-28">DoodleBobBuffPants</h1>
      </Link>

      <Grid container spacing={6} alignItems="start" className="mb-0">
        <Grid xs={4} className="flex justify-center">
          <SteamAchievements />
        </Grid>

        <Grid xs={4}>{children}</Grid>

        <Grid xs={4} className="flex justify-center">
          <SeasonalImage />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  </StyledEngineProvider>
);

export default ThemeProvider;
