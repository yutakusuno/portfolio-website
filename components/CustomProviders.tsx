"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RecoilRoot } from "recoil";

const CustomProviders = (props: {
  theme: string;
  children: React.ReactNode;
}) => {
  const { theme, children } = props;

  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider>
          <NextThemeProvider attribute="class" defaultTheme={theme}>
            <Navbar theme={theme} />
            <Container>{children}</Container>
            <Footer />
          </NextThemeProvider>
        </ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default CustomProviders;
