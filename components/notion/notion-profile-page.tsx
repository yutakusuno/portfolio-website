"use client";

import { useColorMode } from "@chakra-ui/react";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import "react-notion-x/src/styles.css";

export const NotionProfilePage = ({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}) => {
  const { colorMode } = useColorMode();

  if (!recordMap) return null;

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={colorMode === "dark"}
      rootPageId={rootPageId}
    />
  );
};
