import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ocasbpa', 'template_qqqrczx', form.current, '2YgMjOBvzHseRIKyv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='contact__text'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zanemodell@gmail.com</h5>
            <a href="mailto:zanemodell@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="text" name='company' placeholder='Your Company' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact