import { getRecordMap } from './notion';
import { notionBlogDatabaseId } from './config';
import type { Post } from '../types/post';

const getPostsFromNotion = async () => {
  const posts: Post[] = [];
  const recordMap = await getRecordMap(notionBlogDatabaseId!);
  const { block, collection } = recordMap;
  const schema = Object.values(collection)[0].value.schema;
  const propertyMap: Record<string, string> = {};

  Object.keys(schema).forEach((key) => {
    propertyMap[schema[key].name] = key;
  });

  Object.keys(block).forEach((pageId) => {
    if (
      block[pageId].value.type === 'page' &&
      block[pageId].value.properties[propertyMap['slug']]
    ) {
      const { properties, last_edited_time } = block[pageId].value;

      const contents = block[pageId].value.content || [];
      const dates = contents.map((content) => {
        return block[content]?.value?.last_edited_time;
      });
      dates.push(last_edited_time);
      dates.sort((a, b) => b - a);
      const lastEditedAt = dates[0];

      const id = pageId;
      const slug = properties[propertyMap['slug']][0][0];
      const title = properties[propertyMap['page']][0][0];
      const categories = properties[propertyMap['category']][0][0].split(',');
      const date = properties[propertyMap['date']][0][1][0][1]['start_date'];
      const published = properties[propertyMap['published']][0][0] === 'Yes';
      const outerLink = properties[propertyMap['outer_link']];

      posts.push({
        id,
        slug,
        title,
        outerLink,
        categories,
        date,
        published,
        lastEditedAt,
      });
    }
  });

  return posts;
};

export { getPostsFromNotion };
