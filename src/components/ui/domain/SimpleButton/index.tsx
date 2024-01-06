import { forwardRef } from "react";

import { cn } from "../../../../utils/cn";
import { BaseButton, BaseButtonProps } from "../../base/BaseButton";

export const SimpleButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { children, className, type = "button", ...rest },
    forwardRef,
  ): JSX.Element => {
    return (
      <BaseButton
        ref={forwardRef}
        className={cn(
          "h-[32px] rounded-[4px] border-[1px] bg-white px-[16px] py-[8px] font-medium",
          className,
        )}
        type={type}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

SimpleButton.displayName = "SimpleButton";
