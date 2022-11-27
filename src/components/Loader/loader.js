import React from "react";
import Typewriter from "typewriter-effect";
import "./loader.css";
import img from ".//..//../assets/icons/logo.svg";
import img1 from ".//..//../assets/icons/dark3.svg";

const loadercomp = (props) => {
  return (
    <>
      <div className="loader">
        <div className="content">
          <div
            className="spine"
            id="spine"
            style={{
              borderBottom: `3px solid ${
                props.mode === "light" ? "black" : "white"
              }`,
            }}
          ></div>
          <img src={props.mode === "light" ? img : img1} alt="error" />
          <div className="writer-load">
            <Typewriter
              options={{
                strings: ["Loading..."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default loadercomp;
