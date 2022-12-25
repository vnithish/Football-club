import React from 'react'
import './Reason.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import dugout from '../../assets/dugout.png'

function Reason() {

  return (

    <div className='Reason' id = "why">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>

            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>
            <div className="details-r">
                <div>
                    <img src={tick} alt="" />
                    <span>AIFF/AFC/NIS CERTIFIED COACHES</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>AGE/POSITION SPECIFIC TRAINING</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>PROFESSIONAL CLUB ASSISTANCE</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>AIFF/AFC APPROVED CURRICULUM</span>
                </div>
            </div>
            <span style={{color : 'var(--gray)', fontWeight: 'normal'}}>OUR PARTNERS</span>
            <div className="partner">
                <img src={dugout} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reason