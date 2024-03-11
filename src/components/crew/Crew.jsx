import React,{useState} from 'react';


import './crew.css';
import Navbar from '../navbar/Navbar'
import spaceData from '../../data'

function Crew() {
  
  const [currentCrew, setCurrentCrew] = useState(spaceData.crew[0]);
  const {name, images, role, bio} = currentCrew;


  function handleSelectCrew(yourSelectedCrew) {
    setCurrentCrew(spaceData?.crew.filter(obj => obj.name.toLowerCase() === yourSelectedCrew)[0])
  }

  return (
    <section className='crew'>
      <Navbar />

      <main className='crew-container'>
        <p className="crew-heading">
          <b>02&ensp;</b>meet your crew
        </p>
        <div className="crew-content">
          <div className="crew-text-container">
            <div className="crew-text-content">
              <p className="crew-title-01">{role} </p>
              <p className="crew-title-02">{name} </p>
              <p className="crew-text-para">{bio} </p>
            </div>
            <div className="crew-slideshow-button-container">
              {/* below element having slideshow-button class will iterate with the list of crew member, and the current crew slide-button will be in active state */}
              
              {spaceData?.crew && spaceData.crew.map(obj => <div key={obj.name} className="slideshow-button" onClick={() => handleSelectCrew(obj.name.toLowerCase())} style={obj.name === name ? {backgroundColor: '#ffffff'} : {}} ></div>)}
            </div>
          </div>
          <div className="crew-image-container">
            <img src={images.png} alt={name} />
          </div>
        </div>
      </main>

    </section>
  )
}

export default Crew