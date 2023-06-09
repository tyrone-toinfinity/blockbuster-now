import { signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-blue-800 w-56 absolute top-14 right-0 py-5 flex-col border-2 border-yellow-600 flex ">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src="/images/profile-10.png"
            alt=""
            width={50}
            height={50}
          />
          <p className="text-yellow-500 text-sm hover:text-yellow-300">
            {currentUser?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => signOut()}
        className="px-3 text-center text-yellow-500 text-sm hover:text-color-300"
      >
        Sign out of Blockbuster
      </div>
    </div>
  );
};

export default AccountMenu;
