import { ICON_SEARCH } from '../../constants';
import * as S from './styles';

function Search() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref={ICON_SEARCH} />
      </S.SearchSvg>
      <S.Input type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  );
}

export default Search;
