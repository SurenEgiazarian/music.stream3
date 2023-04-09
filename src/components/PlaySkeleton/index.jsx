import * as S from '../Track/styles';

function PlaySkeleton() {
  return (
    <S.PlayContain>
      <S.PlayImage />
      <S.PlayAuthor $isLoading />
      <S.PlayAlbum $isLoading />
    </S.PlayContain>
  );
}

export default PlaySkeleton;
