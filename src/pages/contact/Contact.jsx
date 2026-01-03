import { useLocation } from 'react-router-dom';
import styles from './Contact.module.css'

export default function Contact() {
  const {state} = useLocation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>여러분의 문의를 기다리고 있습니다</h1>
      <p className={styles.text}>준비중</p>
      {state && 
      <div className={styles.content}>
        <h1>Product Detail 통해 넘어온 data </h1>
        <h3>Category : {state.category}</h3>
        <p>Title : {state.title}</p>
        <p>subTitle : {state.engTitle}</p>
        <p>Description : {state.description}</p>
      </div>}
    </div>
  )
}
