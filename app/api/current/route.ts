import { NextResponse, NextRequest } from "next/server";
import serverAuth from "@/libs/serverAuth";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest, res: NextResponse) {
  // const { session } = await serverAuth(req);
  // const { data: session, status } = await useSession();
  // const session = await getServerSession(authOp)
  return new NextResponse("session");
}
