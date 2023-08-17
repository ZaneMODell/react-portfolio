import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Can I Do?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>Javascript/TypeScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>Angular</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div>

        {/*END OF FRONTEND*/}

        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>C/C++</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>C#</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>ARM Assembly</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
        </div>
        </div>
      </div>
      </section>
  )
}

export default Experience