"use client";
import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import useBasePath from "../hooks/useBasePath";

const SeasonalImage = () => {
  const currentTheme = getTheme();
  const image = currentTheme === christmas ? "/gifs/christmas.gif" : currentTheme === summer ? "/gifs/sun.gif" : "/gifs/skeleton.gif";
  return <Image src={useBasePath(image)} width="200" height="300" alt="seasonal-image" className="rounded-3xl" />;
};

const getTheme = () => {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth === 12 ? christmas : currentMonth > 5 && currentMonth < 9 ? summer : halloween;
};

const halloween = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",
          color: "#7C2D12",
        },
        svg: {
          color: "#7C2D12",
        },
        ".markdown": {
          color: "white",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(135deg, #7C2D12 0%, #262626 50%, #171717 100%)",
          boxShadow: "5px 5px 10px 0px #7C2D12",
          color: "white",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#17171788",
          },
        },
      },
    },
  },
});

const summer = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",
          color: "white",
        },
        svg: {
          color: "white",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(135deg, #38BDF8 0%, #0EA4E9 50%, #FACC15 100%)",
          boxShadow: "5px 5px 10px 0px white",
          color: "white",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#FACC1588",
          },
        },
      },
    },
  },
});

const christmas = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",
          color: "#EF4444",
        },
        svg: {
          color: "#052E16",
        },
        li: {
          color: "#052E16",
        },
        ".markdown": {
          color: "white",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "linear-gradient(135deg, #EF4444 0%, #22C55E 50%, #EF4444 100%)",
          boxShadow: "5px 5px 10px 0px #EF4444",
          color: "#052E16",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#EF444488",
          },
        },
      },
    },
  },
});

export { getTheme, SeasonalImage };
