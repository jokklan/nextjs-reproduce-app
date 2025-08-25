import Link from "next/link";

export default async function Home() {
  return (
    <ul>
      <li>
        <Link href="/basic-auth">Basic Auth</Link>
      </li>
      <li>
        <Link href="/decompress">Decompress</Link>
      </li>
      <li>
        <Link href="/incorrect-headers">Incorrect Headers</Link>
      </li>
    </ul>
  );
}
