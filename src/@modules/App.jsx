
import React from "react"
import Navbar from "../shared/Navbar"
import MobileNavbar from "../shared/MobileNavbar"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Footer from "../shared/Footer"


function App() {

  const scrollToSection = (sectionId) => {
    // console.log(`Scrolling to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log("Element:", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

return(


<>
<Navbar scrollToSection={scrollToSection} />
<MobileNavbar scrollToSection={scrollToSection}/>

<Home id="home"/>
<About id="about" />
<Skills id="skills"/>
<Projects id="projects"/>
<Resume id="Resume"/>
<Contact id="contacts"/>
<Footer/>

</>





);
}




export default App