import { Flex, Button, useColorMode, ButtonGroup } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

type PageList = {
  name: string;
  path: string;
};

const pageList: Array<PageList> = [
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position='fixed'
      as='header'
      minWidth='100vw'
      justifyContent='right'
      p={2}
      // To apply backdropBlur, set backdropFilter prop value to "auto"
      backdropFilter='auto'
      backdropBlur='sm'
      zIndex={2147483647}
    >
      <ButtonGroup rounded={'md'} variant='ghost' size='sm'>
        {pageList.map((item, idx) => (
          <Button key={idx} href={item.path} as={NextLink}>
            {item.name}
          </Button>
        ))}
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
