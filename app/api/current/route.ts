import { NextResponse, NextRequest } from "next/server";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   // const { currentUser } = await serverAuth(req);
//   // return NextResponse.json(currentUser);
//   return new Response("hello");
// }

export async function GET(req: Request) {
  return new Response("hello from the sever!!!");
}
