'use client';

import { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { CategoryContext } from '../contexts/category-context';

const Category = ({ category }: { category: string }) => {
  const { selectedCategories, setSelectedCategories } =
    useContext(CategoryContext);
  const checked = selectedCategories.includes(category);

  const categorySelectHandler = (): void => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((v) => v !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <Button
      onClick={categorySelectHandler}
      isActive={checked}
      colorScheme='gray'
      size='sm'
      m={2}
      variant='outline'
    >
      {category}
    </Button>
  );
};

export default Category;
