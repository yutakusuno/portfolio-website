"use client";

import avatar from "../public/logo20230402.svg";
import {
  Button,
  Container,
  Text,
  Icon,
  Image,
  SimpleGrid,
  Center,
  ButtonGroup,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";

const name = "Yuta Kusuno";

const About = () => {
  return (
    <Container p={5}>
      <Heading as="h3" size="lg">
        About
      </Heading>
      <SimpleGrid columns={1} spacing={5}>
        <Center>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={avatar.src}
            alt={name}
          />
        </Center>
        <Center>
          <Text fontSize="4xl">{name}</Text>
        </Center>
      </SimpleGrid>
      <SimpleGrid spacing={5}>
        <Center>
          <ButtonGroup variant="outline" rounded={"md"}>
            <Button
              leftIcon={<Icon as={FaLinkedin} w={5} h={5} />}
              href="https://www.linkedin.com/in/yutakusuno/"
              as={NextLink}
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              leftIcon={<Icon as={FaGithubSquare} w={5} h={5} />}
              href="https://github.com/yutakusuno"
              as={NextLink}
              target="_blank"
            >
              GitHub
            </Button>
            {/* <Button
              leftIcon={<Icon as={FaFileDownload} w={5} h={5} />}
              href="./resume.html"
              as={NextLink}
              target="_blank"
            >
              Resume
            </Button> */}
          </ButtonGroup>
        </Center>
        <Text>
          Software Developer / Frontend(TypeScript, ReactJS, NextJS) /
          Backend(Ruby, Ruby on Rails, NodeJS) / I like to work on and try out
          so many things so that I get so excited that I lose myself sometimes.
          / A bit about me here and there.
        </Text>
        <Heading as="h3" size="lg">
          Interests
        </Heading>
        <UnorderedList>
          <ListItem>Serverless development</ListItem>
          <ListItem>High scalability, and high maintainability code</ListItem>
          <ListItem>Data utilization</ListItem>
        </UnorderedList>
        <Heading as="h3" size="lg">
          Career
        </Heading>
        <Text as="b">DennoKotsu,Inc.</Text>
        <Text>Full-Stack Software Developer - April 2020 - April 2023</Text>
        <UnorderedList>
          <ListItem>My first career as a software developer.</ListItem>
          <ListItem>
            Introduced a function to calculate fares from each clients fare
            table by evaluating map data such as traveling routes and polygons,
            calculating traveling time and traveling locations.
          </ListItem>
          <ListItem>
            Worked on developing a call center function using CPaaS API, WebRTC
            and WebSocket.
          </ListItem>
          <ListItem>
            Worked as a playing manager for developing a system quantitative
            evaluation of taxi dispatch and incoming call data.
          </ListItem>
          <ListItem>
            Worked on developing reservation systems for a municipality that
            manages vehicle dynamics and its API integration with a taxi
            dispatch system.
          </ListItem>
        </UnorderedList>
      </SimpleGrid>
    </Container>
  );
};

export default About;
