// import { NextResponse, NextRequest } from "next/server";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  return new Response("currenUser");
}
