"use client";

import { BaseButton } from "@/components/ui/base/BaseButton";
import { LinkButton } from "@/components/ui/domain/LinkButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomePage = () => {
  const [dynamicId, setDynamicId] = useState("");
  const [navigationId, setNavigationId] = useState("");
  const [navigationQuery, setNavigationQuery] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dynamic/${dynamicId}`);
  };

  const moveNavigationPage = () => {
    router.push(`/navigation/${navigationId}?${navigationQuery}`);
  };

  return (
    <div className="flex flex-col space-y-[16px]">
      <div>こんにちは</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/count-up">Count Up Page</LinkButton>
        <LinkButton href="/get-data">Get Data Page</LinkButton>
        <LinkButton href="/children1">Children1 Page</LinkButton>
        <LinkButton href="/intercepting">Intercepting Page</LinkButton>
        <LinkButton href="/require-login">Reqiure Login Page</LinkButton>
      </div>
      <div className="flex space-x-[8px]">
        <input
          onChange={(e) => setDynamicId(e.target.value)}
          value={dynamicId}
          className="w-[128px] rounded-[4px] border-[1px] border-black px-[8px]"
        />
        <BaseButton
          onClick={handleClick}
          className="h-[40px] rounded-[6px] bg-zinc-900 px-[16px] py-[8px] text-[14px] font-medium text-blue-500 hover:bg-zinc-900/90"
        >
          Dynamic Page
        </BaseButton>
      </div>
      <div className="flex h-full items-center space-x-[8px]">
        <div>Params</div>
        <input
          onChange={(e) => setNavigationId(e.target.value)}
          value={navigationId}
          className="h-[40px] w-[128px] rounded-[4px] border-[1px] border-black px-[8px]"
        />
        <div>Query</div>
        <input
          onChange={(e) => setNavigationQuery(e.target.value)}
          value={navigationQuery}
          className="h-[40px] w-[128px] rounded-[4px] border-[1px] border-black px-[8px]"
        />
        <BaseButton
          onClick={moveNavigationPage}
          className="h-[40px] rounded-[6px] bg-zinc-900 px-[16px] py-[8px] text-[14px] font-medium text-blue-500 hover:bg-zinc-900/90"
        >
          Navigation Page
        </BaseButton>
      </div>
    </div>
  );
};

export default HomePage;
