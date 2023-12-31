import React from 'react'
import './plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const plan = () => {
    return (
        <div className="plan-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="program-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">ready to start</span>
                <span>your journy</span>
                <span className="stroke-text">now with us</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>
                                see more benefits 
                            </span>
                        </div>
                        <button className="btn">Join</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default plan