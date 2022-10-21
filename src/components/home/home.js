import React from "react";
import "./home.css";
import { Icon } from "@iconify/react";
import Typewriter from "typewriter-effect";
import { Icons } from "../../data";

export default function home(props) {
  return (
    <div className="home-main" id="home">
      <div className="home-content">
        <div className="home-first">
          <div className="home-name">
            <div className="name-start">Hi, My Name is</div>
            <div className="name-end">
              Anish <span>Acharya</span>
            </div>
            <div className="writer">
              I'm a
              <span>
                <Typewriter
                  options={{
                    strings: ["Full Stack Web Developer", "Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
          <p className="home-description">
            {" "}
            Currently studing Bsc.Csit at Butwal Multiple Campus
          </p>
          <div className="home-icons">
            {Icons.map((icon, id) => (
              <a href={`${icon.link}`} key={`${icon.id}`} target="_blank">
                <Icon
                  icon={`${icon.svg}`}
                  color={props.mode === "light" ? "black" : "white"}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="home-second">
          <div className="image-div"></div>
        </div>
      </div>
    </div>
  );
}
