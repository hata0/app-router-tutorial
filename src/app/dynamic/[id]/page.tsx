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

export const dynamicParams = false;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const DynamicPage = ({ params, searchParams }: Props) => {
  return (
    <div>
      <div>{params.id}</div>
      <LinkButton href="/">Home Page</LinkButton>
    </div>
  );
};

export default DynamicPage;
