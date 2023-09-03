export type Post = {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  date: string;
  published: boolean;
  lastEditedAt: number;
};
