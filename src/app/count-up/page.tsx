"use client";
import { NextPage } from "next";
import { SimpleButton } from "../../components/ui/domain/SimpleButton";
import { useState } from "react";
import { LinkButton } from "@/components/ui/domain/LinkButton";

const CountUpPage: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col space-y-[16px]">
      <SimpleButton onClick={() => setCount((prev) => prev + 1)}>
        click
      </SimpleButton>
      <div>{count}</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/">link to home page</LinkButton>
        <LinkButton href="/get-data">link to get data page</LinkButton>
      </div>
    </div>
  );
};

export default CountUpPage;
