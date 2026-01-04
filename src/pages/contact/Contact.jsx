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

  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

  useEffect (() => {
    const setting = () => {
      if (state) {
        setContactCategory(state.title);
      }
    }
    setting();
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company) {
      alert("please enter your company name");
      return;
    }
    if (!name) {
      alert("please enter your name");
      return;
    }
    if (!email) {
      alert("please enter your email");
      return;
    }
    if (!PHONE_REGEX.test(phone)) {
      alert("please enter your phone number");
      return;
    }
    if (!message) {
      alert("please enter your message");
      return;
    }

    const request = {
      category : !contactCategory ? null : contactCategory,
      name : name,
      phone : phone,
      company : company,
      email : email,
      message : message
    }
    alert("BACKEND REQUEST DATA \n" + JSON.stringify(request) + "\n전달 데이터 확인");
  }

  return (
    <div className={styles.container}>
      <form id='contactForm' onSubmit={handleSubmit}>
        {contactCategory ? <p className={styles.contact_title}> Contact event : {contactCategory} <span className={styles.desc}>{state.engTitle}</span></p> : null}
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
          <label htmlFor='message'>문의내용을 입력해주세요. </label>
          <button type="submit" form="contactForm" >Send</button>
        </div>
      </form>
      <div className={styles.bar}></div>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>여러분의 문의를 기다리고 있습니다</h1>
        <div className={styles.title_desc_wrapper}>
          <p className={styles.title_desc}> 문의 사항이나 협업 제안이 있으신가요? </p>
          <p> 정보를 남겨주시면 담당자가 검토 후 신속하게 연락드리겠습니다. </p> 
        </div>

        
      </div>
    </div>
  )
}
