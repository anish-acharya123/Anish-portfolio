import React from "react";
import "./contact.css";
import { Contacts } from "../../data";
export default function Contact(props) {
  return (
    <div
      className="main-contact"
      style={{
        backgroundColor: `${
          props.mode === "light" ? "rgb(111 180 202)" : "#2e2e2e"
        }`,
      }}
      id="contact"
    >
      <div>
        <div className="contact-start">LET'S CHAT</div>
        <div className="contact-end"> Send us a Messsage</div>
      </div>
      <div className="contact-contain">
        <form
          className="contact-first"
          action="https://formspree.io/f/mvoynbbb"
          method="post"
        >
          <input
            className="contact-form"
            type="text"
            placeholder="Name"
            name="Username"
          />
          <input
            className="contact-form"
            type="email"
            placeholder="Email"
            name="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="contact-btn" type="submit">
            send message
          </button>
        </form>
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
