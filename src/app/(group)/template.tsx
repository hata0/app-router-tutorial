import { ReactNode } from "react";
import { FeedbackForm } from "./_layouts/domain/FeedbackForm";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <FeedbackForm label="Template Feedback" />
    </>
  );
};

export default Template;
