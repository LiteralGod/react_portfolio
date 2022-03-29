import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thomas Christensen</h1>
        <h5 className="text-light">Software engineer student</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header