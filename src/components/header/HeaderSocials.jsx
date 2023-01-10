import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaItchIo } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/zaneodell/" target="_blank"><BsLinkedin/></a>
        <a href="https://zaneodell.itch.io/" target="_blank"><FaItchIo /></a>
        <a href="https://github.com/ZaneMODell" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials