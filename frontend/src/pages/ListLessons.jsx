import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import Background from '../components/background/Background';
import TitleH1 from '../components/title/TitleH1';
import ListContainer from '../components/divContainer/ListContainer';
import List from '../components/divContainer/List';
import Nav from '../components/nav/Nav';
import UserRol from '../components/UserRol';

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/instrumentos/${id}`)
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las clases:', error);
      });
  }, [id]);

  const handleAddLesson = () => {
    navigate(`/agregar-clase`, { state: { instrument_id: id } })
  }

  const handleEditLesson = (lesson_id) => {
    navigate(`/editar-clase`, { state: { lesson_id: lesson_id } })
  }

  const handleDeleteLesson = (lesson_id) => {
    navigate(`/eliminar-clase`, { state: { lesson_id: lesson_id } })
  }

  return (
    <Background>
      <Nav goBack={`instrumentos`}></Nav>
      <div className='flex justify-center relative'>
        <TitleH1 title='Clases' />
        <UserRol userRol='1' >
          <div className='w-full mt-8 flex justify-end absolute'>
            <div className='w-28 cursor-pointer' onClick={handleAddLesson}>
              <div className='w-full'>
                <FontAwesomeIcon icon={faPlus} className='w-full text-3xl text-sistro-green text-center' />
                <p className='w-full text-center text-xl text-white'>Agregar</p>
              </div>
            </div>
          </div>
        </UserRol>
      </div>
      <ul className='mt-16'>
        <ListContainer>
          {lessons.map((lesson, index) => (
            <List key={lesson.lesson_id} type="Clase" classNumber={index + 1}>
              <li className="w-full h-full relative">
                <Link to={`/clase/${lesson.lesson_id}`} className="w-full h-full flex items-center justify-center">
                  <p className='text-4xl'>{lesson.title}</p>
                </Link>
                <UserRol userRol='1' >
                  <div className='w-20 pr-4 absolute bottom-2 right-2 flex justify-between'>
                    <FontAwesomeIcon icon={faTrash}
                      onClick={() => handleDeleteLesson(lesson.lesson_id)}
                      className='text-2xl text-red-600 cursor-pointer'
                    />
                    <FontAwesomeIcon icon={faPenToSquare}
                      onClick={() => handleEditLesson(lesson.lesson_id)}
                      className='text-2xl text-yellow-500 cursor-pointer'
                    />
                  </div>
                </UserRol>
              </li>
            </List>
          ))}
        </ListContainer>
      </ul>
    </Background >
  );
}

export default Lessons;