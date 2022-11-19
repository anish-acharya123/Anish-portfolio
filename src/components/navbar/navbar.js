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
      ul.classList.add("toggle");
      ul.classList.remove("toggle-ul");
    } else {
      navbar.classList.remove("toggle");
      ul.classList.remove("toggle");
      ul.classList.add("toggle-ul");
    }
    // console.log(navbar);
  };
  window.addEventListener("scroll", changeBackground);

  // const [move, setMove] = useState();
  // document.addEventListener("scroll", () => {
  //   const maxHeight = document.body.scrollHeight - window.innerHeight;
  //   setMove((window.pageYOffset * 100) / maxHeight);
  // });

  let notCross = "charm:menu-hamburger";
  let Cross = "charm:cross";
  const [apply, setApply] = useState(false);
  // const [putin, setPutin] = useState(false);

  let ul = document.querySelector(".navbar-ul");
  let link = document.querySelector(".nav-items");
  const change = () => {
    setApply(!apply);
    if (apply === true) {
      ul.classList.add("none");
      link.classList.add("none");
    } else {
      ul.classList.remove("none");
      link.classList.remove("none");
    }
  };

  return (
    <div>
      <nav
        style={{
          color: `${props.textcolor}`,
          backgroundColor: `${props.mode === "black" ? "black" : ""}`,
        }}
      >
        <div className="nav-main">
          <div className="nav-content">
            <a href="#">
              <img className="nav-img" src={props.img} alt="error" />
            </a>

            <ul
              className="navbar-ul"
              id="ul"
              style={{
                backgroundColor: `${props.mode === "black" ? "black" : ""}`,
              }}
            >
              {Links.map((link) => (
                <Link
                  activeClass="active"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={`${link.path}`}
                  style={{ color: `${props.textcolor}` }}
                >
                  <li className={`nav-items`} onClick={change} key={link.id}>
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
                className="hamburger"
                onClick={change}
                style={{
                  color: `${props.textcolor}`,
                }}
              >
                <Icon icon={apply ? Cross : notCross} />
              </button>
              <button
                type="button"
                style={{ color: `${props.textcolor}` }}
                className="btn2"
                id="navbar-btn"
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
