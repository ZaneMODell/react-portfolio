import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ZanePortfolio2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Zane O'Dell</h1>
        <h3 className="text-light" id='profileText'>UI and Gameplay Programmer</h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header