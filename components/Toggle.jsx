import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive'



const Hamburger = ({toggle, isOpen}) => {
  const isSmallScreen = useMediaQuery({query:"(max-width: 1000px)"});

  return (
    <button onClick={()=>toggle()} style={!isSmallScreen ? styles.smallButton : styles.button}>
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
  button: {
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
    display:"none",
    
  },
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
