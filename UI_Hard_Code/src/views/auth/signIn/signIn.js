import * as React from 'react';
import styles from './signIn.module.css'
import { signIn } from '../../../api/auth/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function SignIn() {
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const navigate = useNavigate();
    const handleEmailChange = (value) => {
        setEmail(value)
      }
      const handlePasswordChange = (value) => {
        setPassWord(value)
      }
      const handleSignIn = async () => {
        const inForSignup = {
          email: email,
          password: passWord
        }
        await signIn(inForSignup)
        .then((res) => {
          if(res.data.access_token) {
            localStorage.setItem('jwtToken', res.data.access_token);
            localStorage.setItem('token', res.data.access_token)
            navigate('/')
          }
        })
        .catch(() => {
          alert('Tài khoản không tồn tại')
        })
      }
      const redirectSignUp= () =>  {
        navigate('/signUp')
      }
      const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
            <h3 className={styles.singIn_Title}>Đăng nhập vào tài khoản của bạn</h3>
            <button className={styles.singIn_button}>
                <img alt="Error" className={styles.svg_image} src="data:image/png;base64,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"></img>
                <span>Tiếp tục bằng tài khoản Google</span>
            </button>
            <button className={styles.singIn_button}>
                <img alt="Error" className={styles.svg_image} src="data:image/png;base64,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"></img>
                <span>Tiếp tục bằng tài khoản Facebook</span>
            </button>
            <button className={styles.singIn_button}>
                <img alt="Error" className={styles.svg_image} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD7+/t8fHzz8/PFxcXu7u7S0tLb29shISH29vZKSkp5eXmgoKDw8PDr6+u/v7/h4eE/Pz+4uLiYmJhra2s3Nzeurq6BgYFYWFiLi4tkZGRSUlLl5eXMzMykpKQqKioMDAwWFhZeXl4yMjKQkJBERERycnKamppoaGgkJCQUFBRgvp6VAAAHFUlEQVR4nO2da3uiPBCGCUpR67G24lmpWtvd////Xg99W9SQIPOEGVjvz3u58xRIJnOK5z148ODBP0svjHbtPrcVrnga7tfqyI7bEid0O8/qf8bcxjggmKgENW5z4KzUJW1ug7D4n+qaaj3D6O+NwEp9h+HoVp9SU26zYPhtnT6lOtyGoQhjvUAVcFsGYpeiT6mQ2zQI/iZVoOpyG4egu00XqLiNQ7Aw6FNf3NYBGJgEVmEp7RkFqga3fWTq70aB79z20XkxP8Ly+91fZoFqyW0glY5FYJPbQCoNi8Dyu93mVeZAj9tCIjWbwLJv96FNYOk3Q+2BN8mE20Ii1yGnyj1C3ypwz20ikalVYZ3bRBr2Rxhxm0jk1Saw7MuMF9sUlj16MbQJLH1SbW4RWPpIt+Vgr565DSRj2e3/lnyjOPBhVrjgto9M1yyw5N7akcAosPSRC8+UpVAVScU8GwRW4Ql6XrW/Qc+0G66fuG3DkBq+mPncpoFIW0orkIX5JtLqa1bjEzxxWzSjKla/pjn9zsrvqCW5UTipRjnCL1f5mFqFPsBvkgf8t9If5nWc9sN4NG9HJXt6fmsRBsNhPxi0LDt3vd6ttww/tOiv2puP0Xa9ffnYjFfDhuEfF0Q9+Hz7iH/fvfd5bZhvdWz1x7oYznr2GrA5PH4w/qPdwtV+eKebGU6N2ZqXHcOa2xoaCrYOjDqDjL/kB3vjL33TLlZkI6Vi8kpkhkzucq8pntXTfC0sWBzYgp4/zCPjN9SYNrP+0pl91heDxNJSCXPFW1pwovdpzZRqcO/lNUyBiBTGt5/QYnXf3ylBzWlM1bfWGKTQXiZ2NoK8Ew7Tb0Gc36x4EzUOH2UrMG8MmZi7inlkWUDNrNfknzjjxKkd3LnuucVBjsqa+CuYOVqgMVrNwha7pmZyrApmjSx+m9j/PwbecU8xxy5fCE3U8VHmEzwywgh849Zh4A0h0F6lxcknXaA+Ei8HctrRWpHNzZYo0LdWZDMzpYapJK8yB9bkuKs0Z/QKemNNnVuCGcARasatwUQTELFZcoswMUdEwlEHchfMAPoydA3wARkpYS855wPTnWgtOecD4m97LW4Z6YAKieV+hahzb8wtJBVQ5qLPrSOVIUag2NAMaJWxdw3wgUrqywsAf4N6R8U6bLCOE7GxC1i5glR/BuJvn7C0trABKxZ74laSAi6jJjU8g8v85q1HcA1MoGcaUMUIbpKiVIcGV9lmn1vBA0ygdTwOE8CBJ0IXGmApFL1oyQnA2nBuKXpiXM23UI/mBSZQ6sECdbj3xKYrgC18QjP3wKVU6OEQ2Oo95taiB7hZ0AtlnQCsC5ZYh6igCs3NMGwAFWbuFykWYMOM0IA+8BkKDbRVXyGw5UnodwicfSK0JBiWkxFbCbXCKRRajwjskhHqtQFHuQn1vIEDsIWenoDD3KRW0uDyMlILTXBTzKUG9XEfovlmDUZgH6LYskvcns+tJI0PmEKheQvgfQJCnRrgaqodOiaBGFXUZp4yygkq7i12u1B/QApbMbeSVFAbBm0wh1NAX6LQ89MR0DlYaH7tBCbkJnepoXfFnhG81KC2faEBxTOQVKlYr+YEwj2Vegg+AzkKc4swgwgsiv4QIRXtQssTf6CXD0neEU9syBK5FVghl7kJrTFNsCVuGnJPwb/Q6r7FhhST0Ir5hGYRL5lQpn1JzV5cQch9C59r8sM8f0Wf7U5iMdTyVtqUYTX9Zpxz45A+IipJvvCN4HjUDflCxUJr9rXk3DUEh02vyOuHSw4qXpK3iKEUntuR/Dkp+QeMM/kDjGVZawhxcKGlpldQAlNCW6CuIFWeCu3qvoQisBQbxitJoZf5BhE+iL2lUgsVfyFPp+MWYIVc7Vb96LcXc2swA8h6y15OIf3PUqdinYDUnEqOK4IGught1zsCuv9B7hEDdkur0M5g4MQaqfFvYDubzB0D2AkltK8UepGexLw+rofmhLx2L2Av2xlx4WH4rZ0LbkVX4MbT/SDrGAV/R4+ICi06uVlW0r4PuARJh5ysMHSvTyLmcitXt3SK6WpzePF8l1vbCQc3dP4i4VMEDt/TIWBYO/LqSh3sU6SAc9v0+MyX5hLzMFngnTKMm8pugDNtCrqW0wZfTCMGjjQzwnYchsYtjDC5b04OFCmwtOw73ye4JTr0RrUU/qIW+wSP3Jvh30yjZTjodbu9QRh81u5N9wAHtGYme9ZtNO5rlvlwld0DXBe1TVzSyOTAPa/SXWU/aGcqZ9kXqOqClnU839og74wf2J8kMANzN+b7WtrZNrCnjrFo/guUBs2Jn1rvPrnnLx+mlrJOOJaYS3o64ybR3UvDsqYpE2zz6zvSii6CxYeVM+d7tYj2CZXbWh93HQKZeria7mdf413UIEb66oNwuOpEfervPHjw4EFB/AfUxJHrbU9S5gAAAABJRU5ErkJggg=="></img>
                <span>Tiếp tục bằng tài khoản Apple</span>
            </button>
            <input name='email' onBlur={(e) =>  validateEmail(e.target.value)} placeholder='Email' className={styles.singIn_Input} value={email} onChange={(e) => handleEmailChange(e.target.value)}/>
            {!isValidEmail && (
              <span style={{color: 'red'}}>Email invalid</span>
            )}
            <input name='passWord' onBlur={(e) =>  validatePassword(e.target.value)} placeholder='Mật khẩu' className={styles.singIn_Input} value={passWord} onChange={(e) => handlePasswordChange(e.target.value)}/>
            {!isValidPassword && (
              <span style={{color: 'red'}}>Password must include a number, a uppercase, lowercase</span>
            )}
            <button className={`${styles.singIn_Input} ${styles.submit_button}`} type='submit' onClick={handleSignIn}>Đăng nhập</button>
            <div className={styles.help_auth__footer}>
                <div className={styles.forget_password__wrapper }>
                hoặc <a className={styles.helper_author_footer__link} href='/'>Quên mật khẩu</a>
                </div>
            <div className= {styles.helpers_auth_separator__2mEsg} ></div>
            <div>Bạn không có tài khoản? Hãy <p onClick={redirectSignUp} className={styles.helper_author_footer__link} >Đăng ký</p></div>
            <div><p className={styles.helper_author_footer__link} >Đăng nhập bằng tên tổ chức của bạn</p></div>
            </div>
        </div>
      </div>
    );
  }