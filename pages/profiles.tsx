import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";

const images = [
  "/images/profile-1.png",
  "/images/profile-2.png",
  "/images/profile-3.png",
  "/images/profile-4.png",
  "/images/profile-5.png",
  "/images/profile-6.png",
  "/images/profile-7.png",
  "/images/profile-8.png",
  "/images/profile-9.png",
  "/images/profile-10.png",
  "/images/profile-11.png",
  "/images/profile-12.png",
  "/images/profile-13.png",
  "/images/profile-14.png",
  "/images/profile-15.png",
  "/images/profile-16.png",
  "/images/profile-17.png",
  "/images/profile-18.png",
  "/images/profile-19.png",
  "/images/profile-20.png",
  "/images/profile-21.png",
  "/images/profile-22.png",
];

interface UserCardProps {
  name: string;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 22)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="w-44 h-44 p-1 flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-yellow-300 overflow-hidden rounded-full ">
        <Image
          draggable={false}
          className="w-max h-max object-contain"
          src={imgSrc}
          alt=""
          width={250}
          height={250}
        />
      </div>
      <div className="mt-4  text-yellow-500 text-2xl text-center group-hover:text-yellow-300  cursor-pointer">
        {name}
      </div>
    </div>
  );
};

const App = () => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-yellow-500 text-center">
          {`Who's Watching`}
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10 ">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
