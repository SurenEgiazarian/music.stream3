import menu from '../../data/menuInfo.json';
import * as S from './styles';
import ThemeSwitcher from '../ThemeSwitcher';

function Menu() {
  const listItems = menu.map(({ value, href, id }) => (
    <S.MenuItem key={id}>
      <S.MenuLink to={href}>{value}</S.MenuLink>
    </S.MenuItem>
  ));

  return (
    <div>
      <S.MenuList>{listItems}</S.MenuList>
      <ThemeSwitcher/>
    </div>
  );
}

export default Menu;
