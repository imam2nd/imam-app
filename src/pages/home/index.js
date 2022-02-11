import React from "react";
import TopNavBar from "../../higherOrderComponent/topNavBar";

// interface Props {}

const Home = () => {
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
        <div style={{ position: "top" }}> this is middle section</div>
      </div>
    </>
  );
};
export default Home;
