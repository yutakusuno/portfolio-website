"use client";

import { useRecoilState } from "recoil";
import { categoriesState } from "../../states/categories";
import { Button } from "@chakra-ui/react";

export default function Category({ category }: { category: string }) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const checked = categories.selected.includes(category);

  const handleCategoryClick = (category: string) => () => {
    setCategories((prevCategories) => {
      if (prevCategories.selected.includes(category)) {
        return {
          ...prevCategories,
          selected: prevCategories.selected.filter(
            (value) => value !== category
          ),
        };
      } else {
        return {
          ...prevCategories,
          selected: [...prevCategories.selected, category],
        };
      }
    });
  };

  return (
    <Button
      onClick={handleCategoryClick(category)}
      colorScheme="gray"
      size="sm"
      m={2}
      variant="outline"
      isActive={checked}
    >
      {category}
    </Button>
  );
}
