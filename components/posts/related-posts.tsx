'use client';

import { useState } from 'react';
import { Box, Button, Center, Heading, SimpleGrid } from '@chakra-ui/react';

import PostCard from './post-card';
import type { Post } from '../../types/post';

const INITIAL_NUM_POSTS = 3;
const ADDITIONAL_NUM_POSTS = 3;

const RelatedPosts = ({ posts }: { posts: Post[] }) => {
  const [numPosts, setNumPosts] = useState(INITIAL_NUM_POSTS);

  const loadMoreHandler = (): void => {
    setNumPosts((prevNumPosts) => prevNumPosts + ADDITIONAL_NUM_POSTS);
  };

  if (posts.length === 0) return null;

  return (
    <SimpleGrid mt={10} mb={10}>
      <Heading fontSize='3xl'>Related Posts</Heading>
      {posts.slice(0, numPosts).map((post: Post) => (
        <Box key={post.slug}>
          <PostCard post={post} />
        </Box>
      ))}
      {numPosts < posts.length && (
        <Center>
          <Button onClick={loadMoreHandler} colorScheme='facebook' size='sm'>
            Load More
          </Button>
        </Center>
      )}
    </SimpleGrid>
  );
};

export default RelatedPosts;
