"use client";

import { useRecoilState } from "recoil";
import Category from "./Category";
import { categoriesState } from "../../states/categories";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

export default function CategoryFilter({
  allCategories,
}: {
  allCategories: string[];
}) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const clearAllActive = categories.selected.length > 0;

  const handleClearAll = () => {
    setCategories({
      selected: [],
      active: [],
    });
  };

  return (
    <Card variant="unstyled" mb={10}>
      <CardHeader>
        <Heading size="md">
          Search by topics
          <Button
            onClick={handleClearAll}
            size="sm"
            colorScheme="gray"
            variant="ghost"
            isDisabled={!clearAllActive}
          >
            Clear All
          </Button>
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          {allCategories.map((category) => (
            <Category key={category} category={category} />
          ))}
        </Box>
      </CardBody>
    </Card>
  );
}
