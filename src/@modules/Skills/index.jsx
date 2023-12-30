import React from 'react'
import styles from "./styles.module.css"
import Container from "../../shared/Container"

 const Skills = () => {
  return (
<div>
  <div className={styles.skills}>
    <Container>
    <div className={styles.skillscontainer}>
    <div>
      <img src="/assets/html5.png"/>
      </div>
       
      <div>
      <img src="/assets/css.jpeg"/>
      </div>

      <div>
      <img src="/assets/bootstrap.png"/>
      </div>

      <div>
      <img src="/assets/react.png"/>
      </div>

      <div>
      <img src="/assets/node.jpg"/>
      </div>



    </div>
    
        
      
      
        
     
    </Container>
  </div>
</div>
    
  )
}


export default Skills