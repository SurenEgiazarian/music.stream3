import logo from '../../img/logo.png';
import * as S from './styles';

function Logo() {
  return (
    <S.NavLogo>
      <a href="/">
        <S.LogoImage src={logo} alt="логотип" />
      </a>
    </S.NavLogo>
  );
}

export default Logo;
