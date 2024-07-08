import React from 'react'
import {SHOES} from '../../API-Backend/shoes'
import {Product} from './Product'
import './product.css';

export const Shoes = () => {
  return (
    <>
        <div className='shop'>
              <div className='products'> 
              {SHOES.map((product) => (
                <Product key={product.id} data={product} />
              ))}
              </div>
        </div>
    </>
  )
}
