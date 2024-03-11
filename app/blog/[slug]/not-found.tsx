import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>Post Not Found</h2>
      <Link href='/blog'>
        <span>&larr;</span>
        <span>Go to list page</span>
      </Link>
    </div>
  );
};

export default NotFound;
