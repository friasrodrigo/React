import React, { useState } from 'react'
import './style.css'


export const Estados = () => {
  const [Count, setCount] = useState(0)

  const contadorSumar = ()=>{
    if(Count == 5) return
    setCount(Count + 1)
  }
  
  const contadorRestar = () => {
    if(Count == -5) return
    setCount(Count - 1)
  }

  return (
    <>
        <div className='container'>
            <div></div>
            <p>Contador</p>
            <input type='text' value={Count}/>
            <div className='btnContainer'>
                <button className='rem' onClick={contadorRestar}>-</button>
                <button className='add' onClick={contadorSumar}>+</button>
            </div>
        </div>
    </>
  )
}
