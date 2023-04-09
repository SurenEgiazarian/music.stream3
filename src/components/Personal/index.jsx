import { useState, useEffect } from 'react';
import * as S from './styles';

function Personal({ name }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{name}</S.SidebarPersonalName>
      <S.SidebarAvatar />
    </S.SidebarPersonal>
  );
}

export default Personal;
