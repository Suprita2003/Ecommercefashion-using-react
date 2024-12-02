import React from 'react'
import './Offers.css'
import excl from '../Assets/flash.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
        <h1>EXCLUSIVE
            Offers..!
        </h1>
        <p>*ONLY ON <b>BEST SELLERS</b> PRODUCTS*</p>
        <button>Check Now</button>
        </div>
      <div className='offers-right'>
        <img src={excl} alt='' />
      </div>
    </div>
  )
}

export default Offers
