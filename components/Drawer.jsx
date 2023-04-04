import React from 'react'
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion"
import {
    SlSocialTwitter,
    SlSocialInstagram,
    SlSocialGithub,
    SlSocialW
  } from "react-icons/sl";

  import {FaWhatsapp} from "react-icons/fa"

const Drawer = ({drawerWidth, drawerPadding, toggle}) => {
  return (
    <motion.div transition={{duration:0.7}} animate={{width:drawerWidth, padding:drawerPadding}} className={styles.drawer}>
        
    <motion.a onClick={()=>toggle()} href="#works">WORKS</motion.a>
    <motion.a onClick={()=>toggle()} href="#about">ABOUT</motion.a>
    <motion.a onClick={()=>toggle()} href="#footer">CONTACT</motion.a>

    <div className={styles.social}>
      <a href="https://instagram.com/_pysavant.codes">
        <SlSocialInstagram size={30} color="white" />
      </a>
      <a href="https://twitter.com/pysavantcodes">
        <SlSocialTwitter size={30} color="white" />
      </a>
      <a href="https://github.com/pysavantcodes">
        <SlSocialGithub size={30} color="white" />
      </a>
      <a href="https://wa.me/+2348095794273">
        <FaWhatsapp size={30} color="white" />
      </a>
    </div>
  </motion.div>
  )
}

export default Drawer