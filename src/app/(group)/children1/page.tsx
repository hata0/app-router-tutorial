import { LinkButton } from "@/components/ui/domain/LinkButton";

const Children1Page = () => {
  return (
    <div className="flex flex-col space-y-[16px]">
      <div>children1</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/">link to home page</LinkButton>
        <LinkButton href="/children2">link to children2 page</LinkButton>
      </div>
    </div>
  );
};

export default Children1Page;
