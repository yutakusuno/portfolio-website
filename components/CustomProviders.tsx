"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CustomProviders = (props: {
  theme: string;
  children: React.ReactNode;
}) => {
  const { theme, children } = props;

  return (
    <CacheProvider>
      <ChakraProvider>
        <NextThemeProvider attribute="class" defaultTheme={theme}>
          <Navbar theme={theme} />
          <Container
            minHeight="calc(100vh - 3.5em);"
            justifyContent="center"
            centerContent
          >
            {children}
          </Container>
          <Footer />
        </NextThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default CustomProviders;
