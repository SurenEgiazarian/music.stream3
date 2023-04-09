import Container, * as S from './styles';
import logo from '../../img/logo-black.png';

export function Login() {
    return (
        <Container>
            <S.FullHight>
                <S.Form>
                    <S.LogoImage src={logo} alt="логотип" />
                    <S.Input type="text" placeholder="Логин" />
                    <S.Input type="text" placeholder="Пароль" />
                    <S.PrimeButton>Войти</S.PrimeButton>
                    <S.SimpleButton>Зарегистрироваться</S.SimpleButton>
                </S.Form>
            </S.FullHight>
        </Container>
    );
}