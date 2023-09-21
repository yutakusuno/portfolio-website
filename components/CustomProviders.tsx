"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
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
            {children}
            <Footer />
          </NextThemeProvider>
        </ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default CustomProviders;
