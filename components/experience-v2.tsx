import { Container } from "@chakra-ui/react";

import { NotionProfilePage } from "./notion-profile-page";
import { notion } from "../lib/notion";
import { notionExperiencePageId } from "../lib/config";

const ExperienceV2 = async () => {
  if (!notionExperiencePageId) return null;

  const rootNotionPageId = notionExperiencePageId;
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

export default ExperienceV2;
