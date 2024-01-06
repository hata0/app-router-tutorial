import { LinkButton } from "@/components/ui/domain/LinkButton";

const Children2Page = () => {
  return (
    <>
      <div>Children2</div>
      <div className="flex space-x-[8px]">
        <LinkButton href="/">Home Page</LinkButton>
        <LinkButton href="/children1">Children1 Page</LinkButton>
      </div>
    </>
  );
};

export default Children2Page;
