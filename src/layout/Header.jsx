import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import Theme from './Theme';
export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
              <a onClick={() => { 
                navigate('/');
                setOpen(false);
              }}>Home</a>
              <a onClick={() => { 
                navigate('/product');
                setOpen(false);
              }}>Product</a>
              <a onClick={() => { 
                navigate('/company');
                setOpen(false);
              }}>Company</a>
              <a onClick={() => { 
                navigate('/contact');
                setOpen(false);
              }}>Contact</a>
            </div>)}
        </h1>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">Company</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Theme />
    </header>
  )
}
