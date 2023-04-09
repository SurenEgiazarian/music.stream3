import * as S from '../PlaylistItem/styles';

function TrackSkeleton() {
  return (
    <S.Track>
      <S.Title>
        <S.TitleImage />
        <S.TitleSkeleton />
      </S.Title>
      <S.Author $isLoading />
      <S.Album $isLoading />
    </S.Track>
  );
}

export default TrackSkeleton;
