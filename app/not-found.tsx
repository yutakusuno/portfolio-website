import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
