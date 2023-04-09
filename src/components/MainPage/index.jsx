import Nav from '../Nav';
import CenterBlock from '../CenterBlock';
import Sidebar from '../Sidebar';
import * as S from './styles';

function Main() {
  return (
    <S.Page>
      <Nav />
      <CenterBlock />
      <Sidebar />
    </S.Page>
  );
}

export default Main;
