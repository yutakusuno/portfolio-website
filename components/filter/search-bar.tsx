"use client";

import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { queryState } from "../../states/query";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

export default function SearchBar() {
  const [query, setQuery] = useRecoilState(queryState);
  const handleInputClear = () => {
    setQuery("");
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <InputGroup mt={10} mb={10}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        variant="outline"
        placeholder="Search posts"
        onChange={handleInputChange}
        value={query}
      />
      {query && (
        <InputRightElement onClick={handleInputClear}>
          <CloseIcon color="gray.300" />
        </InputRightElement>
      )}
    </InputGroup>
  );
}
