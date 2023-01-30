import styles from "../../assets/styles/NavHeader.module.css"

interface TypeHeader {
  children: React.ReactNode
}

const NavHeader = ({children}: TypeHeader) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

export default NavHeader