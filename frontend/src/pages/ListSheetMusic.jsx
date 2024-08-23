import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Background from '../components/background/Background'
import TitleH1 from '../components/title/TitleH1'
import ListContainer from '../components/divContainer/ListContainer';
import List from '../components/divContainer/List';
import Nav from '../components/nav/Nav';
import AdminAdd from '../components/button/AdminAdd';
import UserRol from '../components/UserRol';

function ListSheetMusic() {

  const [listSheetMusic, setListSheetMusic] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/lista-partituras')
      .then(response => {
        setListSheetMusic(response.data);
      })
      .catch(error => {
        console.log('Hubo un error al obtener los datos:', error);
      })
  }, [])

  const handleEditSheetMusic = (sheet_music_id) => {
    navigate(`/editar-partitura`, { state: { sheet_music_id: sheet_music_id } })
  }

  const handleDeleteSheetMusic = (sheet_music_id) => {
    navigate(`/eliminar-partitura`, { state: { sheet_music_id: sheet_music_id } })
  }

  return (
    <Background>
      <Nav goBack={`inicio`}></Nav>
      <div className='flex justify-center relative'>
        <TitleH1 title='Canciones' />
        <UserRol userRol='1' >
          <AdminAdd route={`/agregar-partitura`}></AdminAdd>
        </UserRol>
      </div>
      <ul className='mt-16'>
        <ListContainer>
          {listSheetMusic.map(sheetMusic => (
            <List key={sheetMusic.sheet_music_id} type="Canción" author={sheetMusic.author}>
              <li className="w-full h-full relative">
                <Link to={`/partitura/${sheetMusic.sheet_music_id}`} className="w-full h-full flex items-center justify-center">
                  <p className='text-4xl'>{sheetMusic.title}</p>
                </Link>
                <UserRol userRol='1' >
                  <div className='w-20 pr-4 absolute bottom-2 right-2 flex justify-between'>
                    <FontAwesomeIcon icon={faTrash}
                      onClick={() => handleDeleteSheetMusic(sheetMusic.sheet_music_id)}
                      className='text-2xl text-red-600 cursor-pointer'
                    />
                    <FontAwesomeIcon icon={faPenToSquare}
                      onClick={() => handleEditSheetMusic(sheetMusic.sheet_music_id)}
                      className='text-2xl text-yellow-500 cursor-pointer'
                    />
                  </div>
                </UserRol>
              </li>
            </List>
          ))}
        </ListContainer>
      </ul>
    </Background>
  )
}

export default ListSheetMusic