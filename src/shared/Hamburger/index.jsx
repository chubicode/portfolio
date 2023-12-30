/*  Here we will be creating the hamburger bar and also creating a function that when the hamburger menu is clicked something happenes and for this we will be using the onClick event//*/


/* we will  be passing a props which will be used somewhere else in our code the onClick event we will also call handleClick//*/

/* we will be passing an onClick event stating that when the hamburger is clicked something must happen. we created a function called Hamburger and passed in a prop called handleClick (destructuring)//*/


import styles from "./styles.module.css";


const Hamburger = ({handleClick}) => {

  return (
<div className={styles.hamburgerContainer} onClick={handleClick}>

<div></div>

<div></div>

<div></div>

</div>

  );
};


export default Hamburger;