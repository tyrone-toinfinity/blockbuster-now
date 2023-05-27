import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

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
      return (
        NextResponse.json({ error: "Email Taken" }),
        {
          status: 422,
        }
      );
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
    return NextResponse.json({ user }), { status: 200 };
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
