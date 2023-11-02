import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <div>children2</div>
      <Link href="/">link to home page</Link>
      <Link href="/children1">link to children1 page</Link>
    </div>
  );
};

export default HomePage;
