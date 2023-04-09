import * as S from './styles';

function TrackTime({ text }) {
  const time = text || '';
  return (
    <div>
      <S.Svg alt="сердечко">
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      </S.Svg>
      <S.Text>{time}</S.Text>
    </div>
  );
}

export default TrackTime;
