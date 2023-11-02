import { NextPage } from "next";
import Link from "next/link";

type Data = {
  message: string;
};

const GetDataPage: NextPage = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const data: Data = await res.json();

  return (
    <div>
      <div>{data.message}</div>
      <Link href="/count-up">link to count up page</Link>
    </div>
  );
};

export default GetDataPage;
