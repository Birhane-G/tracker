import React from 'react'
import "../style/location_dash.css";

function Location() {
  return (
    <section>
      <h1>Location</h1>
      <div className='map'>
        

      </div>
      <div className='loc'>
        <div className='continent'>
          <select id='con'>
          <option value="none" selected disabled hidden>Continent</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Australia</option>
            <option>Europe</option>
            <option>North America</option>
            <option>South America</option>
          </select>

        </div>
        <div className='country'>
        <select id='cou'>
          <option value="none" selected disabled hidden>Country</option>
          </select>

        </div>
        <div className='rigsta'>
        <select id='rs'>
          <option value="none" selected disabled hidden>Region/State</option>
          </select>

        </div>

      </div>
    </section>
  )
}

export default Location;