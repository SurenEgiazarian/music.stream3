import { useState, useEffect } from 'react';
import Personal from '../Personal';
import sidebarDatas from '../../data/sidebarInfo.json';
import * as S from './styles';

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const itemsSkeleton = [0, 1, 2].map((item) => (
    <S.SidebarItem $isLoading key={item} />
  ));

  const items = sidebarDatas.map(({ href, imgSrc, imgAlt, id }) => (
    <S.SidebarItem key={id}>
      <S.SidebarLink to={href}>
        <S.SidebarImg src={imgSrc} alt={imgAlt} />
      </S.SidebarLink>
    </S.SidebarItem>
  ));

  return (
    <S.MainSidebar>
      <Personal name="Sergey.Ivanov" />
      <S.SidebarBlock>
        <S.SidebarList>{isLoading ? itemsSkeleton : items}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
