import { Box, Text, Container } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Container centerContent p={4}>
      <Box
        as={NextLink}
        href="https://github.com/yutakusuno/portfolio-website"
        target="_blank"
      >
        <Text size="sm">
          ©2023 Yuta Kusuno - Build with Next.js & Notion API
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
