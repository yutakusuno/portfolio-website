"use client";

import { useState } from "react";

import PostCard from "./PostCard";
import { Post } from "../../types/post";
import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";

const INITIAL_NUM_POSTS = 3;
const ADDITIONAL_NUM_POSTS = 3;

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  const [numPosts, setNumPosts] = useState(INITIAL_NUM_POSTS);

  const handleLoadMore = () => {
    setNumPosts((prevNumPosts) => prevNumPosts + ADDITIONAL_NUM_POSTS);
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <SimpleGrid mt={10} mb={10}>
      <Heading fontSize="3xl">Related Posts</Heading>
      {posts.slice(0, numPosts).map((post) => (
        <Box key={post.slug}>
          <PostCard post={post} />
        </Box>
      ))}
      {numPosts < posts.length && (
        <Center>
          <Button onClick={handleLoadMore} colorScheme="facebook" size="sm">
            Load More
          </Button>
        </Center>
      )}
    </SimpleGrid>
  );
}
