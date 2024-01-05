import { ReactNode } from "react";
import { FeedbackForm } from "./_layouts/domain/FeedbackForm";

const ChildrenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <FeedbackForm label="Layout Feedback" />
    </div>
  );
};

export default ChildrenLayout;
