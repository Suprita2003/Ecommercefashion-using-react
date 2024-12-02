import React from 'react'
import './Footer.css'
import image from '../Assets/image.png';
import insta from '../Assets/insta1.png';
import pint from '../Assets/pint1.jpg';
import wapp from '../Assets/wapp1.avif';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={image} alt='' />
        <p>Shop Here</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={insta} alt='' />
        </div>
        <div className='footer-icons-container'>
            <img src={pint} alt='' />
        </div>
        <div className='footer-icons-container'>
            <img src={wapp} alt='' />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright@2024-All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
