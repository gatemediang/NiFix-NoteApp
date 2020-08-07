import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "25px",
          textAlign: "center",
          marginBottom: "15px",
          color: "#038203",
        }}
      >
        NiFix NoteApp
      </h1>
      <p
        style={{
          fontSize: "19px",
          fontStyle: "italic",
          textAlign: "center",
          color: "#038203",
        }}
      >
        Please add to-dos item(s) through the input field
      </p>
    </header>
  );
};

export default Header;
