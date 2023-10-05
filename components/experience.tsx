"use client";

import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
  Step,
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
    period: "Feb 2022 - Apr 2023",
    belongTo: "DennoKotsu Inc.",
    jobTitle: "Full Stack Developer",
    descriptions: [
      "Contributed to an analytics system that harnessed data from a taxi-dispatch platform",
      "Visualized data using React, TypeScript, Ruby, Elasticsearch, and MySQL",
      "Enhanced NGINX logs collection process using Python, AWS Lambda, and S3",
      "Optimized a CI/CD pipeline using GitHub Actions and AWS CodeBuild",
    ],
  },
  {
    period: "Apr 2020 - Jan 2022",
    belongTo: "DennoKotsu Inc.",
    jobTitle: "Full Stack Developer",
    descriptions: [
      "Improved a taxi-dispatch system and an Android app for drivers",
      "Implemented call center and fare calculation features using JavaScript, Ruby, and MySQL",
      "Established RESTful APIs for seamless integration with the Android app",
      "Developed map-based reservation web apps and seamlessly integrated their data with the taxi-dispatch system",
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
          <Stepper size={"sm"} index={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <Box>
                  <Box>
                    <StepTitle>{step.period}</StepTitle>
                    {step.jobTitle} | {step.belongTo}
                    <UnorderedList pt={3}>
                      {step.descriptions.map((description, index2) => (
                        <ListItem key={index2} fontSize={"sm"}>
                          {description}
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
