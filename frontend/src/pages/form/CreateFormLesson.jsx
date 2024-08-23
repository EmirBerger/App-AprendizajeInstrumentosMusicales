import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import TitleH1 from '../../components/title/TitleH1';
import Background from '../../components/background/Background';
import InputLabel from '../../components/input/InputLabel';
import Button from '../../components/button/Button';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';

function CreateFormLesson() {
  const location = useLocation();
  const instrument_id = location.state?.instrument_id || null;
  const [formData, setFormData] = useState({
    instrument_fk: instrument_id,
    title: '',
    description: '',
    video: '',
    theory: null
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

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
    axios.post(`http://127.0.0.1:8000/api/admin/clase/nuevo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        navigate(`/instrumentos/${instrument_id}`)
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
      <Nav goBack={`instrumentos/${instrument_id}`} />
      <TitleH1 title='Agregar clase' />
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
          <div className="w-full flex justify-between">
            <Link to={`/instrumentos/${formData.instrument_fk}`}>
              <ButtonCancel name='Cancelar' />
            </Link>
            <Button name='Agregar' type='submit' />
          </div>
        </form>
      </div>
    </Background>
  )
}

export default CreateFormLesson