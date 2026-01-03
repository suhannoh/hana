import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.sns}>
          <h1>HANA Innovation</h1>
          <li className={styles.sns__list}>
            <a href='https://www.youtube.com/@hanainnovation3000/videos'
              target='_blank' rel="noopener noreferrer" className={styles.desc}> Youtube </a>
            <a href='https://www.instagram.com/hana_innovation_korea/'
              target='_blank' rel="noopener noreferrer" className={styles.desc}> Instagram </a>
            <a href='https://www.linkedin.com/company/hana-innovation'
              target='_blank' rel="noopener noreferrer" className={styles.desc}> linkedin </a>
          </li>
        </ul>
        <div className={styles.info}>
          <ul className={styles.company}>
            <li className={styles.title}>Company</li>
            <li className={styles.desc}>(주)하나 - HANA Innovation</li>
            <li className={styles.desc}>사업자 등록번호 : 1238170813</li>
            <li className={styles.desc}>주소 : 경기도 화성시 남양읍 주석로 184번길 22-15</li>
          </ul>
          <ul className={styles.contact}>
            <li className={styles.title}>Contact</li>
            <li className={styles.desc}>연락처 : +82 31 355 0707</li>
            <li className={styles.desc}>이메일 : sales@hana-innovation.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
