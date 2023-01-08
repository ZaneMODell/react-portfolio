import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <small>3 years of college and 3 month software development internship</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Employers</h5>
              <small>Michigan State University, Auto-Owners Insurance</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Multiple video game projects, React development projects, wxWidgets software development</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About