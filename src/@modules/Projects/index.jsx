import React from 'react'
import styles from './styles.module.css'
import Container from "../../shared/Container"

 const Projects = () => {
  return (
    <div id="projects"> 
    <div className={styles.projectcontainer}>
      <Container>
        <div className={styles.projecttextsection}>
          <h1>Projects</h1>
          <p>Some of the wonderful works I have done </p>
        </div>
        <div className={styles.projectmainsection}>
          <div>
            <img src="/assets/dog-img.jpg" alt="a borwn dog"/>
            <p>Tin Dog</p>
          </div>
          <div>
            <img src="/assets/mondrian.jpg" alt="a painting"/>
            <p>Mondrian Art</p>
          </div>
          <div>
            <img src="/assets/chubi.png" alt="Chubi in a blue suit"/>
            <p>Resume</p>
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}



export default Projects
