import React from "react";
import { motion } from "framer-motion";
import stylesG from "../styles/Home.module.css";


const Hamburger = ({toggle, isOpen}) => {

  return (
    <button onClick={()=>toggle()} className={stylesG.hamburger} style={styles.smallButton}>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        style={styles.line}
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0,y: isOpen ? -11 : 0  }}
        transition={{ duration: 0.3 }}
        style={{ ...styles.line, ...styles.line2 }}
      />
    </button>
  );
};

const styles = {
  smallButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    outline: "none",
    padding: 0,
    width: "60px",
    position:"absolute",
    top:"3rem",
    zIndex:"9999999",
    right:"2.5rem",
    display:"flex",
    
  },
  line: {
    backgroundColor: "white",
    height: "2px",
    width: "100%"
  },
  line2: {
    marginTop: "10px"
  }
};

export default Hamburger;
