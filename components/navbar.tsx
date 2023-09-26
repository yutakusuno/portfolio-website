import { useEffect } from "react";
import { Flex, Button, useColorMode, ButtonGroup } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

type PageList = {
  name: string;
  path: string;
};

const pageList: Array<PageList> = [
  { name: "About", path: "/#about" },
  { name: "Experience", path: "/#experience" },
  // { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
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
    <Flex
      position="fixed"
      as="header"
      minWidth="100vw"
      justifyContent="right"
      p={2}
      // To apply backdropBlur, set backdropFilter prop value to "auto"
      backdropFilter="auto"
      backdropBlur="sm"
      zIndex={2147483647}
    >
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
  );
};

export default Navbar;