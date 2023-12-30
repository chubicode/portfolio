import React from 'react'
import styles from './styles.module.css'
import Container from "../../shared/Container"

 const Projects = () => {
  return (
    <div> 
    <div className={styles.projectcontainer}>
      <Container>
        <div className={styles.projecttextsection}>
          <h1>Projects</h1>
          <p>Some of the wonderful works I have done </p>
        </div>
        <div className={styles.projectmainsection}>
          <div>
            <img src="/assets/dog-img.jpg"/>
            <p>Tin Dog</p>
          </div>
          <div>
            <img src="/assets/mondrian.jpg"/>
            <p>Mondrian Art</p>
          </div>
          <div>
            <img src="/assets/chubi.png"/>
            <p>Resume</p>
          </div>
        </div>
      </Container>
    </div>
    </div>
  )
}



export default Projects
