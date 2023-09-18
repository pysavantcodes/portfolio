import React from "react";
import styles from "../styles/Home.module.css";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialGithub,
} from "react-icons/sl";
import {FaWhatsapp} from "react-icons/fa"

const Nav = () => {
  return (
    <nav
    >
      {/* <a href="#header">PYSAVANT</a> */}
      <a href="#works">WORKS</a>
      <a href="#about">ABOUT</a>
      <a href="#footer">CONTACT</a>

      <div className={styles.social}>
      <a href="https://instagram.com/_pysavant.codes">
        <SlSocialInstagram size={22} color="white" />
      </a>
      <a href="https://twitter.com/pysavantcodes">
        <SlSocialTwitter size={22} color="white" />
      </a>
      <a href="https://github.com/pysavantcodes">
        <SlSocialGithub size={22} color="white" />
      </a>
      <a href="https://wa.me/+2348095794273">
        <FaWhatsapp size={22} color="white" />
      </a>
      </div>
    </nav>
  );
};

export default Nav;
