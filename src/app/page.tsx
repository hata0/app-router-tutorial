import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <div>こんにちは</div>
      <Link href="/count-up">link to count up page</Link>
      <Link href="/children1">link to children1 page</Link>
      <Link href="/intercepting">intercepting</Link>
    </div>
  );
};

export default HomePage;
