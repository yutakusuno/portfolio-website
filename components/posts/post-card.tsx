'use client';

import NextLink from 'next/link';
import { Text, Heading, Card, CardBody, Link, Flex } from '@chakra-ui/react';

import CategoryList from '../category-list';
import { Post } from '../../types/post';

const PostCard = ({
  post: { slug, title, date, categories, outerLink },
}: {
  post: Post;
}) => {
  const PostList = ({ children }: { children: React.ReactNode }) => {
    return outerLink ? (
      <Link as={NextLink} href={outerLink[0][0]} target='_blank'>
        {children}
      </Link>
    ) : (
      <Link as={NextLink} href={`/blog/${slug}`}>
        {children}
      </Link>
    );
  };

  return (
    <PostList>
      <Card variant='ghost'>
        <CardBody>
          <Heading size='md' pb={2}>
            {title}
          </Heading>
          <Flex justifyContent='space-between'>
            <CategoryList categories={categories} />
            <Text fontSize='sm' color='grey'>
              {date}
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </PostList>
  );
};

export default PostCard;
