import React, { memo } from "react";
import { FiGithub, FiExternalLink, FiPlay } from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const Work = ({
  keyVal,
  image,
  name,
  about,
  lang,
  link,
  github,
  playstore,
  ios
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="ease-out-sine"
      data-aos-duration={`${keyVal + 1 * 150}`}
      key={keyVal}
      className={styles.work}
    >
      <div style={{height:"200px", overflow:"hidden", marginBottom:".5rem"}}><img src={image} alt="" /></div>
      <h3>{name}</h3>
      <p>{about}</p>
      <p className={styles.lang}>
        {lang.split(",").map((stack, index) => {
          return (
            <span
              key={index}
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "fit-content",
                borderRadius:"15px",
                paddingTop:"8px"
              }}
            >
              {stack}
            </span>
          );
        })}
      </p>
      <div>
        {github === "" ? null : (
          <a href={github}>
            <FiGithub color="white" />
          </a>
        )}
        {link === "" ? null : (
          <a href={link}>
            <FiExternalLink color="white" />
          </a>
        )}
        {playstore == "" ? null : (
          <a href={playstore}>
            <FaGooglePlay color="white" />
          </a>
        )}
        {ios == "" ? null : (
          <a href={ios}>
            <FaApple color="white" size={21}/>
          </a>
        )}
      </div>
    </div>
  );
};

export default memo(Work);
