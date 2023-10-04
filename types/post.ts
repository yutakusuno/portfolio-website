export type Post = {
  id: string;
  slug: string;
  title: string;
  outerLink?: string;
  categories: string[];
  date: string;
  published: boolean;
  lastEditedAt: number;
};
