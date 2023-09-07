import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <h3>Game programming is my passion, and I want to make the best looking and feeling experiences possible</h3>

      <div className="container experience__container">
      <div className="skill_container">
          <h3>Hard Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Unity</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>C/C++</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>JIRA/Confluence</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Javascript/TypeScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Unreal Engine 5</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>ARM Assembly</h4>
              </div>
            </article>
          </div>
          
        </div>
        <div className='skill_container' id='soft_skills'>
            <h2>Soft Skills</h2>
            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Collaboration</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Workflow and Development Pipeline Knowledge</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Strong Desire to Learn</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Strong Problem-Solving Skills</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Strong Passion For Developing Software and Games</h4>
                </div>
            </article>
            </div>
      </div>
      </section>
  )
}

export default Experience