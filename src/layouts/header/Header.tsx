import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerImage} src={logo} alt="Store logo" />
      <nav className={styles.nav}>
        <Link to="/">Products</Link>
        <Link to="/sign-up">Sign Up</Link>
      </nav>
    </header>
  )
}
