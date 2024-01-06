"use client";

import { LinkButton } from "@/components/ui/domain/LinkButton";
import { SimpleButton } from "@/components/ui/domain/SimpleButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomePage = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dynamic/${text}`);
  };

  return (
    <div className="flex flex-col space-y-[16px]">
      <div>こんにちは</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/count-up">link to count up page</LinkButton>
        <LinkButton href="/children1">link to children1 page</LinkButton>
        <LinkButton href="/intercepting">intercepting</LinkButton>
        <LinkButton href="/require-login">reqiure login</LinkButton>
      </div>
      <div className="flex space-x-[8px]">
        <SimpleButton onClick={handleClick}>link to dynamic page</SimpleButton>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-[128px] rounded-[4px] border-[1px] border-black px-[8px]"
        />
      </div>
    </div>
  );
};

export default HomePage;
