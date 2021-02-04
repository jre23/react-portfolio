import React from "react";

const styles = {
  background: {
    backgroundColor: "#c1c8e4"
  },

  borderPosition: {
    borderTop: "solid",
    borderColor: "#314455",
    borderWidth: "6px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  },

  colors: {
    color: "rgb(108, 117, 125)"
  }
};

const Footer = () => {
  return (
    <footer className="text-center py-1" style={styles.background, styles.borderPosition}>
      <p className="mb-0 py-2" style={styles.colors}>
        &copy; Copyright 2020 Joel Estrada
</p>
    </footer>
  )
}

export default Footer;