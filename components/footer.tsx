import { Box, Text, Container, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Container centerContent p={10}>
      <Box>
        <IconButton
          as={NextLink}
          href="https://github.com/yutakusuno/"
          target="_blank"
          aria-label="github"
          variant="ghost"
          size="md"
          icon={<BsGithub />}
          isRound
        />
        <IconButton
          as={NextLink}
          href="https://www.linkedin.com/in/yutakusuno/"
          target="_blank"
          aria-label="linkedin"
          variant="ghost"
          size="md"
          icon={<BsLinkedin />}
          isRound
        />
      </Box>
      <Box
        as={NextLink}
        href="https://github.com/yutakusuno/portfolio-website"
        target="_blank"
      >
        <Text fontSize="sm">
          ©2023 Yuta Kusuno - Build with Next.js & Notion
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
