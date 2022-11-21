import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Links } from "../../data";
import "./navbar.css";
import { Link } from "react-scroll";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 125 && props.mode === "light") {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  let notCross = <Icon icon="charm:menu-hamburger" />;
  let Cross = <Icon icon="charm:cross" />;
  const [apply, setApply] = useState(true);

  const change = () => {
    setApply(!apply);
    if (apply === true && window.innerWidth < 700) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
        <div className={scroll === true ? "nav-main toggle " : "nav-main"}>
          <div className="nav-content">
            <a href="#">
              <img className="nav-img" src={props.img} alt="error" />
            </a>

            <ul
              className={`navbar-ul  ${
                (apply === true ? "toggle none" : "") ||
                (scroll === true && apply === false ? "toggle " : "")
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
                {apply === true ? notCross : Cross}
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
