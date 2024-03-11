import React, { useState } from 'react'


import './technology.css'
import Navbar from '../navbar/Navbar'
import spaceData from '../../data';


function Technology() {
  const [currentTech , setCurrentTech ] = useState(spaceData.technology[0]);
  const {name, images, description} = currentTech;

  function handleSelectedTechnology(selectedTech) {

    setCurrentTech(spaceData?.technology.filter(obj => obj.name.toLowerCase() === selectedTech)[0])
  }

  return (
    <main className='technology'>
      <Navbar />
      <section className="technology-content-container">
        <p className='technology-subheading-01'><b>03&ensp;</b>space launch 101</p>
        <section className="technology-content">
          <div className="technology-text-content">
            <ul className="pagination">
              {spaceData?.technology && spaceData.technology.map((obj, index) => <li key={obj.name} className={obj.name === name ? 'active' : ''} onClick={()=> handleSelectedTechnology(obj.name.toLowerCase())}> {index+1} </li>) }
            </ul>
            <div className="technology-text-container">
                <p className="technology-subtitle-01">the terminology...</p>
                <p className="technology-title">{name} </p>
                <p>{description} </p>
            </div>
          </div>
          <div className="technology-image-content">
            <img src={images.portrait} alt={name} />
          </div>
        </section>
      </section>
    </main>
  )
}

export default Technology