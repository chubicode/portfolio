import React from "react";
import styles from "./styles.module.css";
import Container from "../Container";

const MobileNavbar = () => {
  return (
    <div className={styles.mobileNavContainer}>
      <Container>
        <div className={styles.mobileNavBody}>
        <p>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact Me</li>
          
        </p>
        </div>
      </Container>
    </div>
  );
};

export default MobileNavbar;
