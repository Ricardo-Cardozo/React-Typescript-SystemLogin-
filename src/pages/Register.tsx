import Inputs from "../components/Form/Inputs"
import { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  console.log(user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          value={undefined}
        />
        <Inputs
          label="E-mail:"
          type="email"
          name="email"
          placeholder="Digite seu e-mail..."
          onChange={handleChange}
          value={undefined}
        />
        <Inputs
          label="Digite a senha:"
          type="password"
          name="password"
          placeholder="Digite sua senha..."
          onChange={handleChange}
          value={undefined}
        />
        <Inputs
          label="Confirme a senha:"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha..."
          onChange={handleChange}
          value={undefined}
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
    </div>
  )
}

export default Register