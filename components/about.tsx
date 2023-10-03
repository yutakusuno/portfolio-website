"use client";

import {
  Avatar,
  Text,
  Grid,
  Heading,
  Box,
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
              isRound
            />
          </Box>
          <Box
            as="a"
            href="/data/20231003_YutaKusunoResume.pdf"
            target="_blank"
          >
            <IconButton
              aria-label="Resume"
              variant="ghost"
              size="lg"
              icon={<BsFileEarmarkArrowDownFill size="30px" />}
              isRound
            />
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Avatar zIndex={-1} size="2xl" name="Yuta Kusuno" src={profileImg} />
        </GridItem>
        <GridItem colSpan={8}>
          <Text color={"gray.500"}>
            I am a Full Stack Developer skilled in problem-solving and
            passionate about creating something functional and useful. With my
            adaptability gained in a fast-paced environment, I tackle any
            challenge or circumstance to arrive at the best solution. I am also
            involved in contributing to open-source projects and enjoy it
            despite being overwhelmed.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
