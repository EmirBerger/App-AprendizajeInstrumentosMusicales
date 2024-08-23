import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Nav({ goBack }) {
  return (
    <div className='w-full h-16 bg-sistro-green flex items-center justify-between px-4'>
      {goBack ? (
        <Link to={`/${goBack}`}>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='text-sistro-blue text-5xl pl-20' />
        </Link>
      ) : (
        <FontAwesomeIcon icon={faCircleArrowLeft} className='text-sistro-blue text-5xl pl-20' />
      )}
      <Link to={`/inicio`}>
        <FontAwesomeIcon icon={faHouse} className='text-sistro-blue text-5xl' />
      </Link>
      <Link to={`/perfil`}>
        <FontAwesomeIcon icon={faCircleUser} className='text-sistro-blue text-5xl pr-20' />
      </Link>
    </div>
  )
}

export default Nav