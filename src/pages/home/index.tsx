import React from "react";
import TopNavBar from "../../higherOrderComponent/topNavBar";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <TopNavBar />
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div> this is middle section</div>
      </div>
    </>
  );
};
export default Home;
