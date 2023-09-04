"use client";

import { Tag } from "@chakra-ui/react";

export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <Tag key={category} size="sm" mr={2} borderRadius="full">
          {category}
        </Tag>
      ))}
    </div>
  );
}
