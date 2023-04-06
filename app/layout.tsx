"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import "./globals.css";

const theme = "dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: suppressHydrationWarning is a hack to avoid warnings
  // see: https://legacy.reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <CacheProvider>
          <NextThemeProvider forcedTheme={theme}>
            <ChakraProvider>
              <Navbar theme={theme} />
              {children}
              <Footer />
            </ChakraProvider>
          </NextThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
