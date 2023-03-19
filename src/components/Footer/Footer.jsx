import React, { useRef } from "react";
import "./Footer.css";
import { useState } from "react";
import { PopupButton } from "@typeform/embed-react";

import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();
  const [nameText, setName] = useState("");
  const [phnText, setPhn] = useState("");
  const [msgText, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbjfh3l",
        "template_szywj2t",
        form.current,
        "sL9pDKU_P2TxigadV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMsg("");
    setName("");
    setPhn("");
  };
  return (
    <div className="footer">
      <div className="location">
        <h2>Venues</h2>
        <div className="location-item">OMR</div>
        <div className="location-item">Kotturpuram</div>
        <div className="location-item">Adayar</div>
      </div>
      <div className="typeforms">
        <h2>Forms</h2>
        <PopupButton
          id="akCz15gd"
          style={{
            padding: 15,
            border: 2,
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "start",
            cursor: "pointer",
          }}
        >
          Rate Us
        </PopupButton>
        <PopupButton
          id="wRmYkvzZ"
          style={{
            padding: 15,
            border: 2,
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "start",
            cursor: "pointer",
          }}
        >
          Join us as a Player
        </PopupButton>

        <PopupButton
          id="DKiZXBgA"
          style={{
            padding: 15,
            border: 2,
            backgroundColor: "white",
            fontWeight: "bold",
            textAlign: "start",
            cursor: "pointer",
          }}
        >
          Join us as a Coach
        </PopupButton>
      </div>
      <div className="forms">
        <form ref={form} onSubmit={sendEmail}>
          <p>Contact Us</p>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={nameText}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Contact Number</label>
          <input
            type="text"
            name="user_number"
            value={phnText}
            onChange={(e) => setPhn(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={msgText}
            onChange={(e) => setMsg(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            style={{ backgroundColor: "black", color: "white" }}
          />
        </form>
      </div>
    </div>
  );
}

export default Footer;
