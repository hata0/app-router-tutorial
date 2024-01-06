"use client";
import { SimpleButton } from "../../components/ui/domain/SimpleButton";
import { useState } from "react";
import { LinkButton } from "@/components/ui/domain/LinkButton";

const CountUpPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col space-y-[16px]">
      <SimpleButton onClick={() => setCount((prev) => prev + 1)}>
        Click
      </SimpleButton>
      <div>{count}</div>
      <LinkButton href="/">Home Page</LinkButton>
    </div>
  );
};

export default CountUpPage;
