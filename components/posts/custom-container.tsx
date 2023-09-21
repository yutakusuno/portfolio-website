"use client";

import { Container, Grid, GridItem } from "@chakra-ui/react";

import CategoryFilter from "../../components/filter/CategoryFilter";
import SearchBar from "../../components/filter/SearchBar";
import PostsGrid from "../../components/posts/PostsGrid";
import { NotionPage } from "../../components/NotionPage";
import RelatedPosts from "../../components/posts/RelatedPosts";
import { Post } from "../../types/post";
import { ExtendedRecordMap } from "notion-types";

export const PostListContainer = (props: {
  allCategories: string[];
  allPosts: Post[];
}) => {
  const { allCategories, allPosts } = props;

  return (
    <Container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Grid gap={5}>
        <GridItem colSpan={5}>
          <SearchBar />
          <CategoryFilter allCategories={allCategories} />
          <PostsGrid allPosts={allPosts} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export const PostPageContainer = (props: {
  post: Post;
  recordMap: ExtendedRecordMap;
  relatedPosts: Post[];
}) => {
  const { post, recordMap, relatedPosts } = props;

  return (
    <Container
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Grid pt={55} gap={5}>
        <GridItem colSpan={5}>
          <NotionPage post={post} recordMap={recordMap} />
          <RelatedPosts posts={relatedPosts} />
        </GridItem>
      </Grid>
    </Container>
  );
};
