import { useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  ButtonGroup,
  Divider,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

type PageList = {
  name: string;
  path: string;
};

const pageList: Array<PageList> = [
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Flex minWidth="max-content" alignItems="center" gap={2} p={3}>
        <Box>
          <Heading size="sm">Yuta Kusuno</Heading>
        </Box>
        <Spacer />
        <ButtonGroup rounded={"md"} variant="ghost" size="sm">
          {pageList.map((item, idx) => (
            <Button key={idx} href={item.path} as={NextLink}>
              {item.name}
            </Button>
          ))}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </ButtonGroup>
      </Flex>
      <Divider />
    </>
  );
};

export default Navbar;
