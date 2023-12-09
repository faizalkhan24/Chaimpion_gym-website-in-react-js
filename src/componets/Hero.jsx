import React from 'react'
import './Hero.css'
import Header from '../Headers/Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import calories from '../assets/calories.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-best-add">
                    <div></div>
                    <span>the best club in town</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex itaque necessitatibus illum.
                        </span>
                    </div>
                </div>
                <div className="figers">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+900</span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Fitness program</span>
                    </div>
                </div>
                <div className="hero-button">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={heart} alt="" srcset="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burn</span>
                        <span>220 Kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero