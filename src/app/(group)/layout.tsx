import { ReactNode } from "react";
import { FeedbackForm } from "./_layouts/domain/FeedbackForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "layoutとtemplate",
};

const ChildrenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col space-y-[16px]">
      {children}
      <FeedbackForm label="Layout Feedback" />
    </div>
  );
};

export default ChildrenLayout;
