import InputLabel from "../components/input/InputLabel"
import Button from "../components/button/Button"
import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BgLoginRegister from "../components/background/BgLoginRegister";

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`http://127.0.0.1:8000/api/crear-cuenta`, formData)
      .then(response => {
        navigate(`/iniciar-sesion`)
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setError(error.response.data.errors);
        }
      })
  };

  return (
    <BgLoginRegister>
      <h1 className="text-center text-5xl text-white py-5">
        Crear Cuenta
      </h1>
      <form onSubmit={handleSubmit}>
        <InputLabel texto='Nombre' 
          type='text' 
          name='name' 
          id='name' 
          value={formData.name} 
          onChange={handleChange} 
          error={error.name} 
        />
        <InputLabel texto='Apellido' 
          type='text' 
          name='last_name' 
          id='last_name' 
          value={formData.last_name} 
          onChange={handleChange} 
          error={error.last_name} 
        />
        <InputLabel texto='Email' 
          type='email' 
          name='email' 
          id='email' 
          value={formData.email} 
          onChange={handleChange} 
          error={error.email} 
        />
        <InputLabel texto='Contraseña' 
          type='password' 
          name='password' 
          id='password' 
          value={formData.password} 
          onChange={handleChange} 
          error={error.password} 
        />
        <div>
          <p className="text-gray-400 text-lg">¿Ya tienes una cuenta? <Link to={`/iniciar-sesion`} className="text-sistro-green">Iniciar Sesión</Link></p>
        </div>
        <div className="w-full flex justify-end">
          <Button name='Crear Cuenta' type='submit' />
        </div>
      </form>
    </BgLoginRegister>
  )
}

export default Register