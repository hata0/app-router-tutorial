import { ReactNode } from "react";
import { FeedbackForm } from "./_layouts/domain/FeedbackForm";

const ChildrenTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <FeedbackForm label="Template Feedback" />
    </>
  );
};

export default ChildrenTemplate;
