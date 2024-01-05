import { FeedbackForm } from "@/components/layouts/domain/FeedbackForm";
import { ReactNode } from "react";

const ChildrenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <FeedbackForm label="Layout Feedback" />
    </div>
  );
};

export default ChildrenLayout;
