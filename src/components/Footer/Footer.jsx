import React from 'react'
import Map from '../Maps/Map'
import './Footer.css'
import Insta from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import frame from "../../assets/logo.png"
import water from '../../assets/watermark.png'

function Footer() {
  return (
    <div className="footer-cont">

    <div className='footer'>
        <div className="left-f">
            <h3>Contact : +91 70927 88767</h3>
            <h3>Email : @.com</h3>
            <Map/>
        </div>
        <div className="media-icons">
            <img src={Insta} alt="" />
            <img src={LinkedIn} alt="" />
        </div>
        <div className="right-f">
            <img src={frame} alt="" />
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