import { ICON_LIKE, ICON_DISLIKE } from '../../constants';
import * as S from './styles';

function LikeDislike() {
  return (
    <S.LikeDislike>
      <S.Like>
        <S.LikeSvg alt="Нравится">
          <use xlinkHref={ICON_LIKE} />
        </S.LikeSvg>
      </S.Like>
      <S.Dislike>
        <S.DislikeSvg alt="Не нравится">
          <use xlinkHref={ICON_DISLIKE} />
        </S.DislikeSvg>
      </S.Dislike>
    </S.LikeDislike>
  );
}

export default LikeDislike;
