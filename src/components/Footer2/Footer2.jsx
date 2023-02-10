import React from "react";
import "./Footer2.css";
import Insta from "../../assets/instagram.png";
import frame from "../../assets/logo.png";
import water from "../../assets/watermark.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Footer2() {
  return (
    <div className="footer2">
      <div className="left">
        <img src={frame} alt="" style={{ borderRadius: 40 }} />
        <a href="https://www.instagram.com/prosoccerschool/">
          <img src={Insta} alt="" />
        </a>
        <a href="https://wa.me/919514499646">
          <WhatsAppIcon />
        </a>
      </div>
      <div className="right">
        <a href="https://planbstudios.space/">
          <p>Made by Plan-B Studios</p>
          <img src={water} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer2;
