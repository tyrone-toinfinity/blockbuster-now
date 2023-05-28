import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
  return (
    <div
      className={
        active
          ? "text-yellow-500 cursor-default"
          : "text-yellow-500 hover:text-yellow-300 cursor-pointer transition"
      }
    >
      {label}
    </div>
  );
};

export default NavbarItem;
