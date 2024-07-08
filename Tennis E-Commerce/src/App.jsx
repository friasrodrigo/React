import React from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import {Balls} from './Pages/shop/Balls'
import { Shoes } from './Pages/shop/Shoes';
import { Rackets } from './Pages/shop/Rackets';
import {Cart} from './Pages/cart/Cart'
import { Navigate } from 'react-router-dom'; // 
import { ShopContextProvider } from './context/shop-context';

// Raiz de la App. Aquí pondremos una barra de navegación y definiremos las rutas a los componentes:

// El componente <Balls /> está enlazado a la ruta "/pelotas"

function App() {

  return (
    <>

        <div className='App'>
            <ShopContextProvider>
              <NavBar />
              <Routes>
                  <Route path='/' element={<Navigate to="/pelotas" />} /> 
                  <Route path='/pelotas' element={<Balls></Balls>}></Route>
                  <Route path='/raquetas' element={<Rackets></Rackets>}></Route>
                  <Route path='/calzados' element={<Shoes></Shoes>}></Route>
                  <Route path='/carrito' element={<Cart></Cart>}></Route>
              </Routes>
            </ShopContextProvider>   
        </div>
    </>
  )
}

export default App
