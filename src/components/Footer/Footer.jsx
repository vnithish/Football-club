import React, { useRef } from 'react';
import Map from '../Maps/Map'
import './Footer.css'
import Insta from '../../assets/instagram.png'
import frame from "../../assets/logo.png"
import water from '../../assets/watermark.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import emailjs from '@emailjs/browser';

function Footer() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pbjfh3l', 'template_szywj2t', form.current, 'sL9pDKU_P2TxigadV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="footer-cont">

    <div className='footer'>
        <div className="left-f">
            <h3>Contact : +91 70927 88767</h3>
            <h3>Email : prosoccerschool.pss@gmail.com</h3>
            <Map/>
        </div>
        <div className="media-icons">
            <a href="https://www.instagram.com/prosoccerschool/">
            <img src={Insta} alt="" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=917092788767">
              <WhatsAppIcon/>
            </a>
        </div>
        <div className="right-f">
            <img src={frame} alt="" />
        </div>
        <div className="forms">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Contact Number</label>
        <input type="number" name="user_number" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
    <div className="water">
    <img src={water} alt="" />
    <h4>Made by Plan-B Studios</h4>
    </div>
    
    </div>
  )
}

export default Footer