'use client';

import { useState } from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { Container, Grid, GridItem } from '@chakra-ui/react';

import CategoryFilter from '../utils/category-filter';
import SearchBar from '../utils/search-bar';
import PostsGrid from './posts-grid';
import { NotionBlogPage } from '../notion-blog-page';
import RelatedPosts from './related-posts';
import { CategoryProvider } from '../contexts/category-context';
import { toUniqueArray } from '../../lib/to-unique-array';
import type { Post } from '../../types/post';

export const PostListContainer = ({ posts }: { posts: Post[] }) => {
  const [query, setQuery] = useState<string>('');
  const categories: string[] = toUniqueArray(
    posts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat(1)
  ).sort();

  return (
    <CategoryProvider>
      <Container>
        <Grid pt={20} gap={5}>
          <GridItem colSpan={5}>
            <SearchBar query={query} setQuery={setQuery} />
            <CategoryFilter categories={categories} />
            <PostsGrid posts={posts} query={query} />
          </GridItem>
        </Grid>
      </Container>
    </CategoryProvider>
  );
};

export const PostPageContainer = (props: {
  post: Post;
  recordMap: ExtendedRecordMap;
  relatedPosts: Post[];
}) => {
  const { post, recordMap, relatedPosts } = props;

  return (
    <Container pt={55}>
      <NotionBlogPage post={post} recordMap={recordMap} />
      <RelatedPosts posts={relatedPosts} />
    </Container>
  );
};
