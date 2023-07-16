import { Container, Divider, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <Container centerContent p={4}>
        <Link href="https://github.com/yutakusuno/portfolio-website" isExternal>
          ©2023 Yuta Kusuno - Build with Next.js & Notion
        </Link>
      </Container>
    </>
  );
};

export default Footer;
