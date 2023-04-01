"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Nabbar from "../components/navbar";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: suppressHydrationWarning is a hack to avoid to get warnings
  // see: https://legacy.reactjs.org/docs/dom-elements.html#suppresshydrationwarning:~:text=It%20only%20works%20one%20level%20deep
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <CacheProvider>
          <NextThemeProvider forcedTheme="dark">
            <ChakraProvider>
              <Nabbar />
              {children}
            </ChakraProvider>
          </NextThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
