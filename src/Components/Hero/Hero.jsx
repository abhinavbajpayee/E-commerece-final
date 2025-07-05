import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from'../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>
                New Arivals Only
            </h2>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
             <div className="hero-latest-btn">
            <div>Latest Coleection</div>
            <img src={arrow_icon} alt=""/>
        </div>
        </div>
       
        <div className="hero-right">
            <div className="hero-girl-character">
            <img src={hero_imae} alt=""/>
            </div>
        </div>
    </div>
  )
}
