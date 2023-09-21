import { PostListContainer } from "../../components/posts/custom-container";
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
    <PostListContainer allCategories={allCategories} allPosts={allPosts} />
  );
}
