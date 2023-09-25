"use client";

import PostCard from "./post-card";
import usePosts from "../../lib/use-posts";
import { Post } from "../../types/post";
import { Box, VStack } from "@chakra-ui/react";

export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
  const { posts } = usePosts(allPosts);

  return (
    <VStack align="stretch">
      {posts.length ? (
        posts.map((post) => (
          <Box key={post.slug}>
            <PostCard post={post} />
          </Box>
        ))
      ) : (
        <Box>No matching posts found</Box>
      )}
    </VStack>
  );
}
