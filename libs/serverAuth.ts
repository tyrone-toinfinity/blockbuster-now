"use client";
import { NextResponse, NextRequest } from "next/server";
import { useSession } from "next-auth/react";
import prismadb from "./prismadb";
import { redirect } from "next/navigation";
import { Provider } from "unlighthouse";
import { getServerSession } from "next-auth/next";

const serverAuth = async (req: NextRequest) => {
  // const session = await getServerSession({ req });
  // if (status === "authenticated") {
  //   return "we are in!!!";
  // }
  // if (!session?.user?.email) {
  //   throw new Error("Not signed in");
  // }
  // const currentUser = await prismadb.user.findUnique({
  //   where: {
  //     email: session.user.email,
  //   },
  // });
  // if (!currentUser) {
  //   throw new Error("Not sign in");
  // }
  // return { session };
};

export default serverAuth;
