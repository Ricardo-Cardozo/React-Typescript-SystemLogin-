import Inputs from "../components/Form/Inputs"
import { useState } from 'react'
import { useFetch } from "../hooks/useFetch"

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const { registerAuth, message } = useFetch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await registerAuth(
      `http://localhost:3001/users/register`,
      "POST",
      { 'Content-Type': 'application/json' },
      JSON.stringify(user)
    )

    setUser({
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <Inputs
          label="Nome:"
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          onChange={handleChange}
          value={user.name || ''}
        />
        <Inputs
          label="E-mail:"
          type="email"
          name="email"
          placeholder="Digite seu e-mail..."
          onChange={handleChange}
          value={user.email || ''}
        />
        <Inputs
          label="Digite a senha:"
          type="password"
          name="password"
          placeholder="Digite sua senha..."
          onChange={handleChange}
          value={user.password || ''}
        />
        <Inputs
          label="Confirme a senha:"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha..."
          onChange={handleChange}
          value={user.confirmpassword || ''}
        />
        <Inputs
          label={undefined}
          type="submit"
          name="btn"
          placeholder={undefined}
          onChange={undefined}
          value="Registrar"
        />
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Register