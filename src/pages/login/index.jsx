import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useGetTokenMutation } from '../../store/services';



export function Login () {
    const history = useNavigate();
    const [getToken, { data: token, isSuccess: isSuccessGetToken }] = useGetTokenMutation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function handleToRegister() {
        history('/register');
    }
    const handleLogin = () => {
        getToken({email, password})
        
    }
    useEffect(() => {
        if (isSuccessGetToken) { 
          document.cookie = `tokenRefresh=${token?.refresh}`;
          document.cookie = `tokenAccess=${token?.access}`
          history('/');
        }
      }, [isSuccessGetToken]);

    return (
        <div className={cn(styles.main)}>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.image)}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={cn(styles.inputs)}>
                    <input className={cn(styles.login)} type="text" placeholder='Логин' defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className={cn(styles.password)} type="password" placeholder='Пароль' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={cn(styles.loginButtons)}>
                    <button className={cn(styles.buttonLogin)} onClick={handleLogin}>Войти</button>
                    <button className={cn(styles.buttonRegister)} onClick={handleToRegister} >Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};