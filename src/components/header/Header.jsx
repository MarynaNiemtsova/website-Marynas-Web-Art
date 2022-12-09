import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'
import COMPUTER from '../../assets/Girl desktop.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
      <div className="logo">
         <img src={LOGO} alt=""/>
        </div>
        <div className='header__maine'>
          <article className='header'>
        <h2 className='text'>Hi, I'm</h2>
        <h1 className='text my__name'>Maryna</h1>
        <h1 className="text">I like making things for the web </h1> 
        </article>
        <div className='header_image'><img  src={COMPUTER} alt="computer"/></div>
       
      <div className='btn__contact'><a href="#contact" className='btn'>Contact me!</a></div>
    
      </div>
      
        <HeaderSocials />

        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header