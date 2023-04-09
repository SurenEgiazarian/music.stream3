import React from 'react';
import Logo from '../Logo';
import Burger from '../Burger';
import Menu from '../Menu';
import * as S from './styles';

const { useState } = React;

function Nav() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const menuComponent = isMenuVisible ? <Menu /> : null;

  return (
    <S.MainNav>
      <Logo />
      <Burger onClick={toggleMenu} />
      {menuComponent}
    </S.MainNav>
  );
}

export default Nav;
