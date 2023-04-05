"use client";

import { about, avatar, name } from "../lib/info";
import {
  Button,
  Container,
  Text,
  Icon,
  Image,
  SimpleGrid,
  Center,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <Container
      minHeight="calc(100vh - 3.5em);"
      justifyContent="center"
      centerContent
    >
      <SimpleGrid>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={avatar.src}
          alt={name}
        />
      </SimpleGrid>
      <SimpleGrid>
        <Text fontSize="5xl">{name}</Text>
      </SimpleGrid>
      <SimpleGrid>
        <Text fontSize="2xl">Software Developer</Text>
      </SimpleGrid>
      <Center h="20px" />
      <SimpleGrid columns={2} spacing={5}>
        <IconButton
          href="https://www.linkedin.com/in/yutakusuno/"
          target="_blank"
          as={NextLink}
          aria-label="LinkedIn"
          icon={<Icon as={FaLinkedin} w={9} h={9} />}
          variant="ghost"
          _hover={{ background: "white", color: "#404040" }}
        />
        <IconButton
          href="https://github.com/yutakusuno"
          target="_blank"
          as={NextLink}
          aria-label="GitHub"
          icon={<Icon as={FaGithubSquare} w={9} h={9} />}
          variant="ghost"
          _hover={{ background: "white", color: "#404040" }}
        />
      </SimpleGrid>
      <Center h="20px" />
      <SimpleGrid>
        <Button
          href="https://yutakusuno.com/resume.html"
          target="_blank"
          as={NextLink}
          leftIcon={<Icon as={FaFileDownload} w={6} h={6} />}
          variant="outline"
          size="lg"
          border="2px"
          _hover={{ background: "white", color: "#404040" }}
        >
          Resume
        </Button>
      </SimpleGrid>
      <Center h="20px" />
      <p>{about()}</p>
    </Container>
  );
};

export default Home;
