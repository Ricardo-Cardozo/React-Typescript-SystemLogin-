import styles from '../../assets/styles/NavLinks.module.css'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className={styles.nav_links}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  )
}

export default NavLinks