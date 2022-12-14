import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Links } from "../../data";
import "./navbar.css";
import { Link } from "react-scroll";
import img from ".//..//../assets/icons/logo.svg";
import img1 from ".//..//../assets/icons/dark3.svg";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 125) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const [apply, setApply] = useState(true);

  const change = () => {
    setApply(!apply);
    if (apply === true && window.innerWidth < 700) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  //icon color change

  let changeColor = `${
    (props.mode === "light" && scroll === true ? "white" : "") ||
    (props.mode === "black" ? "white" : "")
  }`;

  let moon = <Icon icon="bytesize:moon" color={changeColor} />;
  let sun = <Icon icon="akar-icons:sun" color={changeColor} />;

  //change icon
  let iconChange = `${
    (props.mode === "light" && scroll === true ? img1 : "") ||
    (props.mode === "light" && scroll === false ? img : "") ||
    (props.mode === "black" ? img1 : "")
  }`;

  return (
    <div>
      <nav
        style={{
          color: `${props.textcolor}`,

          backgroundColor: `${props.mode === "black" ? "#2e2e2e" : "white"}`,
        }}
      >
        <div className={`nav-main ${scroll === true ? " toggle " : ""}`}>
          <div className="nav-content">
            <a href="/">
              <img className="nav-img" src={iconChange} alt="error" />
            </a>

            <ul
              className={`navbar-ul  ${
                (apply === true && window.innerWidth < 700
                  ? "toggle none"
                  : "") ||
                (scroll === true && apply === false ? "toggle " : "") ||
                (props.mode === "light" ? "light-mode-ul" : "dark-mode-ul")
              }`}
              id="ul"
            >
              {Links.map((link) => (
                <Link
                  key={link.id}
                  activeClass="active"
                  className="link"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={`${link.path}`}
                  style={{ color: `${props.textcolor}` }}
                >
                  <li
                    className={`nav-items`}
                    onClick={change}
                    key={link.id}
                    style={{
                      color: `${
                        props.mode === "light" && scroll === false
                          ? "black"
                          : "white"
                      }`,
                    }}
                  >
                    {link.item}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="btn">
              <button type="button" className="btn1" onClick={props.toogleMode}>
                {props.mode === "light" ? moon : sun}
              </button>
              <button className="hamburger" onClick={change}>
                {apply === true ? (
                  <Icon icon="charm:menu-hamburger" color={changeColor} />
                ) : (
                  <Icon icon="charm:cross" color={changeColor} />
                )}
              </button>
              <button
                type="button"
                style={{
                  color: `${
                    props.mode === "light" && scroll === false
                      ? "black "
                      : "White"
                  }`,
                }}
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
