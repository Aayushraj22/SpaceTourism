import React from 'react'

import './home.css'
import Navbar from '../navbar/Navbar';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="home-body">

        <div className="text-content">
          <p className='home-subheading-1'>
            So, you want to travel to
          </p>
          <h1 className="home-heading">
            space
          </h1>
          <p className="home-heading-text">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore
          </p>
        </div>

        <div className="exploreCircle">
          Explore
        </div>
      </div>
    </div>
  )
}

export default Home;
