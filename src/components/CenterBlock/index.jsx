import Search from '../Search';
import Head from '../Head';
import Filters from '../Filters';
import Content from '../Content';
import sidebarInfo from '../../data/sidebarInfo.json';
import * as S from './styles';

function CenterBlock({ playlistId }) {

  function getPlaylisrNameById(id) {
    if(id === undefined || id > sidebarInfo.length) {return "Треки";}
    if(id === 0) {return "Мои треки";}
    return sidebarInfo.find((playlistInfo) => id === playlistInfo.id).imgAlt;
  }

  const playlistTitle = getPlaylisrNameById(playlistId);

  return (
    <S.Container>
      <Search />
      <Head>{playlistTitle}</Head>
      <Filters />
      <Content playlistId={playlistId}/>
    </S.Container>
  );
}

export default CenterBlock;
