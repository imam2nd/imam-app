import React from "react";

// interface Props {}

const TopNavBar = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        borderBottom: "1px solid",
        background: "green",
      }}
    >
      <p style={{ color: "white", fontSize: "15px", fontWeight: 500 }}>
        This is top navbar
      </p>
    </header>
  );
};
export default TopNavBar;
