"use client";

import { LinkButton } from "@/components/ui/domain/LinkButton";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const NavigationPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="flex flex-col space-y-[16px]">
      <div>{searchParams}</div>
      <div>{pathname}</div>
      <div>{params.id}</div>
      <LinkButton href="/">Home Page</LinkButton>
    </div>
  );
};

export default NavigationPage;
