import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TitleH1 from '../../components/title/TitleH1';
import Background from '../../components/background/Background';
import InputLabel from '../../components/input/InputLabel';
import Button from '../../components/button/Button';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';

function CreateFormSheetMusic() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    sheet_music: null
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // setFormData({ ...formData, [name]: value });
    if (name === 'sheet_music') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/admin/partitura/nuevo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        navigate(`/lista-partituras`)
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
      <Nav goBack={`lista-partituras`} />
      <TitleH1 title='Agregar Partitura' />
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
          <InputLabel texto='Autor'
            type='text'
            name='author'
            id='author'
            value={formData.author}
            onChange={handleChange}
            error={error.author}
          />
          <InputLabel texto='Partitura'
            type='file'
            name='sheet_music'
            id='sheet_music'
            onChange={handleChange}
            error={error.sheet_music}
          />
          <div className="w-full mt-2 flex justify-between">
            <Link to={`/lista-partituras`}>
              <ButtonCancel name='Cancelar' />
            </Link>
            <Button name='Agregar' type='submit' />
          </div>
        </form>
      </div>
    </Background>
  )
}

export default CreateFormSheetMusic