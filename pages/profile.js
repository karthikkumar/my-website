import Link from "next/link";

export default function Profile() {
  return (
    <>
      <h1>my profile</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
