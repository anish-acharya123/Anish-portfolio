import React from "react";
import "./footer.css";
import { Icons } from "../../data";
import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <>
      <div className="main-footer">
        <div>
          <div className="footer-icons">
            {Icons.map((icon, id) => (
              <a href={`${icon.link}`} key={`${icon.id}`} target="_blank" rel="noreferrer">
                <Icon
                  icon={`${icon.svg}`}
                  color={props.mode === "light" ? "black" : "white"}
                />
              </a>
            ))}
          </div>
          <div className="footer-text">
            {" "}
            ©2020 Build by anish-acharya,Nepal{" "}
          </div>
        </div>
      </div>
    </>
  );
}
