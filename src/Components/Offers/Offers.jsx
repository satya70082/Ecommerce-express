import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>only on best sellers products</p>
        <button>Check Now</button>

      </div>
      <div className="right">
        <img src={exclusive_image} alt='' />  

      </div>
      
    </div>
  )
}

export default Offers
