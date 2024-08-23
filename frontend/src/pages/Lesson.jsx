import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TitleH1 from '../components/title/TitleH1';
import Background from '../components/background/Background';
import Nav from '../components/nav/Nav';

function Lesson() {
  const [lesson, setLesson] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/clase/${id}`)
      .then(response => {
        setLesson(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener la clase:', error);
      });
  }, [id]);

  return (
    <Background>
      <Nav goBack={`instrumentos/${lesson.instrument_fk}`}></Nav>
      <div className="w-10/12 mx-auto pt-1 pb-4 px-4 mt-4 rounded-xl bg-sistro-blue-200">
        <TitleH1 title={lesson.title} />
        <div className="text-white py-6 px-8 mx-auto">
          <div className="w-5/6 mx-auto mt-4 mb-8">
            <p className=' text-xl'>{lesson.description}</p>
          </div>
          <div className="w-5/6 h-80 mx-auto my-4 rounded-xl bg-slate-700">
            {lesson.video ? (
              <iframe
                src={`https://www.youtube.com/embed/${lesson.video}`}
                title="YouTube video"
                className='w-full h-full rounded-xl'
              />
            ) : (
              <p className="text-gray-100">No se pudo cargar el video</p>
            )}
          </div>
          <h2 className="mb-6 text-2xl text-center font-semibold">Contenido teorico</h2>
          <div className="w-5/6 mx-auto mt-8 h-screen">
            {lesson.theory ? (
              <iframe
                src={`${lesson.theory}`}
                title="PDF Viewer"
                className='w-full h-full rounded-xl'
              />
            ) : (
              <p className='text-center'>No se pudo cargar la partitura</p>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Lesson;