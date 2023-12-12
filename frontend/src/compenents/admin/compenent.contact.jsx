import React, { useState } from "react";
import '../../contact.css'; // Make sure to adjust the path based on your project structure

export function Contact() {

  return (
    <>
     <div className="container-contact100">
      <div className="contact-form-container">
        <span className="form-title">Contact Us</span>

        <label className="form-label" htmlFor="first-name">Your Name *</label>
          <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name"/>
          <input className="input100" type="text" name="last-name" placeholder="Last name"/>

        <label className="form-label" htmlFor="email">Email Address *</label>
          <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com"/>

        <label className="form-label" htmlFor="phone">Phone Number</label>
          <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000"/>

          <label className="form-label" htmlFor="message">Message *</label><br/>
        <textarea id="message" className="form-textarea" name="message" placeholder="Please enter your comments..."></textarea>

        <div style={{ textAlign: 'center' }}>
          <button className="form-button">Submit</button>
        </div>
      </div>
    </div>
    </>
  );
}
