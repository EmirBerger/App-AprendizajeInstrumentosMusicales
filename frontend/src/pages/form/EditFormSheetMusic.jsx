import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Background from '../../components/background/Background'
import TitleH1 from '../../components/title/TitleH1'
import InputLabel from '../../components/input/InputLabel';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';
import ButtonEdit from '../../components/button/ButtonEdit';

function EditFormSheetMusic() {
  const location = useLocation();
  const sheet_music_id = location.state?.sheet_music_id || null;
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    sheet_music: null
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/partitura/${sheet_music_id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [sheet_music_id]);

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
    axios.post(`http://127.0.0.1:8000/api/admin/partitura/${sheet_music_id}/editar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log(response.data);
        navigate(`/partitura/${sheet_music_id}`)
      })
      .catch(error => {
        console.error('Error', error.response.data);
        if (error.response && error.response.data) {
          setError(error.response.data.errors);
        }
      })
  }

  return (
    <Background>
      <Nav goBack={`lista-partituras`} />
      <TitleH1 title='Editar Partitura' />
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
          <ButtonEdit name='Editar' type='submit' />
        </div>
      </form>
      </div>
    </Background>
  )
}

export default EditFormSheetMusic