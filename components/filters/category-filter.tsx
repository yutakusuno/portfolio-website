'use client';

import { useContext } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react';

import Category from './category';
import { CategoryContext } from '../contexts/category-context';

const CategoryFilter = ({ categories }: { categories: string[] }) => {
  const { selectedCategories, setSelectedCategories } =
    useContext(CategoryContext);
  const handleClearAll = (): void => setSelectedCategories([]);

  return (
    <Card variant='unstyled' mb={10}>
      <CardHeader>
        <Heading size='md'>
          Search by topics
          <Button
            onClick={handleClearAll}
            size='sm'
            colorScheme='gray'
            variant='ghost'
            isDisabled={!(selectedCategories.length > 0)}
          >
            Clear All
          </Button>
        </Heading>
      </CardHeader>
      <CardBody>
        <Box>
          {categories.map((category: string, index: number) => (
            <Category key={index} category={category} />
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default CategoryFilter;
