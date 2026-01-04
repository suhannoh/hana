import React from 'react'
import styles from './Item.module.css'
import { useNavigate } from 'react-router-dom';

export default function Item({ product }) {
  const navigate = useNavigate();
  
  return (
    <>
    <article className={styles.item} onClick={() => navigate(`/product/${product.category}/${product.id}` , {state : product})}>
      <img src={product.img} alt="" />
      <p>{product.title}</p>
      <p>{product.engTitle}</p>

    </article>
    </>
  )
}
