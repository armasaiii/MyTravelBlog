import "./form.css";
import React, { useState, useEffect } from "react";


// const Form = () => {
//     return (
//         <>
//           <div className="form-container">
//             <form className="signup-form">
//                 <input className="name-input" type="text" placeholder="name" name="name"/>
//                 <input className="email-input" type="text" placeholder="email" name="email" />
//                 <button className="submit-button" value="submit" type="submit">submit</button>
//             </form>
//         </div>
//         </>
//     )
// }

function Form() {
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
  
    return (
      <div className="App">
        <h1>{message}</h1>
      </div>
    );
  }

export default Form;