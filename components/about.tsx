import { Container } from "@chakra-ui/react";

import { NotionProfilePage } from "./notion-profile-page";
import { notion } from "../lib/notion";
import { notionAboutPageId } from "../lib/config";

const About = async () => {
  if (!notionAboutPageId) return null;

  const rootNotionPageId = notionAboutPageId;
  const recordMap = await notion.getPage(rootNotionPageId);

  return (
    <Container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
      pt={50}
    >
      <NotionProfilePage recordMap={recordMap} rootPageId={rootNotionPageId} />
    </Container>
  );
};

export default About;
