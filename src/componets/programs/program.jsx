import React from 'react'
import './program.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
const program = () => {
  return (
    <div className="program" id="program">
        <div className="program-header">
            <span className="stroke-text">Explore Our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="categories">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" srcset="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default program