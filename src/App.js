import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './index.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const getData = async () => {
    const gottenResponse = await fetch(url)
    const response = await gottenResponse.json()
  }
  return <>
    <div className='title'>
      <h2>Our Tours</h2>
    </div>
  <Tours />
  </>
}

export default App
