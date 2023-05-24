import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  return new Response("hello from the sever!!!");
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // if()
    const body = await req.json();
    const { email, name, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    // Check if user exist
    if (existingUser) {
      return new NextResponse(JSON.stringify({ error: "Email" }), {
        status: 422,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return new NextResponse(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: `Something went wrong: ${error}` }),
      { status: 400 }
    );
  }
}
