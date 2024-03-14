import React from 'react'
import './ContactPage.css'
const ContactPage = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src="./assets/message.png" alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni in eaque, nisi inventore qui optio exercitationem accusantium minima, porro quam cum nihil blanditiis. Culpa sapiente eligendi incidunt? In, quas.</p>
        <ul>
            <li><img src="./assets/mail.png" alt="" />aeduz@gmail.com</li>
            <li><img src="./assets/phone.png" alt="" />+91 123456789</li>
            <li><img src="./assets/location.png" alt="" />magni in eaque, nisi inventore qui</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your Name" />
            <label>Your Email</label>
            <input type="email" name="name" placeholder="Enter your Email" />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number"/>
            <label>Your Role as Query</label>
            <input type="text" name="name" placeholder="Enter your Query" />
            <label >Write your message here</label>
            <textarea name="message" row="6" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn-cs">Submit now </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
