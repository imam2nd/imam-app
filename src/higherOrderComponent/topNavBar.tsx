import React from "react";
import { MenuIcon } from "@heroicons/react/solid";

interface Props {}

const TopNavBar: React.FC<Props> = () => {
  return (
    <header className="flex items-center h-20 top-0 sticky">
      <MenuIcon className="h-7 w-7 text-gray-800 justify-end mr-3" />
    </header>
  );
};
export default TopNavBar;
