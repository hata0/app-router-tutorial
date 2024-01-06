"use client";
import { SimpleButton } from "@/components/ui/domain/SimpleButton";
import { useRouter } from "next/navigation";

const InterceptingPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-[16px]">
      <div className="text-red-500">intercepting</div>
      <SimpleButton
        className="text-blue-500"
        onClick={() => {
          router.back();
        }}
      >
        back
      </SimpleButton>
    </div>
  );
};

export default InterceptingPage;
