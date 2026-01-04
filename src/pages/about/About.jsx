import React from 'react'
import styles from './About.module.css'

export default function About() {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HANA 회사를 소개합니다 </h1> 
      <p className={styles.text}>주식회사 하나는 친환경 디스펜서 펌프(Eco-pump)를 개발 완료하여 상업화한 세계 글로벌 회사입니다.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.423230224819!2d126.84868879999998!3d37.2139267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6d152b5c48fb%3A0x8bbf46f7e25b4302!2zKOyjvCkg7ZWY64KYIEhBTkEgSW5ub3ZhdGlvbg!5e0!3m2!1sko!2skr!4v1767515142434!5m2!1sko!2skr"
       width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
