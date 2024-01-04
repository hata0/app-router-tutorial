import { forwardRef } from "react";

import { twcx } from "../../../../utils/twcx";
import { BaseLink, BaseLinkProps } from "../../base/BaseLink";

type Props = BaseLinkProps;

export const LinkButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...rest }, forwardRef): JSX.Element => {
    return (
      <BaseLink
        ref={forwardRef}
        className={twcx(
          "h-[40px] rounded-[6px] bg-zinc-900 px-[16px] py-[8px] text-[14px] font-medium text-blue-500 hover:bg-zinc-900/90",
          className,
        )}
        {...rest}
      >
        {children}
      </BaseLink>
    );
  },
);

LinkButton.displayName = "LinkButton";
