import { useNavigate } from 'react-router-dom'
import styles from './MainProductTitle.module.css'

export default function MainProductTitle({ product , product2=null }) {
  const navigate = useNavigate();
  
  return (
    <article className={styles.article} onClick={() => navigate(`/product/${product.category}` , {state : product})}>
        <img src={product.img} alt="" />
        <p>{product.title}</p><p className={styles.eng}>{product.engTitle}</p>
    </article>

  )
}
