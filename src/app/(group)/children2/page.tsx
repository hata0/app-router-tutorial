import { LinkButton } from "@/components/ui/domain/LinkButton";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col space-y-[16px]">
      <div>children2</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/">link to home page</LinkButton>
        <LinkButton href="/children1">link to children1 page</LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
