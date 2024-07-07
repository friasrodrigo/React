import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to='/pelotas' className="nav-link active">Pelotas</Link>
              <Link to='/raquetas' className="nav-link">Raquetas</Link>
              <Link to='/calzados' className="nav-link">Calzados</Link>
            </div>
            <div className="ms-auto">
              <Link to= '/carrito'className="nav-link">
                <ShoppingCart size={32} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
