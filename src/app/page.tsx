import { NextPage } from "next";
import { SimpleButton } from "./_components/ui/domain/SimpleButton";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div>
      <div>こんにちは</div>
      <Link href="/count-up">link to count up page</Link>
    </div>
  );
};

export default HomePage;
