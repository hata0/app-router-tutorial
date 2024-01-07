import { LinkButton } from "@/components/ui/domain/LinkButton";
import { SimpleButton } from "@/components/ui/domain/SimpleButton";

const FormPage = () => {
  const create = async (formData: FormData) => {
    "use server";

    console.log(formData);
  };

  return (
    <form action={create} className="flex flex-col space-y-[16px] p-[8px]">
      <input
        type="text"
        name="1"
        className="w-[128px] rounded-[4px] border-[1px] border-black px-[8px]"
      />
      <div className="flex space-x-[8px]">
        <SimpleButton type="submit">Try Server Actions</SimpleButton>
        <LinkButton href="/">Home Page</LinkButton>
      </div>
    </form>
  );
};

export default FormPage;
