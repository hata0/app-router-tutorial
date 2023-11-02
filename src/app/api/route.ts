import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return Response.json({ message: "this is a GET request" });
};
