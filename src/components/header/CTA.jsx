import React from 'react'
import CV from '../../assets/Zane_ODell_Resume_Final (1).pdf'

const CTA = () => {
  return (
    <div classname= 'cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA