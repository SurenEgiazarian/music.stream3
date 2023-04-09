import Nav from '../Nav';
import CenterBlock from '../CenterBlock';
import * as S from '../MainPage/styles';

function PlaylistPage({ playlistId }) {
  return (
    <S.Page>
      <Nav />
      <CenterBlock playlistId={playlistId}/>
    </S.Page>
  );
}

export default PlaylistPage;
