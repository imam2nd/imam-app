import React from "react";
import MenuDropDown from "../component/menuDropDown";

interface Props {}

const TopNavBar: React.FC<Props> = () => {
  return (
    <header className="flex justify-end items-center h-20 top-0 sticky">
      <div className="mr-4">
        <MenuDropDown />
      </div>
    </header>
  );
};
export default TopNavBar;
