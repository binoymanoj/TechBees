import React from 'react';
import "./contactus.css";
import Lottie from "lottie-react";
import contactus_animation from "./contactus_animation.json";

const Contactus = () => {
  return (
    <div className='contactpage'>
      <div class="cardform">
        <h4 className='worktogether'>Let's Work Together</h4>
        <h3 className='talktous'>Talk to Us</h3>
        <div class="container">
          <form id="registration-form">
            <div>
              <input type="text" id="name" name="name" placeholder='Name' required />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email ID' required />
            </div>
            <div>
              <input type="text" id="contact" name="contact" placeholder='Contact Number' required />
            </div>
            <div>
              <input type="text" id="subject" name="subject" placeholder='Subject' required />
            </div>
            <div>
              <select id="gender" name="gender" required>
                <option value="">Please select enquiry type</option>
                <option value="product-demo">Product Demo</option>
                <option value="general-enquiry">General Enquiry</option>
                <option value="customer-support">Customer Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <button type="submit" onclick="validateForm()">Submit</button>
          </form>
        </div>
      </div>
      <Lottie loop={true} animationData={contactus_animation} className='contactusanimation' />
    </div>
  )
}

export default Contactus