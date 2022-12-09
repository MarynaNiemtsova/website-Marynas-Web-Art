import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import FOOTER from '../../assets/logo_footer.png'

const Footer = () => {
  return (
    <footer>
 <div className="logo__footer">
         <img src={FOOTER} alt=""/>
        </div>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
<div className="footer__socials">
  <a href="https://www.facebook.com/people/Marynas-Web-Art/100088119677294/?mibextid=ZbWKwL" rel="noreferrer" target='_blank' ><FaFacebookF/></a>
  <a href="https://www.instagram.com/marynaswebart/" rel="noreferrer" target='_blank' ><FiInstagram/></a>
  <a href="https://twitter.com/maryna_nz" rel="noreferrer" target='_blank' ><IoLogoTwitter/></a>
</div>

<div className="footer__copyright">
  <small>&copy; MARYNA'S WEB ART. All rights reserved.</small>
</div>

    </footer>
  )
}

export default Footer