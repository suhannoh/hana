import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import Theme from './Theme';
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link to='/'> <span className={styles.logo}>H<span className={styles.point}>A</span>NA</span> </Link>
          <button className={styles.hamburger}
            onClick={
              (e) => {
                e.stopPropagation();
                setOpen(v => !v);
              }}
            >
            ☰
          </button>
          {open && (
            <div className={styles.dropdown}>
              <a onClick={() => setOpen(false)}>Product</a>
              <a onClick={() => setOpen(false)}>Company</a>
              <a onClick={() => setOpen(false)}>Community</a>
            </div>)}
        </h1>
        <nav className={styles.nav}>
          <Link to="/product">Product</Link>
          <Link to="/about">Company</Link>
          <Link to="/contact">Comunity</Link>
        </nav>
      </div>
      <Theme />
    </header>
  )
}
