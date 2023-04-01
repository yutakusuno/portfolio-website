"use client";

import { Box, Text, Flex, Link, Stack, Button } from "@chakra-ui/react";
import NextLink from "next/link";

type LinkItemProps = {
  name: string;
  path: string;
};

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/" },
  { name: "Experience", path: "/" },
];

export default function Nav() {
  return (
    <>
      <Box bg="#242424" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize="xl">Yuta Kusuno</Text>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={0}>
              {LinkItems.map((item, idx) => (
                <Button
                  as={NextLink}
                  key={idx}
                  px={2}
                  py={1}
                  size="md"
                  variant="ghost"
                  rounded={"md"}
                  href={item.path}
                  _hover={{ background: "white", color: "#404040" }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
