import * as React from 'react';
import styles from './signUp.module.css';
import { useState } from 'react';
import { signUp } from '../../../api/auth/auth';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isValidEmai, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const navigate = useNavigate();
    const handleFirstNameChange = (value) => {
      setFirstName(value)
    }
    const handleLastNameChange = (value) => {
      setLastName(value)
    }
    const handleEmailChange = (value) => {
      setEmail(value)
    }
    const handlePasswordChange = (value) => {
      setPassWord(value)
    }
    const handleSignUp = async () => {
      const inForSignup = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passWord
      }
      await signUp(inForSignup)
      .then((res) => {
        redirectSignIn()
      })
      .catch(() => {
        alert('Điền sai hoặc thiếu thông tin')
      })
      console.log('ok')
    }
    const redirectSignIn= () =>  {
      navigate('/signIn')
    }
    const validateEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      emailRegex.test(value); 
      if(emailRegex.test(value)) {
        setIsValidEmail(true)
      } else {
        setIsValidEmail(false)
      }
    }
    const validatePassword = (value) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if(passwordRegex.test(value)) {
        setIsValidPassword(true)
      } else {
        setIsValidPassword(false)
      }
    }
    return (
      <div>
        <div className={styles.singIn_Field}>
            <h3 className={styles.singIn_Title}>Đăng ký và bắt đầu học</h3>
            <input name='firstName' placeholder='first name' className={styles.singIn_Input} value={firstName}
              onChange={(e) => handleFirstNameChange(e.target.value)}
            />
            <input name='lastName' placeholder='last name' className={styles.singIn_Input} value={lastName} onChange={(e) => handleLastNameChange(e.target.value)}/>
            <input name='email' onBlur={(e) =>  validateEmail(e.target.value)} placeholder='Email' className={styles.singIn_Input} value={email} onChange={(e) => handleEmailChange(e.target.value)}/>
            {!isValidEmai && (
              <span style={{color: 'red'}}>Email invalid</span>
            )}
            <input onBlur={(e) =>  validatePassword(e.target.value)} name='passWord' placeholder='Mật khẩu' className={styles.singIn_Input} value={passWord} onChange={(e) => handlePasswordChange(e.target.value)}/>
            {!isValidPassword && (
              <span style={{color: 'red'}}>Password must include a number, a uppercase, lowercase</span>
            )}
            <div className={styles.form_group__strength}>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
                <div className={styles.form_group__strength_indicators}></div>
            </div>
            <button className={`${styles.singIn_Input} ${styles.submit_button}`} type='submit' onClick={handleSignUp}>Đăng ký</button>
            <div className={styles.help_auth__footer}>
                <div className={styles.help_signUp__wrapper }>
                Bằng việc đăng ký, bạn đồng ý với <p className={styles.helper_author_footer__link} >Điều khoản sử dụng và Chính sách về quyền riêng tư.</p>
                </div>
            <div className= {styles.helpers_auth_separator__2mEsg} ></div>
            <div>Bạn đã có tài khoản? Hãy <p onClick={redirectSignIn} className={styles.helper_author_footer__link_sign_in} href='/'>Đăng nhập</p></div>
            {/* <div><a className={styles.helper_author_footer__link} href='/'>Đăng nhập bằng tên tổ chức của bạn</a></div> */}
            </div>
        </div>
      </div>
    );
  }