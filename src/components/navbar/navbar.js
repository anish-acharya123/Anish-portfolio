import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Links } from "../../data";
import "./navbar.css";
import { Link } from "react-scroll";
import img from ".//..//../assets/icons/logo.svg";
import img1 from ".//..//../assets/icons/dark.svg";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 125 && props.mode === "light") {
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
  // console.log(scroll);

  return (
    <div>
      <nav
        style={{
          color: `${props.textcolor}`,
          backgroundColor: `${props.mode === "black" ? "black" : ""}`,
        }}
      >
        <div className={scroll === true ? "nav-main toggle " : "nav-main"}>
          <div className="nav-content">
            <a href="#">
              <img className="nav-img" src={iconChange} alt="error" />
            </a>

            <ul
              className={`navbar-ul  ${
                (apply === true && window.innerWidth < 700
                  ? "toggle none"
                  : "") || (scroll === true && apply === false ? "toggle " : "")
              }`}
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
                      // borderBottom: ` 1px solid ${
                      //   props.mode === "light" && scroll === false
                      //     ? "#0087ca"
                      //     : "white"
                      // }`,
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
              <button
                className="hamburger"
                onClick={change}
                style={
                  {
                    // color: `${props.textcolor}`,
                  }
                }
              >
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
