import axios from 'axios';
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Background from '../../components/background/Background';
import TitleH1 from '../../components/title/TitleH1';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';
import ButtonDelete from '../../components/button/ButtonDelete';

function DeleteFormSheetMusic() {
  const location = useLocation();
  const sheet_music_id = location.state?.sheet_music_id || null;
  const navigate = useNavigate();

  const handleDeleteLesson = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/admin/partitura/${sheet_music_id}/eliminar`,)
      .then(response => {
        navigate(`/lista-partituras`)
      })
      .catch(error => {
        console.log('Error', error);
      })
  }
  return (
    <Background>
      <Nav goBack={`lista-partituras`} />
      <TitleH1 title='Eliminar partitura' />
      <div className='w-3/6 mx-auto mt-11'>
        <p className='mt-12 text-center text-red-500 text-3xl'>Estás a punto de eliminar una partitura</p>
        <div className="w-full mt-8 flex justify-between">
          <Link to={`/lista-partituras`}>
            <ButtonCancel name='Cancelar' />
          </Link>
          <ButtonDelete name='Eliminar' onClick={handleDeleteLesson} />
        </div>
      </div>
    </Background>
  )
}

export default DeleteFormSheetMusic