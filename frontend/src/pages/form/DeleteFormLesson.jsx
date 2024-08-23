import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TitleH1 from '../../components/title/TitleH1';
import Background from '../../components/background/Background';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';
import ButtonDelete from '../../components/button/ButtonDelete';

function DeleteFormLesson() {
  const location = useLocation();
  const lesson_id = location.state?.lesson_id || null;
  const navigate = useNavigate();

  const handleDeleteLesson = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/admin/clase/${lesson_id}/eliminar`,)
      .then(response => {
        navigate(`/instrumentos`)
      })
      .catch(error => {
        console.log('Error', error);
      })
  }
  return (
    <Background>
      <Nav goBack={`clase/${lesson_id}`} />
      <TitleH1 title='Eliminar clase' />
      <div className='w-3/6 mx-auto mt-11'>
        <p className='mt-12 text-center text-red-500 text-2xl'>Estás a punto de eliminar una clase</p>
        <div className="w-full mt-8 flex justify-between">
          <Link to={`/clase/${lesson_id}`}>
            <ButtonCancel name='Cancelar' />
          </Link>
          <ButtonDelete name='Eliminar' onClick={handleDeleteLesson} />
        </div>
      </div>
    </Background>
  )
}

export default DeleteFormLesson