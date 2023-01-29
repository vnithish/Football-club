import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
// import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import soccer from "../assets/soccer.png";
import NumberCounter from "number-counter";

import { Link } from "react-scroll";

import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div class="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad" style={{ alignItems: "center" }}>
          <motion.div
            initial={{ left: mobile ? "80px" : "100px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Pro Soccer School</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Start </span>
            <span>Your</span>
          </div>

          <div>
            <span>professional</span>
          </div>
          <span>journey with us</span>
          <div>
            <span>Transforming players from grassroots to professional.</span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={5} start={1} delay="1" preFix="+" />
            </span>
            <span>Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={25} delay="1" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>

          <div>
            <span>
              <NumberCounter end={5} start={0} delay="1" preFix="+" />
            </span>

            <span>Coaching Programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link
            className="get-started"
            to="programs"
            spy={true}
            smooth={true}
            activeClass="active"
          >
            <buttons className="btn">Get Started</buttons>
          </Link>
        </div>
      </div>
      <div className="right-h">
        <Link
          className="join-us"
          to="join-us"
          spy={true}
          smooth={true}
          activeClass="active"
        >
          <button className="btn">Join Us</button>
        </Link>
        <motion.div
          className="heart-rate"
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
        >
          <img src={Heart} alt="" />
          <span>Stamina</span>
          <span>89</span>
        </motion.div>

        <img src={soccer} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        <motion.div
          className="goals"
          transition={transition}
          whileInView={{ right: "35rem" }}
          initial={{ right: "37rem" }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Goals Scored</span>
            <span>10+</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
