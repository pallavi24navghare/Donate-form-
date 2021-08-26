import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div>
            <div className="container">
  
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your First name" required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your Last name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email Address</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div className="input-box-1">
            <span className="details-1">Address</span>
            <input type="text" placeholder="Enter your Address" required/>
          </div>
           <div className="input-box-2">
            <span className="details-1">Additional Note</span>
            <input type="text" placeholder="Smething About you!" required/>
          </div> 
          <div className="input-box-3">
          <span className="details">Amount</span>
          <span className="details-2">How much would you like to Donate?</span>
            <input type="text" placeholder="$" required/>
          </div>
         
         
         
        </div>
       
        <div className="button">
          <input type="submit" value="Donate"/>
        </div>
      </form>
    </div>
  </div>

            
        </div>
    )
}

export default Form

