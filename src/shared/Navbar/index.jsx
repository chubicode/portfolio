/* objective of  this Navbar is as follows 
1. Display normally on a page Home, About, Skills, Projects, Resume, Contact Me
2. When page is reduced below a particular screen sixe it brings out a hamburger Menu
3. Once clicked hamburger menu all Navbar menu appears stacked on one another 
NOte that they are all links leading to one part in the page// */





//*/
import React from 'react'
import Container from "../Container"
import styles from "./Navbar.module.css"
import Hamburger from "../Hamburger"
import MobileNavbar from "../MobileNavbar"
import {useState, useEffect} from "react"
import {saveAs} from "file-saver"



const Navbar = ({scrollToSection}) =>{
 
const[isMobileNavOpen, setIsMobileNavOpen] = useState(false)
 
 
 
  /* const handleHamburgerClick = () => setIsMobileNavOpen(isMobileNavOpen ? false : true);
//*/
  const handleHamburgerClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  };

  const handleResumeClick = ()=>{
    const resumeFilePath = "/assets/Chinwuba Okafor.pdf";

    saveAs(resumeFilePath, "Chinwuba Okafor.pdf")

    setIsMobileNavOpen(false);
  }

  //  useEffect(()=>{}, [])know this useEffect syntax and know peace, it determines whne an effect should run and the empty array signifies that the effect should run once and  the effect will run once when the component mounts, and it won't run again unless the component is unmounted and remounted.

  useEffect(()=>{
    window.addEventListener("resize", toggleMobileNavOnResize);

    return ()=> window.removeEventListener("resize",toggleMobileNavOnResize)
  }, [])

  const toggleMobileNavOnResize =()=>{
    if(window.innerWidth > 768){
      setIsMobileNavOpen(false)
    }
  }
  
  return (

<nav className={styles.nav}>

<Container>

  <ul>
    <li className={styles.title} onClick={() => scrollToSection("title")}>CO</li>
    <li onClick={() => scrollToSection("home")}>Home</li>
    <li onClick={()=> scrollToSection("about")}>About</li>
    <li onClick={()=> scrollToSection("skills")}>Skills</li>
    <li onClick={()=> scrollToSection("projects")}>Projects</li>
    <li onClick={handleResumeClick}>Resume</li>
    <li onClick={()=> scrollToSection("contacts")}>Contact Me</li>
    <Hamburger handleClick={handleHamburgerClick}/>
  </ul>

</Container>
{isMobileNavOpen && <MobileNavbar/>}
{isMobileNavOpen && <MobileNavbar scrollToSection={scrollToSection} isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />}

</nav>



  )
}


export default Navbar 


/* {isMobileNavOpen && <MobileNavbar />} means if isMobileNavOpen return <MobileNavbar/> else return nothing
//*/