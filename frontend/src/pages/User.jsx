import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Background from '../components/background/Background'
import TitleH1 from '../components/title/TitleH1'
import Nav from '../components/nav/Nav'
import InputLabel from '../components/input/InputLabel'
import ButtonCancel from '../components/button/ButtonCancel'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function User() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/cerrar-sesion`,{},{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(response => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('rol');
      navigate('/iniciar-sesion');
    })
    .catch(error => {
      console.log('Error', error);
    })
  }

  return (
    <Background>
      <Nav />
      <div className="w-10/12 mx-auto pt-1 pb-4 px-4 mt-4 rounded-xl bg-sistro-blue-200">
        <TitleH1 title='Perfil'></TitleH1>
        <div className='w-4/6 mx-auto mt-8'>
          <div className='flex items-center space-x-4'>
            <img src='https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png' className='w-48 h-48 rounded-full bg-white' />
            <div className="flex flex-col justify-center">
              {/* Nombre del usuario */}
              <p className='text-4xl pl-4 pb-8 text-white'>Admin</p>
              <div className='flex pl-4 pt-4'>
                <FontAwesomeIcon icon={faPenToSquare} className='text-3xl text-yellow-500 cursor-pointer' />
                <p className='pl-2 text-xl text-white cursor-pointer'>Editar Perfil</p>
              </div>
            </div>
          </div>
          {/* datos del usuario */}
          <div>
            <InputLabel texto='Correo'
              type='text'
              placeholder='admin@gmail.com'
            />
            <InputLabel texto='Contraseña'
              type='text'
              placeholder='************'
            />
          </div>
          <div>
            <ButtonCancel name='Cerrar Sesión' onClick={handleLogout}/>
          </div>
        </div>
      </div>
    </Background>
  )
}

export default User