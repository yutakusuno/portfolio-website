"use client";

import {
  Avatar,
  Text,
  Grid,
  Heading,
  Box,
  useColorModeValue,
  IconButton,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {
  BsGithub,
  BsLinkedin,
  BsFileEarmarkArrowDownFill,
  BsEnvelopeAtFill,
} from "react-icons/bs";

const About = () => {
  const profileImg = "/img/profile.png";
  return (
    <Container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
      pt={50}
    >
      <Grid gap={5}>
        <GridItem colSpan={5}>
          <Heading fontSize={"3xl"}>I am Yuta Kusuno</Heading>
          <Text fontSize={"lg"}>Full Stack Developer</Text>
          <Box as="a" href="mailto: yutakusuno51@gmail.com">
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsEnvelopeAtFill />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Box>
          <Box as="a" href="https://github.com/yutakusuno" target="_blank">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Box>
          <Box
            as="a"
            href="https://www.linkedin.com/in/yutakusuno/"
            target="_blank"
          >
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              icon={<BsLinkedin size="30px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Box>
          <Box as="a" href="/data/Yuta_Kusuno_Resume.pdf" target="_blank">
            <IconButton
              aria-label="Resume"
              variant="ghost"
              size="lg"
              icon={<BsFileEarmarkArrowDownFill size="30px" />}
              _hover={{
                bg: "blue.500",
                color: useColorModeValue("white", "gray.700"),
              }}
              isRound
            />
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Avatar zIndex={-1} size="2xl" name="Yuta Kusuno" src={profileImg} />
        </GridItem>
        <GridItem colSpan={8}>
          <Text color={"gray.500"}>
            I am a Full Stack Developer skilled in problem-solving with a strong
            passion for acquiring technologies. With my adaptability gained in a
            fast-paced environment, I tackle any challenge or circumstance to
            arrive at the best solution. I am also involved in contributing to
            open-source projects and enjoy the web application development
            process itself, despite being overwhelmed.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
