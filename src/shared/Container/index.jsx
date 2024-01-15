import React from "react"
import styles from "./styles.module.css"



/*  Passes a prop children, so anything contained in the container will adhere to the parameter mention in the styles.modules.css. Everything thing will align to the center even in big screens. It passes a prop children will be applied in other places//*/

const Container =({children}) =>{

return (

<div className={styles.container}>
{children}
</div>

)

}


export default Container