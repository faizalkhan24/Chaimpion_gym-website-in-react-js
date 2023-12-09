import React from 'react'
import './resons.css'

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
const resons = () => {
    return (
        <div className="resons" id='resons'>
            <div className="left-r">
                <img src={image1} alt="" srcset="" />
                <img src={image2} alt="" srcset="" />
                <img src={image3} alt="" srcset="" />
                <img src={image4} alt="" srcset="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className="stroke-text" >why</span>
                    <span> choose us ?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""></img>
                        <span>Lorem ipsum dolor
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Lorem ipsum dolor</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Lorem ipsum dolor</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Lorem ipsum dolor</span>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontweight: "normal" }}>
                    Our Partners
                </span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                    </div>
            </div>
        </div >
    )
}

export default resons