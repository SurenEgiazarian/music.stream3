import styles from './style.module.css'
import logoLight from '../../components/navbar/img/logo__light.png'
import cn from 'classnames'
import { setLogin, setToken } from '../../store/slices/auth';
import { useSignUpMutation, useGetTokenMutation } from '../../store/services';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export function Register () {
const history = useNavigate();
const [signUp, { data, isSuccess: isSuccessSingUp}]= useSignUpMutation();
const [getToken, { data: token, isSuccess: isSuccessGetToken }] = useGetTokenMutation();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [passwordRepeat, setPasswordRepeat] = useState();
useEffect(() => {
    if(isSuccessSingUp) {
        getToken({email, password});
    }
}, [isSuccessSingUp])
useEffect(() => {
    if (isSuccessGetToken) {
      document.cookie = `username=${data?.username}`;
      document.cookie = `id =${data?.id}`;
      dispatch(setToken(token?.access));
      document.cookie = `tokenRefresh=${token?.refresh}`;
      document.cookie = `tokenAccess=${token?.access}`
      dispatch(setLogin(data));
      history('/');
    }
  }, [isSuccessGetToken]);
const dispatch = useDispatch();
function signingUp () {
    signUp({email, username:email, password})
}
    return (
        <div className={cn(styles.main)}>
            <div className={cn(styles.menu)}>
                <div className={cn(styles.image)}>
                    <img src={logoLight} alt="" />
                </div>
                <div className={cn(styles.inputs)}>
                    <input className={cn(styles.login)} type="text" placeholder='Логин' defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className={cn(styles.password)} type="password" placeholder='Пароль' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input className={cn(styles.repeat)} type="password" placeholder='Повторите пароль' defaultValue={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}/>
                </div>
                <div className={cn(styles.button)}>
                    <button className={cn(styles.register)} onClick={signingUp}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
};