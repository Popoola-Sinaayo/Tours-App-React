import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, deleteTour}) => {
  const halfLength = info.length/2
  const halfWord = info.slice(0, halfLength.toFixed())
  const [displayedWord, setDisplayedWord] = useState(halfWord)
  const [moreLess, setMoreLess] = useState('Read More')
  const handleChange = () => {
    setDisplayedWord(prevData => {
      if (prevData === halfWord) {
        return info
      } else {
        return halfWord
      }
    })
    setMoreLess(prevData => {
      if (prevData === 'Read More') {
        return 'Read Less'
      }
      else {
        return 'Read More'
      }
    })
  }
  return <main>
  <div className='single-tour'>
    <img src={image} alt={name} ></img>
    <footer>
    <div className='tour-info'>
      <h4>{name}</h4>
      <p className='tour-price'>${price}</p>
    </div>
    <p>{displayedWord} ...
    <button onClick={handleChange}>{moreLess}</button>
    </p>
    <button className='delete-btn' onClick={() => deleteTour(id)}>Not Interested</button>
    </footer>
  </div>
  </main>;
};

export default Tour;
