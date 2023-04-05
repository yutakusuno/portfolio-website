"use client";

import {
  Button,
  ButtonGroup,
  Image,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { experiences } from "../../lib/experience";

const Experience = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      minHeight="calc(100vh - 3.5em);"
      justifyContent="center"
      centerContent
    >
      <Text fontSize="4xl">Under construction</Text>
      {/* <SimpleGrid columns={2} spacing={4}>
        {experiences.map((item, idx) => (
          <Card key={idx} maxW="lg">
            <CardBody>
              <Image src={item.imagePath} alt={item.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Text>{item.summary}</Text>
                <Text>{item.duration}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  href={item.companyUrl}
                  target="_blank"
                  as={NextLink}
                  variant="ghost"
                  colorScheme="blue"
                >
                  Website
                </Button>
                <Button onClick={onOpen} variant="solid" colorScheme="blue">
                  Description
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{item.description}</ModalBody>
                  </ModalContent>
                </Modal>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid> */}
    </Container>
  );
};

export default Experience;
