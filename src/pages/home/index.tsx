import React from "react";
import TopNavBar from "../../higherOrderComponent/topNavBar";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <TopNavBar />
      <div className="bg-white h-screen flex justify-center items-center">
        <div> this is middle section</div>
      </div>
    </>
  );
};
export default Home;
