"use client";

import { Box, Tag } from "@chakra-ui/react";

export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <Box>
      {categories.map((category) => (
        <Tag key={category} size="sm" mr={2} borderRadius="full">
          {category}
        </Tag>
      ))}
    </Box>
  );
}
