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
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        p={3}
        // To apply backdropBlur, set backdropFilter prop value to "auto"
        backdropFilter="auto"
        backdropBlur="sm"
        zIndex="sticky"
        sx={{
          position: "sticky",
          top: "0",
        }}
      >
        <Box>
          <Heading size="sm">Yuta Kusuno</Heading>
        </Box>
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
    </>
  );
};

export default Navbar;
