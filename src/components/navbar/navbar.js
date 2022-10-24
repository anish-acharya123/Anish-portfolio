import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import img from "../assets/icons/logo.svg";
import { Icon } from "@iconify/react";
import { Links } from "../../data";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-scroll";

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

  // const [move, setMove] = useState();
  // document.addEventListener("scroll", () => {
  //   const maxHeight = document.body.scrollHeight - window.innerHeight;
  //   setMove((window.pageYOffset * 100) / maxHeight);
  // });

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
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={`${link.path}`}
                  style={{ color: `${props.textcolor}` }}
                >
                  <li className={`nav-items`} key={link.id}>
                    {link.item}
                  </li>
                </Link>
              ))}
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
