import React, { useState } from 'react';
import Tour from './Tour';
import data from './data';

const Tours = () => {
  const [newData, setNewData] = useState(data)
  const deleteTour = (id) => {
    setNewData(prevData => {
      return prevData.filter((eachData => eachData.id !== id))
    })
  }
  return <>
  {newData.map(eachData => {
    return <Tour key={eachData.id} {...eachData} deleteTour={deleteTour}/>
  })}
  </>
};

export default Tours;
