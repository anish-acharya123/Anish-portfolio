import React from "react";
import "./contact.css";
import { Contacts } from "../../data";
export default function Contact(props) {
  return (
    <div
      className="main-contact"
      style={{
        backgroundColor: `${props.mode === "light" ? "#f0f0f0" : "black"}`,
      }}
      id="contact"
    >
      <div>
        <div className="contact-start">LET'S CHAT</div>
        <div className="contact-end"> Send us a Messsage</div>
      </div>
      <div className="contact-contain">
        <div className="contact-first">
          <input className="contact-form" type="text" placeholder="Name" />
          <input
            className="contact-form"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="contact-btn" type="button">
            send message
          </button>
        </div>
        <div className="contact-second">
          {Contacts.map((contact, id) => (
            <div className="contact-second-all">
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-details-all">
                <div className="contact-name">{contact.item}</div>
                <div className="contact-details">{contact.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
