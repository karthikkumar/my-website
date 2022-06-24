import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>my blog</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
