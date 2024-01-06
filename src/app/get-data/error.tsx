"use client";

import { SimpleButton } from "@/components/ui/domain/SimpleButton";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      <div>Something went wrong!</div>
      <SimpleButton onClick={() => reset()}>Try again</SimpleButton>
    </div>
  );
};

export default Error;
