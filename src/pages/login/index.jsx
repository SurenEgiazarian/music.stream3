/* eslint-disable no-debugger */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container, * as S from './styles';
import logo from '../../img/logo-black.png';
import {
    userSelector,
    userLoadingSelector,
    // userErrorSelector,
    // userErrorMessageSelector,
    userErrorResponseDataSelector,
    allErrorsSelector,
} from '../../store/selectors/user';
import { login } from '../../store/actions/thunks/user';
import { cookies } from '../../utils/cookies';

export function Login({ setIsAllowedHandler }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const EMAIL_FIELD_NAME = 'email';
    const PASSWORD_FIELD_NAME = 'password';

    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const loading = useSelector(userLoadingSelector);
    const errorData = useSelector(userErrorResponseDataSelector);
    const errorDescriptions = useSelector(allErrorsSelector);

    console.log('login component');
    console.log(user.id);

    const navigate = useNavigate();

    // const redirectToHome = () => {
    //     navigate("/");
    // };

    useEffect(() => {
        console.log('login useEffect');
        if (cookies.check('token')) {
            console.log("Login. token exist. redirect to '/'");
            // redirectToHome();
            setIsAllowedHandler();
            navigate('/');
        }
    }, [user]);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(`form submit`);
        console.log(`email: ${email} пароль: ${password}`);
        await dispatch(login(email, password));
    };

    const redirectToSignin = () => {
        navigate('/signup');
    };

    return (
        <Container>
            <S.FullHight>
                <S.Form onSubmit={onFormSubmit}>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input
                        onChange={onEmailChange}
                        name={EMAIL_FIELD_NAME}
                        type="text"
                        placeholder="Email"
                    />
                    <S.Input
                        onChange={onPasswordChange}
                        name={PASSWORD_FIELD_NAME}
                        type="password"
                        placeholder="Пароль"
                    />
                    <S.PrimeButton>Войти</S.PrimeButton>
                    <S.SimpleButton type="button" onClick={redirectToSignin}>
                        Зарегистрироваться
                    </S.SimpleButton>
                    {loading && <S.Loading>Отправка данных</S.Loading>}
                    {errorData &&
                        errorDescriptions.map((description, index) => (
                            <S.Error key={index}>{description}</S.Error>
                        ))}
                </S.Form>
            </S.FullHight>
        </Container>
    );
}
