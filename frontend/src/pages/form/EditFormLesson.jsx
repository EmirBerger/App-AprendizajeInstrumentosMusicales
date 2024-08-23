import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Background from '../../components/background/Background'
import TitleH1 from '../../components/title/TitleH1'
import InputLabel from '../../components/input/InputLabel';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';
import ButtonEdit from '../../components/button/ButtonEdit';

function EditFormLesson() {
  const location = useLocation();
  const lesson_id = location.state?.lesson_id || null;
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video: '',
    theory: null
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/clase/${lesson_id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [lesson_id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // setFormData({ ...formData, [name]: value });
    if (name === 'theory') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/admin/clase/${lesson_id}/editar`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        navigate(`/clase/${lesson_id}`)
      })
      .catch(error => {
        console.error('Error', error);
        if (error.response && error.response.data) {
          setError(error.response.data.errors);
        }
      })
  }

  return (
    <Background>
      <Nav goBack={`clase/${lesson_id}`} />
      <TitleH1 title='Editar Clase' />
      <div className='w-3/6 mx-auto mt-11'>
        <form onSubmit={handleSubmit}>
          <InputLabel texto='Titulo'
            type='text'
            name='title'
            id='title'
            value={formData.title}
            onChange={handleChange}
            error={error.title}
          />
          <InputLabel texto='Descripción'
            type='text'
            name='description'
            id='description'
            value={formData.description}
            onChange={handleChange}
            error={error.description}
          />
          <InputLabel texto='Video'
            type='text'
            name='video'
            id='video'
            value={formData.video}
            onChange={handleChange}
            error={error.video}
          />
          <InputLabel texto='Teoria'
            type='file'
            name='theory'
            id='theory'
            onChange={handleChange}
            error={error.theory}
          />
          <div className="w-full mt-2 flex justify-between">
            <Link to={`/clase/${lesson_id}`}>
              <ButtonCancel name='Cancelar' />
            </Link>
            <ButtonEdit name='Editar' type='submit' />
          </div>
        </form>
      </div>
    </Background>
  )
}

export default EditFormLesson