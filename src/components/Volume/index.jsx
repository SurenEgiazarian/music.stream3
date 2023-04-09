import { ICON_VOLUME } from '../../constants';
import * as S from './styles';

function Volume() {
  return (
    <S.Bar>
      <S.Image>
        <S.Svg alt="громкость">
          <use xlinkHref={ICON_VOLUME} />
        </S.Svg>
      </S.Image>
      <S.Progress>
        <S.ProgressLine type="range" name="range" />
      </S.Progress>
    </S.Bar>
  );
}

export default Volume;
