import NavHeader from './NavHeader'
import styles from '../../assets/styles/NavMain.module.css'
import NavLinks from './NavLinks'

const NavMain = () => {
  return (
    <NavHeader>
      <div className="logo">
        <h1>Sistema de Login</h1>
      </div>
      <NavLinks />
    </NavHeader>
  )
}

export default NavMain