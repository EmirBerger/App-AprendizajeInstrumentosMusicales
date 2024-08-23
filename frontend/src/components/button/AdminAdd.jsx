import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function AdminAdd({ route }) {
  return (
    <div className='w-full flex justify-end absolute mt-8 px-28'>
      <Link to={route} className='w-28'>
        <div className='w-28'>
          <FontAwesomeIcon icon={faPlus} className='w-full text-3xl text-sistro-green text-center' />
          <p className='w-full text-center text-xl text-white'>Agregar</p>
        </div>
      </Link>
    </div>
  )
}

export default AdminAdd