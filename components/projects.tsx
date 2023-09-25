"use client";

import { useState } from "react";
import type { NextPage } from "next";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Stack,
  Tab,
  TabList,
  Image,
  Text,
  Tabs,
  SimpleGrid,
} from "@chakra-ui/react";

import projectsData from "../public/data/projects.json";
import CategoryList from "./category-list";

enum TabMenu {
  All = "All",
  Web = "Web",
  Mobile = "Mobile",
  OSS = "OSS",
}

const Projects: NextPage = () => {
  const [projectsList, setProjectList] = useState(projectsData);

  const hasProjects = () => {
    return projectsList.length !== 0;
  };

  const filterProjects = (menu: String) => {
    const projects = projectsData.filter((data) => {
      if (menu === TabMenu.All) return true;

      const category = data.category.toLowerCase();

      return category === menu.toLowerCase();
    });

    setProjectList(projects);
  };

  return (
    <Container minHeight="80vh" pt={50}>
      <Heading fontSize={"3xl"} pb={10}>
        Projects
      </Heading>

      <Tabs size="sm" isFitted variant="soft-rounded" mb={5}>
        <TabList>
          {Object.keys(TabMenu).map((menu, idx) => {
            return (
              <Tab as={"button"} key={idx} onClick={() => filterProjects(menu)}>
                {menu}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
      <SimpleGrid gap={5} columns={[1, null, 2]}>
        {!hasProjects() && <p>Coming soon...</p>}

        {projectsList.map((project, idx) => {
          return (
            <Card key={idx} variant="outline" maxWidth={"xs"}>
              <CardBody>
                <Image
                  src={project.img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{project.title}</Heading>
                  <Text fontSize="sm">{project.description}</Text>
                  <CategoryList
                    categories={[project.category].concat(project.techStack)}
                  />
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2" size={"sm"}>
                  {project.link.github && (
                    <Button as={"a"} href={project.link.github} target="_blank">
                      GitHub
                    </Button>
                  )}
                  {project.link.live && (
                    <Button as={"a"} href={project.link.live} target="_blank">
                      Website
                    </Button>
                  )}
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
