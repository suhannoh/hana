import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Page</h1>
      <h1 className={styles.title}>HANA 회사를 소개합니다 </h1> 
      <p className={styles.text}>준비중</p>
    </div>
  )
}
