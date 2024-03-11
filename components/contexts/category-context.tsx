import { createContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type CategoryContextType = {
  categories: string[];
  selectedCategories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
};

const defaultValue: CategoryContextType = {
  categories: [],
  selectedCategories: [],
  setCategories: (): void => {},
  setSelectedCategories: (): void => {},
};

const CategoryContext = createContext<CategoryContextType>(defaultValue);

const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
