import React from "react";

interface Props {}

const TopNavBar: React.FC<Props> = () => {
  return (
    <header className="flex justify-center items-center h-20 bg-primary top-0 sticky">
      <p className="text-white text-lg font-medium">This is top navbar</p>
    </header>
  );
};
export default TopNavBar;
