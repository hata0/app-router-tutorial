import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "App router の%sを使ってみる",
    default: "App router を使ってみる",
  },
  description: "App router の新機能を利用したサイト",
};

type Props = {
  children: ReactNode;
  parallel: ReactNode;
};

const RootLayout = ({ children, parallel }: Props) => {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col space-y-[16px]">
          {children}
          {parallel}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
