"use client";

import NextLink from "next/link";
import CategoryList from "../CategoryList";
import { Post } from "../../types/post";
import { Text, Heading, Card, CardBody, Link, Flex } from "@chakra-ui/react";

export default function PostCard({
  post: { slug, title, date, categories },
}: {
  post: Post;
}) {
  return (
    <Link as={NextLink} href={`/blog/${slug}`}>
      <Card variant="ghost">
        <CardBody>
          <Heading size="md" pb={2}>
            {title}
          </Heading>
          <Flex justifyContent="space-between">
            <CategoryList categories={categories} />
            <Text fontSize="sm" color="grey">
              {date}
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}
