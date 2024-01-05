import { ReactNode } from "react";

const Children1Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>children layout</div>
      {children}
    </div>
  );
};

export default Children1Layout;
