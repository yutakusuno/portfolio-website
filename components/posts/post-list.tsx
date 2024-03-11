'use client';

import { useState } from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';

import CategoryFilter from '../filters/category-filter';
import SearchBar from '../filters/search-bar';
import PostsGrid from './posts-grid';
import { CategoryProvider } from '../contexts/category-context';
import type { Post } from '../../types/post';

const PostList = ({ posts }: { posts: Post[] }) => {
  const [query, setQuery] = useState<string>('');

  const categories: string[] = [
    ...new Set(
      posts
        .filter((post) => post.published)
        .map((post) => post.categories)
        .flat(1)
    ),
  ].sort();

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

export default PostList;
