import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import NavMain from './components/NavBar/NavMain'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavMain />
        <div className="main_container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
