import NextLink from "next/link";
import { ComponentProps, forwardRef } from "react";

import { cn } from "../../../../utils/cn";

export type BaseLinkProps = Omit<ComponentProps<typeof NextLink>, "ref">;

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
  ({ children, className, ...rest }, forwardRef): JSX.Element => {
    return (
      <NextLink
        ref={forwardRef}
        className={cn(
          "flex w-fit cursor-pointer items-center justify-center",
          className,
        )}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

BaseLink.displayName = "BaseLink";
