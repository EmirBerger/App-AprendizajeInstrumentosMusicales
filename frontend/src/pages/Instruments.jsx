import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Background from '../components/background/Background';
import TitleH1 from '../components/title/TitleH1';
import SquareContainer from '../components/divContainer/SquareContainer';
import Square from '../components/divContainer/Square';
import Nav from '../components/nav/Nav';
import AdminAdd from '../components/button/AdminAdd';
import UserRol from '../components/UserRol';

const urlImage = 'http://127.0.0.1:8000/storage';

function Instruments() {
  const [instruments, setInstruments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/instrumentos')
      .then(response => {
        setInstruments(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }, []);

  const handleEditInstrument = (instrument_id) => {
    navigate(`/editar-instrumento`, { state: { instrument_id: instrument_id } })
  }

  const handleDeleteInstrument = (instrument_id) => {
    navigate(`/eliminar-instrumento`, { state: { instrument_id: instrument_id } })
  }

  return (
    <Background >
      <Nav goBack='inicio'></Nav>
      <div className='flex justify-center relative'>
        <TitleH1 title='Instrumentos' />
        <UserRol userRol='1' >
          <AdminAdd route={`/agregar-instrumento`}></AdminAdd>
        </UserRol>
      </div>
      <ul className='mt-20'>
        <SquareContainer>
          {instruments.map(instrument => (
            <Square key={instrument.instrument_id}>
              <li className="w-full h-full relative">
                <Link to={`/instrumentos/${instrument.instrument_id}`}>
                  <img src={`${urlImage}/${instrument.image}`} alt="" className="w-full h-full rounded-3xl" />
                </Link>
                <p className="w-full text-center text-white text-4xl mt-4">{instrument.name}</p>
                <UserRol userRol='1' >
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                    <FontAwesomeIcon icon={faTrash}
                      onClick={() => handleDeleteInstrument(instrument.instrument_id)}
                      className="text-3xl text-red-600 cursor-pointer"
                    />
                    <FontAwesomeIcon icon={faPenToSquare}
                      onClick={() => handleEditInstrument(instrument.instrument_id)}
                      className="text-3xl text-yellow-500 cursor-pointer"
                    />
                  </div>
                </UserRol>
              </li>
            </Square>
          ))}
        </SquareContainer>
      </ul>
    </Background>
  )
}

export default Instruments