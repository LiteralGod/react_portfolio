import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me2.png'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thomas Christensen</h1>
        <h5 className="text-light">Software engineer student</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header