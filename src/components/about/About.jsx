import React from 'react'
import './about.css'
import ME from '../../assets/ZanePortfolio1.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 years of college level computer science projects and a 3 month long software development internship specializing in Angular development</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Employers</h5>
              <small>Michigan State University, </small>
              <small>
                Auto-Owners Insurance</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Multiple video game projects in the Unity game engine, React portfolio, wxWidgets software development, simple proxy server, mail server, client and server applications</small>
            </article>
          </div>
          <p>
            Through computer science and software development, I feel as if I've found my creative outlet to create great things.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About