import React, { useState } from 'react'
import styles from './styles.module.css'
import Container from '../../shared/Container'

const Contact = () => {

  // State Management with useState: The useState hook is used to create state variables. In this case, data is an object that holds the form data (name, email, phone, message). The setData function is used to update this state.

const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

// The handleChange function is called whenever there is a change in any of the input fields. it updates  the corresponding property in the "data" note that this is because of the "onChange event handler" commonly used in react to capture and respond to changes in the value of an input element
const handleChange =(e)=>{
const name = e.target.name;
const value = e.target.value;
setData({...data, [name]: value})

  }


// e.target.name gets the name attribute of the input field.
// e.target.value gets the value entered by the user in the input field.
// setData is used to update the state, and the spread operator (...prevData) is used to keep the existing state properties unchanged.
// [e.target.name]: e.target.value updates the specific property in the state corresponding to the changed input.
// const handleChange = (e) => {
//   setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
// setData((prevData)=>({}))};
  



//The purpose of this function is to prevent the default behavior of a form submission, ensuring that the form doesn't trigger a page reload. It's commonly used with the onSubmit event of a form.
//


const handleSubmit =(e)=>{

    e.preventDefault()
    
    
  }

  return (
    
<form method="post" onSubmit={handleSubmit} className={styles.contactcontainer}>


<Container>
<div id="contacts" className={styles.contact}>
<h1>Contact <span>Me</span></h1>
      <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name"/>
      <input type="email" name="email" id="" onChange={handleChange} value={data.email}   placeholder="example@gmail.com"/>
      <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone}  placeholder="+234"/>
      <textarea name="message" id=""  onChange={handleChange} value={data.message} cols="30" rows="10" placeholder="type here..."/>
      <button type="submit">send</button>
      {/* <p>{data.name}, {data.email}, {data.phone}, {data.message}</p> */}
</div>

</Container>



</form>
    
    
  )
}


export default Contact