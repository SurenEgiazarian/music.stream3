import PlaylistItem from '../PlaylistItem';
import * as S from './styles';

function Playlist({ tracks }) {
  const list = tracks.map(({ title, author, album, time, id }) => (
    <PlaylistItem
      title={title}
      author={author}
      album={album}
      time={time}
      key={id}
    />
  ));

  return <S.ContentPlaylist>{list}</S.ContentPlaylist>;
}

export default Playlist;
