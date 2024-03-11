'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

type SearchBarProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const handleInputClear = () => setQuery('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <InputGroup mt={10} mb={10}>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.300' />
      </InputLeftElement>
      <Input
        variant='outline'
        placeholder='Search posts'
        onChange={handleInputChange}
        value={query}
      />
      {query && (
        <InputRightElement onClick={handleInputClear}>
          <CloseIcon color='gray.300' />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchBar;
