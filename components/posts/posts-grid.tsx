'use client';

import { useContext, useEffect, useMemo } from 'react';
import { Box, VStack } from '@chakra-ui/react';

import PostCard from './post-card';
import { CategoryContext } from '../contexts/category-context';
import { toUniqueArray } from '../../lib/to-unique-array';
import type { Post } from '../../types/post';

const PostsGrid = ({ posts, query }: { posts: Post[]; query: string }) => {
  const { selectedCategories, setCategories } = useContext(CategoryContext);

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) => {
        if (!post.published) return false;

        if (
          query &&
          post.title.toLowerCase().indexOf(query.toLowerCase()) === -1
        ) {
          return false;
        }

        if (selectedCategories.length > 0) {
          const isCategoryMatch = selectedCategories.every((category) =>
            post.categories.includes(category)
          );
          if (!isCategoryMatch) return false;
        }

        return true;
      }),

    [posts, selectedCategories, query]
  );

  filteredPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  // Update categories in context
  useEffect(() => {
    setCategories(
      toUniqueArray(filteredPosts.map((post) => post.categories).flat())
    );
  }, [filteredPosts, setCategories]);

  return (
    <VStack align='stretch'>
      {filteredPosts.length ? (
        filteredPosts.map((post) => (
          <Box key={post.slug}>
            <PostCard post={post} />
          </Box>
        ))
      ) : (
        <Box>No matching posts found</Box>
      )}
    </VStack>
  );
};

export default PostsGrid;
