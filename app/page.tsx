import { NotionProfilePage } from "../components/NotionPage";
import { notionProfilePageId } from "../lib/config";
import { notion } from "../lib/notion";

const About = async () => {
  if (!notionProfilePageId) return null;

  const recordMap = await notion.getPage(notionProfilePageId);

  return (
    <NotionProfilePage recordMap={recordMap} rootPageId={notionProfilePageId} />
  );
};

export default About;
