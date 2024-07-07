import React from 'react'
import {RACKETS} from '../../API-Backend/rackets'
import {Product} from './Product'
import './product.css';

export const Rackets = () => {
  return (
    <>
        <div className='shop'>
              <div className='products'> 
              {RACKETS.map((product) => (
                <Product key={product.id} data={product} />
              ))}
              </div>
        </div>
    </>
  )
}
