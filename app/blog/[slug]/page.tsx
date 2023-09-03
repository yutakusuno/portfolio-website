import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NotionPage } from "../../../components/NotionPage";
import RelatedPosts from "../../../components/posts/RelatedPosts";
import { getRecordMap } from "../../../lib/notion";
import { getAllPostsFromNotion } from "../../../lib/posts";
import { Post } from "../../../types/post";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const allPosts = await getAllPostsFromNotion();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (!post.published) {
    return (
      <article data-revalidated-at={new Date().getTime()}>
        <h2>Post Not Found</h2>
        <Link href="/blog">
          <span>&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }

  const relatedPosts: Post[] = allPosts.filter(
    (p) =>
      p.slug !== slug &&
      p.published &&
      p.categories.some((v) => post.categories.includes(v))
  );

  const recordMap = await getRecordMap(post.id);

  return (
    <>
      <NotionPage post={post} recordMap={recordMap} />
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsFromNotion();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allPosts = await getAllPostsFromNotion();
  const post = allPosts.find((p) => p.slug === slug);

  return post
    ? {
        title: post.title,
      }
    : {};
}
