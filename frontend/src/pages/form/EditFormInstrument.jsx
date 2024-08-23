import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Background from '../../components/background/Background'
import TitleH1 from '../../components/title/TitleH1'
import InputLabel from '../../components/input/InputLabel';
import Nav from '../../components/nav/Nav';
import ButtonCancel from '../../components/button/ButtonCancel';
import ButtonEdit from '../../components/button/ButtonEdit';

function EditFormInstrument() {
  const location = useLocation();
  const instrument_id = location.state?.instrument_id || null;
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    image_description: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (instrument_id) {
      axios.get(`http://127.0.0.1:8000/api/instrumentos`)
        .then(response => {
          const instruments = response.data;
          const instrument = instruments.find(inst => Number(inst.instrument_id) === Number(instrument_id));
          if (instrument) {
            setFormData({ name: instrument.name, image: instrument.image, image_description: instrument.image_description });
          } else {
            console.error('Instrumento no encontrado');
          }
        })
        .catch(error => {
          console.error('Error', error);
        });
    }
  }, [instrument_id]);

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
    axios.post(`http://127.0.0.1:8000/api/admin/instrumento/${instrument_id}/editar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        navigate(`/instrumentos`)
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
      <Nav goBack={`instrumentos`} />
      <TitleH1 title='Editar Instrumento' />
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
            <ButtonEdit name='Editar' type='submit' />
          </div>
        </form>
      </div>
    </Background>
  )
}

export default EditFormInstrument