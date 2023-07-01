import { ReactNode } from "react";
import { Inter } from "next/font/google";
import ThemeProvider from "./theme/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const root = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="google-site-verification" content="H3lu4upSAU3DePAx6VgfNuTcnzcmWXcS0yCjMOOPzJ4" />
      <link rel="stylesheet" href="https://unpkg.com/prism-themes@1.9.0/themes/prism-vsc-dark-plus.css" />
      <title>DoodleBobBuffPants</title>
    </head>
    <body className={`${inter.className} min-h-screen pt-28`}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

// noinspection JSUnusedGlobalSymbols
export default root;
