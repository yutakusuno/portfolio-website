"use client";

import Head from "next/head";

import { useColorMode } from "@chakra-ui/react";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

export const NotionPage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) => {
  if (!recordMap) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode } = useColorMode();
  const title = getPageTitle(recordMap);
  // console.log(title, recordMap);

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />
        <title>{title}</title>
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        darkMode={colorMode === "dark"}
        rootPageId={rootPageId}
      />
    </>
  );
};
