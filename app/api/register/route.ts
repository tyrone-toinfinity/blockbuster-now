import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";

export async function GET(req: Request) {
  return new Response("hello from the sever!!!");
}

export async function POST(req: Request, res: Response) {
  try {
    // if()
    const body = await req.json();
    const { email, text, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    // Check if user exist
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email Taken" }), {
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

    return new Response(JSON.stringify({ user }), { status: 200 });

    // return new Response(console.log(email));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Something went wrong: ${error}` }),
      { status: 400 }
    );
  }
}
