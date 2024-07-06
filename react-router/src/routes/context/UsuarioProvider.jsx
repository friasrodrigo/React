import React from 'react'
import { usuarioContext } from './UsuarioContext'



const usuario = {
    nombre: 'Rodrigo Frias',
    tecnologia: 'React',
    mail: 'ivfriasrodrigo18@gmial.com',
    ig: '@rodrigoIfrias'
}

export const UsuarioProvider = ( {children} ) => {
  return (
    <usuarioContext.Provider value={{usuario}}>
        {children}
    </usuarioContext.Provider>
  )
}
