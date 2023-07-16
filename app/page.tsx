import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";

const About = async () => {
  if (!rootNotionPageId) return null;

  const recordMap = await notion.getPage(rootNotionPageId);

  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
};

export default About;
