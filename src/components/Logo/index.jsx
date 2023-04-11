import SkyProLogo from '../LogoSVG';
import * as S from './styles';
import { useThemeContext } from '../../contexts/theme';

function Logo() {
  const { themeName } = useThemeContext();

  const color = themeName === 'dark' ? "white" : "black";

  return (
    <S.NavLogo>
      <a href="/">
        <SkyProLogo color={color}/>
      </a>
    </S.NavLogo>
  );
}

export default Logo;
