import GlobalStyle from './globalStyles';
import { AppRoutes } from './routes';
import * as S from './styles';

function checkCookie(name) {
  return document.cookie.includes(`${name}=`);
}

function App() {

  const cookie = checkCookie('token');

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <AppRoutes cookie={cookie}/>
      </S.Wrapper>
    </>
  );
}

export default App;
