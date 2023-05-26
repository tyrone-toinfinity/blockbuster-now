import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";

export async function getServerSideProps(content: NextPageContext) {
  const session = await getSession(content);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl text-yellow-400">Block Buster Now</h1>
      <button className="h-10 w-full bg-white">Logout</button>
    </main>
  );
}
