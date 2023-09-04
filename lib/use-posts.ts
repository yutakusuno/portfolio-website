import { useEffect, useMemo } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { categoriesState } from "../states/categories";
import { queryState } from "../states/query";
import { Post } from "../types/post";
import { toUniqueArray } from "./to-unique-array";

export default function usePosts(allPosts: Post[]) {
  const query = useRecoilValue(queryState);
  const [categories, setCategories] = useRecoilState(categoriesState);

  const allPostsFiltered = useMemo(
    () =>
      allPosts.filter((post) => {
        if (!post.published) {
          return false;
        }

        if (
          query &&
          post.title.toLowerCase().indexOf(query.toLowerCase()) === -1
        ) {
          return false;
        }

        if (categories.selected.length) {
          const isCategoryMatch = categories.selected.every((cat) =>
            post.categories.includes(cat)
          );
          if (!isCategoryMatch) {
            return false;
          }
        }

        return true;
      }),
    [allPosts, categories.selected, query]
  );
  allPostsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  useEffect(() => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      active: toUniqueArray(
        allPostsFiltered.map((post) => post.categories).flat()
      ),
    }));
  }, [allPostsFiltered, setCategories]);

  return {
    posts: allPostsFiltered,
  };
}
