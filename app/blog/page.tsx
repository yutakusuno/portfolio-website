import CategoryFilter from "../../components/filter/CategoryFilter";
import SearchBar from "../../components/filter/SearchBar";
import PostsGrid from "../../components/posts/PostsGrid";
import { getAllPostsFromNotion } from "../../lib/posts";
import { toUniqueArray } from "../../lib/to-unique-array";

export default async function Blog() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <SearchBar />
      <CategoryFilter allCategories={allCategories} />
      <PostsGrid allPosts={allPosts} />
    </>
  );
}
