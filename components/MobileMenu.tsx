import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-blue-800 w-56 absolute top-8 left-0 py-5 flex-col border border-yellow-500 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center  text-yellow-500 hover:underline">
          Home
        </div>
        <div className="px-3 text-center text-yellow-500 hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-yellow-500 hover:underline">
          Films
        </div>
        <div className="px-3 text-center text-yellow-500 hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-yellow-500 hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-yellow-500 hover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
