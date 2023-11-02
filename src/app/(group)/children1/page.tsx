import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <div>children1</div>
      <Link href="/">link to home page</Link>
      <Link href="/children2">link to children2 page</Link>
    </div>
  );
};

export default HomePage;
