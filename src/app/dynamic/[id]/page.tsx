import { LinkButton } from "@/components/ui/domain/LinkButton";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = (
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Metadata => {
  const id = params.id;

  return {
    title: {
      absolute: id,
    },
  };
};

const DynamicPage = ({ params, searchParams }: Props) => {
  return (
    <div>
      <div>{params.id}</div>
      <LinkButton href="/">link to home page</LinkButton>
    </div>
  );
};

export default DynamicPage;
