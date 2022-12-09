import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_07z3ent', 'template_2shju69', form.current, 'cqNh9zym074sLOxZX')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
     <h2 className='text'> Contact me</h2>
     
     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>marynaswebart@gmail.com</h5>
          <a href="mailto:nz.maryna@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Maryna's Web Art</h5>
          <a href="https://www.facebook.com/people/Marynas-Web-Art/100088119677294/?mibextid=ZbWKwL" rel="noreferrer" target='_blank'>Send a message</a>
        </article>
      
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='user_name' placeholder='Your Full Name' required />
        <input type="email" name='user_email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>
     </section>
  )
}

export default Contact