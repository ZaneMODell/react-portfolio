import React from 'react'
import CV from "../../assets/Zane_ODell_Resume_1-10-2024.pdf"

const CTA = () => {
  return (
    <div classname= 'cta'>
        <a href={CV} download className='btn' id='resumeButton'>Download Resume</a>
        <a href="#contact" className='btn btn-primary' id='contactButton'>Contact Me</a>
    </div>
  )
}

export default CTA 