import commomStore from '../store/common';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.css';

export default function Layout({children}) {

  const { theme } = commomStore();

  return (
    <div className={`${styles.layout} ${theme ? 'dark' : ''}`}>
      <Header />
      <main className={styles.main}> 
        {children}
      </main>
      <Footer />
    </div>
  )
}
