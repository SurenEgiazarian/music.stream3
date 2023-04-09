import { ICON_NOTE } from '../../constants';
import * as S from './styles';

function TrackTitle({
  image = { alt: 'музыка', path: ICON_NOTE },
  text = '',
  link = 'http://',
  spanText,
}) {
  const imgAlt = image.alt;
  const imgPath = image.path;
  const textTitle = text;
  const linkTitle = link;

  return (
    <S.Title>
      <S.TitleImage>
        <S.Svg alt={imgAlt}>
          <use xlinkHref={imgPath} />
        </S.Svg>
      </S.TitleImage>
      <div>
        <S.Link href={linkTitle}>
          {textTitle} <S.Span>{spanText}</S.Span>
        </S.Link>
      </div>
    </S.Title>
  );
}

export default TrackTitle;
