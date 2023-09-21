"use client";

import {
  Box,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  SimpleGrid,
} from "@chakra-ui/react";

const steps = [
  {
    period: "Apr 2020 - Apr 2023",
    belongTo: "DennoKotsu Inc.",
    jobTitle: "Full Stack Developer",
    descriptions: [
      "Worked on a dispatch system for taxi companies",
      "Designed and developed MVC architecture applications and DB table schema design",
      "Optimized UX by developing RESTful APIs and leveraging third-party APIs",
      "Led an analytical system team as a player-manager",
      "NGINX logs collection and analysis using Elasticsearch, AWS Lambda, etc",
    ],
  },
];

const Experience = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Container minHeight="80vh" pt={50}>
      <SimpleGrid gap={5}>
        <Box>
          <Heading fontSize={"3xl"} pb={10}>
            Experience
          </Heading>
        </Box>
        <Box>
          <Stepper index={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <Box>
                  <Text>{step.period}</Text>
                  <Box pt={3}>
                    <StepTitle>{step.jobTitle}</StepTitle>
                    {step.belongTo}
                    <UnorderedList pt={3}>
                      {step.descriptions.map((description, index2) => (
                        <ListItem key={index2}>
                          <StepDescription>{description}</StepDescription>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
                <StepSeparator />
              </Step>
            ))}
            <Step>
              <StepSeparator />
            </Step>
          </Stepper>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Experience;
