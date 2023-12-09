import React from 'react'
import './Hero.css'
import Header from '../Headers/Header'
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
            <div className="right-h">this is right</div>
        </div>
    )
}

export default Hero