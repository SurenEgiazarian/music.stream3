import * as S from './styles';

function PlayerBtn({ name, alt, xlinkHref, width, height, cursor, onClick }) {
  return (
    <S.PlayerBtn
      $btnName={name}
      $cursor={cursor}
      key={name}
      onClick={onClick}
    >
      <S.PlayerBtnSvg $btnName={name} alt={alt} $width={width} $height={height}>
        <use xlinkHref={xlinkHref} />
      </S.PlayerBtnSvg>
    </S.PlayerBtn>
  );
}

export default PlayerBtn;
