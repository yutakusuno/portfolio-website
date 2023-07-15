"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Navbar from "./navbar";
import Footer from "./footer";

const theme = "dark";

const CustomProviders = (props: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NextThemeProvider attribute="class" defaultTheme={theme}>
          <Navbar theme={theme} />
          {props.children}
          <Footer />
        </NextThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default CustomProviders;
