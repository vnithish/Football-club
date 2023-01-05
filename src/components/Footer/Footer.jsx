import React, { useRef } from "react";
import Map from "../Maps/Map";
import "./Footer.css";


import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

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
  };
  return (
    <div className="footer">
      <div className="location">
        <Map />
      </div>
      <div className="forms">
        <form ref={form} onSubmit={sendEmail}>
          <p>Contact Us</p>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Contact Number</label>
          <input type="text" name="user_number" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Submit" style={{backgroundColor:'black', color:'white'}}/>
        </form>
      </div>
    </div>
  );
}

export default Footer;
