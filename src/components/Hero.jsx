import React from "react";
import Header from "./Header/Header";
import './Hero.css' ;

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>The Best Football Club In Town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div><span>
            Ideal Body</span></div>
        </div>
        <div>
          <span>
          In here we will help you level up your soccer skills.
          </span>
        </div>
      </div>
      <div className="right-h">
        Right Side
      </div>
    </div>
  )
}

export default Hero;