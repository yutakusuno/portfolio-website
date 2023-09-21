"use client";

import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Container minHeight="70vh">
      <Grid gap={5}>
        <GridItem colSpan={5}>
          <Heading fontSize={"3xl"} pb={10}>
            Skills
          </Heading>
        </GridItem>
        <GridItem colSpan={5}></GridItem>
      </Grid>
    </Container>
  );
};

export default Skills;
