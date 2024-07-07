import React, {useContext} from 'react'
import {BALLS} from '../../API-Backend/balls'
import {RACKETS} from '../../API-Backend/rackets'
import {SHOES} from '../../API-Backend/shoes'
import {ShopContext} from '../../context/shop-context'
import {useNavigate} from 'react-router-dom'
import './cart.css'
import {CartItem} from './cart-item'

//Arreglo con todos los productos de tennis combinados
const allTennisProducts = [...BALLS, ...RACKETS, ...SHOES]

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmout = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <>
        <div className='cart'>
          <div>
              <h1>Tus Compras:</h1>
          </div>
          <div className='cartItems'>
            {allTennisProducts.map( (product) => {
              if(cartItems[product.id] != 0){
                return <CartItem data={product}/>
              }
            })}            

          </div>
          {totalAmout > 0 ? 

              <div className='checkout'>
                  <p> Subtotal: <b>$ </b> {totalAmout} </p>
                  <button onClick={ () => navigate('/pelotas')}> Seguir comprando </button>
                  <button> Ir a Pagar </button>
              </div>
           : 
              <h4>Tu carrito está vacio</h4>
          }
         </div>
           
    </>
  )
}
