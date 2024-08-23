import React from 'react'
import Button from '../components/button/Button'
import { Link } from 'react-router-dom'

function Sistro() {
  return (
    <div className='w-4/6 mx-auto mt-11'>
      <img src='img/isotipo.png'
      className='w-5/6 mx-auto'
      ></img>
      <div className="w-3/5 mt-10 mx-auto flex justify-between items-center">
        <Link to={`/iniciar-sesion`} className="mx-2" >
          <Button name='Iniciar Sesión' />
        </Link>
        <Link to={`/crear-cuenta`} className="mx-2" >
          <Button name='Crear Cuenta' />
        </Link>
      </div>
    </div>
  )
}

export default Sistro