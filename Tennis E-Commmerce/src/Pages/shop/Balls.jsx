import React from 'react'
import {BALLS} from '../../API-Backend/balls'
import {Product} from './Product'
import './product.css';
// Este componente esta enlazado a la ruta "/pelotas" y retorna el mensaje: 

export const Balls = (props) => {

  return (
    <>
          <div className='shop'>
              <div className='products'> 
              {BALLS.map((product) => (
                <Product key={product.id} data={product} />
              ))}
              </div>
          </div>
    </>
  )
}
