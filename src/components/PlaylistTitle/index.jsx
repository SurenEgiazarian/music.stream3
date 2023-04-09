import { ICON_WATCH } from '../../constants';
import * as S from './styles';

function PlaylistTitile() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol $col="1">Трек</S.PlaylistTitleCol>
      <S.PlaylistTitleCol $col="2">Исполнитель</S.PlaylistTitleCol>
      <S.PlaylistTitleCol $col="3">Альбом</S.PlaylistTitleCol>
      <S.PlaylistTitleCol $col="4">
        <S.PlaylistTitleSvg alt="часики">
          <use xlinkHref={ICON_WATCH} />
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol>
    </S.ContentTitle>
  );
}

export default PlaylistTitile;
