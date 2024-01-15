import React from "react";
import styles from "./styles.module.css";
import Container from "../Container";
import {saveAs} from "file-saver"

const MobileNavbar = ({scrollToSection, isMobileNavOpen, setIsMobileNavOpen}) => {

  const handleNavLinkClick =(sectionId)=>{
    scrollToSection(sectionId)
    setIsMobileNavOpen(false); // Close the mobile navbar after clicking a link
  };

  const handleResumeClick = ()=>{
    const resumeFilePath = "/assets/Chinwuba Okafor.pdf";

    saveAs(resumeFilePath, "Chinwuba Okafor.pdf")

    setIsMobileNavOpen(false);
  }

  
  return (
    <div className={`${styles.mobileNavContainer} ${isMobileNavOpen ? styles.open : ""}`}>
      <Container>
        <div className={styles.mobileNavBody}>
        <p>
            <li onClick={() => handleNavLinkClick("home")}>Home</li>
            <li onClick={() => handleNavLinkClick("about")}>About</li>
            <li onClick={() => handleNavLinkClick("skills")}>Skills</li>
            <li onClick={() => handleNavLinkClick("projects")}>Projects</li>
            <li onClick={handleResumeClick}>Resume</li>
            <li onClick={() => handleNavLinkClick("contacts")}>Contact Me</li>
          
        </p>
        </div>
      </Container>
    </div>
  );
};

export default MobileNavbar;
