"use client";
import { NextPage } from "next";
import { SimpleButton } from "../_components/ui/domain/SimpleButton";
import { useState } from "react";
import Link from "next/link";

const CountUpPage: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>items</div>
      <SimpleButton onClick={() => setCount((prev) => prev + 1)}>
        click
      </SimpleButton>
      <div>{count}</div>
      <Link href="/">link to home page</Link>
    </div>
  );
};

export default CountUpPage;
