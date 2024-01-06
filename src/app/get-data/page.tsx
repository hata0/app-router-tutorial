import { LinkButton } from "@/components/ui/domain/LinkButton";

type Data = {
  message: string;
  error: string;
};

const GetDataPage = async () => {
  const res = await fetch("http://localhost:3000/api/", { cache: "no-store" });
  const data: Data = await res.json();

  if (data.error) {
    throw new Error();
  }

  return (
    <div className="flex flex-col space-y-[16px]">
      <div>{data.message}</div>
      <LinkButton href="/">Home Page</LinkButton>
    </div>
  );
};

export default GetDataPage;
