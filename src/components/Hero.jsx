import React from "react";
import Header from "./Header/Header";
import './Hero.css' ;
// import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import soccer from "../assets/soccer.png"



import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring', duration:3};
  const mobile = window.innerWidth<=768 ? true : false; 
  return (
    <div className="hero" id="home">
      {/* <div class="blur hero-blur"></div> */}
      <div className="left-h">
        <Header />

        <div className="the-best-ad" style={{alignItems: "center"}}>
          <motion.div
            initial={{left: mobile? "165px":'238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>The Best Football Academy In Town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Level Up </span>
            <span>Your</span>
          </div>
          <div><span>
            Soccer Skill</span></div>
        
        <div>
          <span>
          In here we will help you level up your soccer skills.
          </span>
        </div>
        </div>
      

      {/*figures*/}
      <div className="figures">
        <div>
          <span>+5</span>
          <span>Coaches</span>
        </div>
        <div>
          <span>+50</span>
          <span>Members Joined</span>
        </div>
        <div>
        <span>+10</span>
        <span>Coaching Programs</span>
        </div>
      </div>

      <div className="hero-buttons">
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
      </div>
    </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        className="heart-rate"
        transition={transition}
        whileInView={{right: "4rem"}}
        initial={{right: "-1rem"}}>
          <img src={Heart} alt="" />
          <span>Stamina</span>
          <span>89</span>
        </motion.div>

        <img src={soccer} alt="" className="hero-image" />
        <motion.img 
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div className="goals"
        transition={transition}
        whileInView={{right: "35rem"}}
        initial={{right: "37rem"}}>
          <img src={Calories} alt="" />
          <div>
            <span>Goals Scored</span>
            <span>10+</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;