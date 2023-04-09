import * as S from './styles';

function TrackAuthor({ text, link }) {
  const author = text || '';
  const linkAuthor = link || 'http://';
  return (
    <S.Author>
      <S.Link href={linkAuthor}>{author}</S.Link>
    </S.Author>
  );
}

export default TrackAuthor;
