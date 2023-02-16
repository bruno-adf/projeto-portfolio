import React from 'react'
import { useState } from 'react';
import { Portfolio } from './Style'

function Index({portfolio}) {
    const [index, setIndex] = useState(0);
  return (
    <Portfolio>
        <h1>Meu portfólio</h1>
        <div className='selector'>
          <button onClick={() => {if(index === 0) setIndex(2); else setIndex(index - 1)}}></button>
          <button onClick={() => {if(index === 2) setIndex(0); else setIndex(index + 1)}}></button>
        </div>
        <div className='container'>
          <div className='image' />
          <div className='text'>
            <div className='title'>
              <h1>{portfolio[index].title}</h1>
              <p>{portfolio[index].subtitle}</p>
            </div>
            <div className='info'>
              <div className='section'>{portfolio[index].paragraph1}</div>
              <div className='section'>{portfolio[index].paragraph2}</div>
            </div>
          </div>
        </div>
      </Portfolio>
  )
}

export default Index