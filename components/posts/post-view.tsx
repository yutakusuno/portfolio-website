'use client';

import { ExtendedRecordMap } from 'notion-types';
import { Container } from '@chakra-ui/react';

import { NotionBlogPage } from '../notion/notion-blog-page';
import RelatedPosts from './related-posts';
import type { Post } from '../../types/post';

const PostView = (props: {
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

export default PostView;
