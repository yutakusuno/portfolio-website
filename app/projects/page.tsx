"use client";

import {
  Button,
  Text,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { projects } from "../../lib/projects";

const Projects = () => {
  return (
    <Container
      minHeight="calc(100vh - 3.5em);"
      justifyContent="center"
      centerContent
    >
      <Text fontSize="4xl">Under construction</Text>
      {/* <SimpleGrid columns={2} spacing={4}>
        {projects.map((item, idx) => (
          <Card key={idx} maxW="lg">
            <CardBody>
              <Image src={item.imagePath} alt={item.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Text>{item.summary}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  href={item.projectUrl}
                  target="_blank"
                  as={NextLink}
                  variant="solid"
                  colorScheme="blue"
                >
                  Website
                </Button>
                <Button
                  href={item.githubUrl}
                  target="_blank"
                  as={NextLink}
                  variant="ghost"
                  colorScheme="blue"
                >
                  Github
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid> */}
    </Container>
  );
};

export default Projects;
