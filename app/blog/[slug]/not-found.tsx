import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Post Not Found</h2>
      <Link href="/blog">
        <span>&larr;</span>
        <span>Go to list page</span>
      </Link>
    </div>
  );
}
