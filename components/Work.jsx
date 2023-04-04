import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "../styles/Home.module.css";

const Work = ({ keyVal, image, name, about, lang, link, github }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-out-sine"
      data-aos-duration={`${keyVal + 1 * 150}`}
      key={keyVal}
      className={styles.work}
    >
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{about}</p>
      <p className={styles.lang}>{lang}</p>
      <div>
        <a href={github}>
          <FiGithub color="white" />
        </a>
        {link === "" ? null : (
          <a href={link}>
            <FiExternalLink color="white" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Work;
