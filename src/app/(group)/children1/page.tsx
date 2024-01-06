import { LinkButton } from "@/components/ui/domain/LinkButton";

const Children1Page = () => {
  return (
    <div className="flex flex-col space-y-[16px]">
      <div>Children1</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/">Home Page</LinkButton>
        <LinkButton href="/children2">Children2 Page</LinkButton>
      </div>
    </div>
  );
};

export default Children1Page;
