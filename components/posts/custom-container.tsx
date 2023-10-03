"use client";

import { Container, Grid, GridItem } from "@chakra-ui/react";

import CategoryFilter from "../../components/filter/category-filter";
import SearchBar from "../../components/filter/search-bar";
import PostsGrid from "./posts-grid";
import { NotionPage } from "../../components/notion-page";
import RelatedPosts from "./related-posts";
import { Post } from "../../types/post";
import { ExtendedRecordMap } from "notion-types";

export const PostListContainer = (props: {
  allCategories: string[];
  allPosts: Post[];
}) => {
  const { allCategories, allPosts } = props;

  return (
    <Container>
      <Grid pt={20} gap={5}>
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
    <Container pt={55}>
      <NotionPage post={post} recordMap={recordMap} />
      <RelatedPosts posts={relatedPosts} />
    </Container>
  );
};
