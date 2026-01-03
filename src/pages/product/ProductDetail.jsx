import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css'

export default function ProductDetail() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const product = state;
  return (
    <div className={styles.container}>
      <h1>Product Detail</h1>
        <div className={styles.wrapper}>

        <div className={styles.img_wrapper}>
            <img src={product.img} alt="" />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{product.title} <span>({product.engTitle})</span></p>
          <span className={styles.bar}></span>
          <p>{product.description}</p>
          <button onClick={() => {
            navigate('/contact' , {state : product});
          }}>Contact</button>
        </div>
      </div>
    </div>
  )
}
