import logo from '../../assets/img/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.headerImage} src={logo} alt="Store logo" />
    </header>
  )
}
