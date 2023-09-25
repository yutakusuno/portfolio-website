"use client";

import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

import dynamic from "next/dynamic";
import CategoryList from "./category-list";
import { Post } from "../types/post";

export const NotionProfilePage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode } = useColorMode();

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={colorMode === "dark"}
      rootPageId={rootPageId}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
};

export const NotionPage = ({
  post,
  recordMap,
}: {
  post: Post;
  recordMap: ExtendedRecordMap;
}) => {
  const { colorMode } = useColorMode();

  return (
    <section>
      <NotionRenderer
        recordMap={recordMap}
        darkMode={colorMode === "dark"}
        fullPage
        disableHeader
        pageHeader={
          <Flex>
            <Text fontSize="xs" pr={2}>
              Posted on {post.date}
            </Text>
            <CategoryList categories={post.categories} />
          </Flex>
        }
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
        }}
      />
    </section>
  );
};

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);

const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);
