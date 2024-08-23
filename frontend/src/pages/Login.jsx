import { useState } from "react"
import BgLoginRegister from "../components/background/BgLoginRegister"
import Button from "../components/button/Button"
import InputLabel from "../components/input/InputLabel"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/iniciar-sesion`, formData)
      .then(response => {
        const token = response.data.access_token;
        const rol = response.data.user.rol;
        localStorage.setItem('accessToken', token);
        localStorage.setItem('rol', rol);
        navigate(`/inicio`)
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setError(error.response.data.errors || { general: error.response.data.message });
        }
      })
  }

  return (
    <BgLoginRegister>
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-center text-5xl text-white my-10">
          Iniciar Sesión
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center"
        >
          <div className="min-h-9">
            {error.general && (
              <div className="text-red-500">
                {error.general}
              </div>
            )}
          </div>
          <InputLabel texto='Correo'
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
          <div className="mb-5">
            <p className="text-gray-400 text-lg">¿No tienes una cuenta? <Link to={`/crear-cuenta`} className="text-sistro-green">Regístrate</Link></p>
          </div>
          <div className="w-full flex justify-end">
            <Button name='Iniciar Sesión' type='submit' />
          </div>
        </form>
      </div>
    </BgLoginRegister>
  )
}

export default Login