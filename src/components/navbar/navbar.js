import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import img from "../assets/icons/logo.svg";
import { Icon } from "@iconify/react";
import { Links } from "../../data";
import "./navbar.css";

export default function Navbar(props) {
  const changeBackground = () => {
    let navbar = document.querySelector(".nav-main");
    if (window.scrollY > 125 && props.mode === "light") {
      navbar.classList.add("toggle");
    } else {
      navbar.classList.remove("toggle");
    }
    // console.log(navbar);
  };
  window.addEventListener("scroll", changeBackground);
  console.log(window.scrollY);

  return (
    <div>
      <nav>
        <div
          className="nav-main"
          style={{
            color: `${props.textcolor}`,
            backgroundColor: `${props.mode === "black" ? "black" : ""}`,
          }}
        >
          <div className="nav-content">
            <a href="#">
              <img src={props.img} width="70" height="80" alt="error" />
            </a>

            <ul className="navbar-ul">
              {Links.map((link) => (
                <a
                  href={`#${link.path}`}
                  style={{ color: `${props.textcolor}` }}
                >
                  <li className="nav-items" key={link.id}>
                    {link.item}
                  </li>
                </a>
              ))}

              {/* <li className="nav-items">Home</li>
              <li className="nav-items">Skills</li>
              <li className="nav-items">Projects</li>
              <li className="nav-items">Contact</li> */}
            </ul>
            <div className="btn">
              <button type="button" className="btn1" onClick={props.toogleMode}>
                {props.icon}
              </button>
              <button
                type="button"
                style={{ color: `${props.textcolor}` }}
                className="btn2"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  icon: <Icon icon="akar-icons:sun" />,
};
