import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TitleH1 from '../../components/title/TitleH1';
import Background from '../../components/background/Background';
import InputLabel from '../../components/input/InputLabel';
import Button from '../../components/button/Button';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';

function CreateFormInstrument() {
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    image_description: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // setFormData({...formData, [name]: value});
    if (name === 'image') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/admin/instrumento/nuevo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        navigate(`/instrumentos`)
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setError(error.response.data.errors);
        }
      })
  }

  return (
    <Background>
      <Nav goBack={`instrumentos`} />
      <TitleH1 title='Agregar instrumento' />
      <div className='w-3/6 mx-auto mt-11'>
        <form onSubmit={handleSubmit}>
          <InputLabel texto='Nombre'
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            error={error.name}
          />
          <InputLabel texto='Imagen del instrumento'
            type='file'
            name='image'
            id='image'
            onChange={handleChange}
            error={error.image}
          />
          <InputLabel texto='Descripción de la imagen'
            type='text'
            name='image_description'
            id='image_description'
            value={formData.image_description}
            onChange={handleChange}
            error={error.image_description}
          />
          <div className="w-full mt-2 flex justify-between">
            <Link to={`/instrumentos`}>
              <ButtonCancel name='Cancelar' />
            </Link>
            <Button name='Agregar' type='submit' />
          </div>
        </form>
      </div>
    </Background>
  )
}

export default CreateFormInstrument