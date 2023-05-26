"use client";

import useCurrentUser from "@/hooks/userCurrentUser";
import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";

// export async function getData(content: NextPageContext) {
//   const session = await getSession(content);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }
//   return { props: {} };
// }
export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <main className="">
      <h1 className="text-4xl text-yellow-400">Block Buster Now</h1>
      {/* <p className="text-red-500">Logged in as : {user?.name}</p> */}
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </main>
  );
}
