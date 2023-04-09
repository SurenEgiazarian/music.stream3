import { useState, useEffect } from 'react';
import PlaySkeleton from '../PlaySkeleton';
import { ICON_NOTE } from '../../constants';
import * as S from './styles';

function Track() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <PlaySkeleton />
  ) : (
    <S.PlayContain>
      <S.PlayImage>
        <S.PlaySvg alt="Музыка">
          <use xlinkHref={ICON_NOTE} />
        </S.PlaySvg>
      </S.PlayImage>
      <S.PlayAuthor>
        <S.PlayAuthorLink href="http://">Ты та...</S.PlayAuthorLink>
      </S.PlayAuthor>
      <S.PlayAlbum>
        <S.PlayAlbumLink href="http://">Баста</S.PlayAlbumLink>
      </S.PlayAlbum>
    </S.PlayContain>
  );
}

export default Track;
