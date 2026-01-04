import { useLocation } from 'react-router-dom';
import styles from './Contact.module.css'
import { useEffect, useState } from 'react';

export default function Contact() {
  const {state} = useLocation();
  const [contactCategory , setContactCategory] = useState('');
  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [company , setCompany] = useState('');
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');

  useEffect (() => {
    const setting = () => {
      if (state) {
        setContactCategory(state.title);
      }
    }
    setting();
  }, [state]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>여러분의 문의를 기다리고 있습니다</h1>
      <form>
        <div className={styles.contact_wrapper}> 
          <input type="text" name="contactCategory" id="contactCategory" value={contactCategory} placeholder=' ' onChange={(e) => setContactCategory(e.target.value)} />
          <label htmlFor='contactCategory'> 문의 카테고리 <span className={styles.desc}></span> <span style={{color : 'red'}}> *</span> </label>
        </div>
        <div className={styles.contact_line}>
          <div className={styles.contact_wrapper}>
          <input type="text" name="company" id="company" value={company} placeholder=' ' onChange={(e) => setCompany(e.target.value)} />
          <label htmlFor='company'>기업명 <span className={styles.desc}> (학생명, 기관명, 기업명)</span> <span style={{color : 'red'}}> *</span> </label>
        </div>
        <div className={styles.contact_wrapper}>
          <input type="text" name="phone" id="phone" value={phone} placeholder=' ' onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor='phone'>전화번호 <span className={styles.desc}>(010-1234-5678)</span> <span style={{color : 'red'}}> *</span> </label>
        </div>
        </div>
        <div className={styles.contact_line}>
          <div className={styles.contact_wrapper}>
            <input type="text" name="name" id="name" value={name}  placeholder=' ' onChange={(e) => setName(e.target.value)} />
            <label htmlFor='name'>담당자 성함 <span className={styles.desc}>(한글 or 영어)</span>
              <span style={{color : 'red'}}> *</span></label>
          </div>
          <div className={styles.contact_wrapper}>
          <input type="email" name="email" id="email" value={email} placeholder=' ' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor='email'>이메일 <span className={styles.desc}>(example@gmail.com)</span> <span style={{color : 'red'}}> *</span> </label>
          </div>
        </div>
        <div className={styles.contact_wrapper}>
          <textarea name="message" id="message" value={message} cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} placeholder=" "></textarea>
          <label htmlFor='message'>문의내용</label>
        </div>
        <button type="submit">Send</button>
      </form>
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
