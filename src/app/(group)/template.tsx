import { FeedbackForm } from "@/components/layouts/domain/FeedbackForm";
import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <FeedbackForm label="Template Feedback" />
    </>
  );
};

export default Template;
