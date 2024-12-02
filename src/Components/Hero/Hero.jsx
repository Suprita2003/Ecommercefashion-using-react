import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.png';
import heroimg from '../Assets/heroimage.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroleft'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className='herohandicon'>
            <p>new</p>
            <img src={hand} alt='' />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        
      </div>
      <div className='heroright'>
        <img className='rightimage' src={heroimg} alt='' />
      </div>
    </div>
  )
}

export default Hero
