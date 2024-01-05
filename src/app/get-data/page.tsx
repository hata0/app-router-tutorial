import { LinkButton } from "@/components/ui/domain/LinkButton";
import { NextPage } from "next";

type Data = {
  message: string;
};

const GetDataPage: NextPage = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const data: Data = await res.json();

  return (
    <div className="flex flex-col space-y-[16px]">
      <div>{data.message}</div>
      <LinkButton href="/count-up">link to count up page</LinkButton>
    </div>
  );
};

export default GetDataPage;
