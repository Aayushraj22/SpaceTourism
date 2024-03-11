import React, { useState } from 'react'

import './destination.css'
import Navbar from '../navbar/Navbar'
import spaceData from '../../data.js'

// import moon from '../../assets/destination/image-moon.png';

function Destination() {
  // console.log('data : ',spaceData)
  
  const [destination, setDestination] = useState(spaceData.destinations[0])
  const { name, images, description, distance, travel } = destination;
  // console.log('image: ', images.png)

  // method to select a particular destination
  function handleToDestination(selectedDestination) {
    const yourDestination = spaceData.destinations.filter(obj => obj.name.toLowerCase() === selectedDestination);

    setDestination(yourDestination[0]);
  }

  return (
    <div className='destination'>
      <Navbar />
      <div className="destination-body">
        <p className="destination-subheading-01">
          <b>01&ensp;</b>pick your destination</p>

        <div className="destination-content">
          <div className="destination-image">
            <img src={images.png} alt={name} />
          </div>

          <div className="destination-text-content">
            <div className="destination-tags">
              {spaceData.destinations.map((obj) => { return <span key={obj.name} onClick={() => handleToDestination(obj.name.toLowerCase())} className={obj.name === name ? 'isActive' : ''} >{obj.name}</span> })}
            </div>

            <p className="destination-title">{name}</p>
            <p className="destination-text-01">{description} </p>

            <div className="destination-text-footer">
              <div className="destination-calculated-data">
                <p className="destination-calculated-data-01">
                  avg. distance
                </p>
                <p className="destination-calculated-data-02">
                  {distance}
                </p>
              </div>

              <div className="destination-calculated-data">
                <p className="destination-calculated-data-01">
                  est. travel time
                </p>
                <p className="destination-calculated-data-02">
                  {travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination