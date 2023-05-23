// import bcrypt from "bcrypt";
// import { NextApiRequest, NextApiResponse } from "next";
// import prismadb from "@/libs/prismadb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     if (req.method !== "POST") {
//       return res.status(405).end();
//     }

//     const { email, name, password } = req.body;

//     const existingUser = await prismadb.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (existingUser) {
//       return res.status(422).json({ error: "Email taken" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const user = await prismadb.user.create({
//       data: {
//         email,
//         name,
//         hashedPassword,
//         image: "",
//         emailVerified: new Date(),
//       },
//     });
//     return console.log("yes!!!");
//   } catch (err) {
//     console.log(err);
//     return res.status(400).end();
//   }
// }

import bcrypt from "bcrypt";
import { NextApiHandler, NextApiRequest } from "next";
import prismadb from "@/libs/prismadb";

export const handler = async (req: Request, res: Response) => {
  if (req.method === "GET") {
    return new Response("hello from the BOBBY!!!");
  } else if (req.method === "POST") {
    // Handle the POST request
    return new Response("Handling POST request...");
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
};

// try {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { email, name, password } = req.body;

//   const existingUser = await prismadb.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (existingUser) {
//     return res.status(422).json({ error: "Email taken" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 12);
//   const user = await prismadb.user.create({
//     data: {
//       email,
//       name,
//       hashedPassword,
//       image: "",
//       emailVerified: new Date(),
//     },
//   });

//   console.log("yes!!!");
//   return res.status(200).end();
// } catch (err) {
//   console.log(err);
//   return res.status(400).end();
// }
// };

// export async function GET(req: Request) {
//   return new Response("hello from the sever!!!");
// }
// export async function DELETE(req: Request) {
//   return new Response("hello from the sever!!!");
// }
