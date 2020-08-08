import React, { Component } from "react";

class Header extends Component {
  /* componentDidUpdate(prevProps, prevState) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if (prevProps.headerSpan !== this.props.headerSpan) {
      document.getElementById("stat").innerHTML = "Completed";
      document.getElementById("stat").style.backgroundColor = bgColor;
    }
  }*/

  render() {
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
        <span
          id="stat"
          style={{
            fontSize: "19px",
            fontStyle: "italic",
            textAlign: "center",
            color: "#038203",
          }}
        ></span>
      </header>
    );
  }
}

export default Header;
