"use client";

import {
  Box,
  Text,
  Flex,
  Stack,
  Button,
  useColorMode,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useEffect } from "react";

type LinkItem = {
  name: string;
  path: string;
};

const linkItems: Array<LinkItem> = [
  { name: "About", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const Navbar = (props: { theme: string }) => {
  const { theme } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    // NOTE: This is a hack to adjust theme between Chakra UI and next-themes
    // If the default theme set dark with Chakra UI, color Mode Flash Issue is occurred https://chakra-ui.com/docs/styled-system/color-mode#color-mode-flash-issue
    if (colorMode !== theme) toggleColorMode();
  }, [theme]);

  return (
    <>
      <Box px={3}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text>Yuta Kusuno</Text>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={0}>
              <ButtonGroup>
                {linkItems.map((item, idx) => (
                  <Button
                    key={idx}
                    href={item.path}
                    as={NextLink}
                    variant="ghost"
                    rounded={"md"}
                    size="sm"
                  >
                    {item.name}
                  </Button>
                ))}
                <Button variant="ghost" onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
