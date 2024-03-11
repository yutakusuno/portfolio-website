'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import Navbar from './navbar';
import Footer from './footer';

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NextThemeProvider attribute='class' defaultTheme={'dark'}>
          <Navbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default CustomProvider;
