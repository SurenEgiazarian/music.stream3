import * as S from './styles';

function TrackAlbum({ text, link }) {
  const album = text || '';
  const linkAlbum = link || 'http://';
  return (
    <S.Album>
      <S.AlbumLink href={linkAlbum}>{album}</S.AlbumLink>
    </S.Album>
  );
}

export default TrackAlbum;
