import { LinkButton } from "@/components/ui/domain/LinkButton";

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-[16px]">
      <div>Not Found</div>
      <div>Could not find requested resource</div>
      <LinkButton href="/">Return Home</LinkButton>
    </div>
  );
};

export default NotFound;
