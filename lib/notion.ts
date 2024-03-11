import { NotionAPI } from 'notion-client';
import { notionAuthToken } from './config';

export const notion = new NotionAPI({
  authToken: notionAuthToken,
});

export function getRecordMap(id: string) {
  return notion.getPage(id);
}
