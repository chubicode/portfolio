import React from 'react'
import styles from "./styles.module.css"
import Container from '../Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  
  return (

    
    
   <div className={styles.footercontainer}> 
   <Container>

   <p>Copyright © {currentYear} Chinwuba Okafor</p>

   </Container>
   
   
   </div>

 
  )
}

export default Footer