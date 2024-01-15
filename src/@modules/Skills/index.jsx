import React from 'react'
import styles from "./styles.module.css"
import Container from "../../shared/Container"

 const Skills = () => {
  return (
<div id="skills">
  <div className={styles.skills}>
    <Container>
    <div className={styles.skillscontainer}>
    <div>
      <img src="/assets/html5.png" alt="logo"/>
      </div>
       
      <div>
      <img src="/assets/css.jpeg" alt="log"/>
      </div>

      <div>
      <img src="/assets/bootstrap.png" alt="logo"/>
      </div>

      <div>
      <img src="/assets/react.png" alt="logo"/>
      </div>

      <div>
      <img src="/assets/node.jpg" alt="logo"/>
      </div>



    </div>
    
        
      
      
        
     
    </Container>
  </div>
</div>
    
  )
}


export default Skills