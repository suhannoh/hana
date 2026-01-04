import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import Theme from './Theme';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

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
              <a className={active === "home" ? styles.active : ""}
                onClick={() => { 
                navigate('/');
                setOpen(false);
                setActive("home");
              }}>Home</a>
              <a className={active === "product" ? styles.active : ""}
                onClick={() => { 
                setActive("product");
                navigate('/product');
                setOpen(false);
              }}>Product</a>
              <a  className={active === "company" ? styles.active : ""}
                onClick={() => { 
                navigate('/about');
                setOpen(false);
                setActive("company");
              }}>About</a>
              <a  className={active === "contact" ? styles.active : ""}
                onClick={() => { 
                navigate('/contact');
                setOpen(false);
                setActive("contact");
              }}>Contact</a>
            </div>)}
        </h1>
        <nav className={styles.nav}>
          <Link to="/" className={active === "home" ? styles.active : ""} onClick={() => setActive("home")}>Home</Link>
          <Link to="/product" className={active === "product" ? styles.active : ""} onClick={() => setActive("product")}>Product</Link>
          <Link to="/about" className={active === "company" ? styles.active : ""} onClick={() => setActive("about")}>About</Link>
          <Link to="/contact" className={active === "contact" ? styles.active : ""} onClick={() => setActive("contact")}>Contact</Link>
        </nav>
      </div>
      <Theme />
    </header>
  )
}
