import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getRecordMap } from '../../../lib/notion';
import { getPostsFromNotion } from '../../../lib/posts';
import PostView from '../../../components/posts/post-view';
import type { Post } from '../../../types/post';

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const posts = await getPostsFromNotion();

  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (!post.published) {
    return (
      <article data-revalidated-at={new Date().getTime()}>
        <h2>Post Not Found</h2>
        <Link href='/blog'>
          <span>&larr;</span>
          <span>Go to list page</span>
        </Link>
      </article>
    );
  }

  const relatedPosts: Post[] = posts.filter(
    (p) =>
      p.slug !== slug &&
      p.published &&
      p.categories.some((v) => post.categories.includes(v))
  );

  const recordMap = await getRecordMap(post.id);

  return (
    <PostView post={post} recordMap={recordMap} relatedPosts={relatedPosts} />
  );
};

export const generateStaticParams = async () => {
  const posts = await getPostsFromNotion();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const posts = await getPostsFromNotion();
  const post = posts.find((p) => p.slug === slug);

  return post
    ? {
        title: post.title,
      }
    : {};
};

export default PostPage;
