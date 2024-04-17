import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Styles/HomePage.css";
import { ReactTyped } from "react-typed";

function HomePage() {
  return (
    <div className="HomePage">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="Page1">
        <div className="Page1-Header">GEOTECTONICS</div>
        <p className="Page1-strings">
          <ReactTyped
            className="typing"
            strings={[
              "Shaping Earth's Evolution",
              "Unveiling Geological Mysteries",
              "Forging the Landscape of Tomorrow",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </p>
      </div>
      <div className="Page2">
        <div className="Page1-Header">no</div>
      </div>
    </div>
  );
}

export default HomePage;
