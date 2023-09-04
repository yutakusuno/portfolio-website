import { NotionAPI } from "notion-client";

export const notion = new NotionAPI({
  authToken: process.env.NOTION_AUTH_TOKEN,
});

export function getRecordMap(id: string) {
  return notion.getPage(id);
}
