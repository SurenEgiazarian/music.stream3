import { useState, useEffect } from 'react';
import TrackSkeleton from '../TrackSkeleton';
import TrackTitle from '../TrackTitle';
import TrackAuthor from '../TrackAuthor';
import TrackAlbum from '../TrackAlbum';
import TrackTime from '../TrackTime';
import * as S from './styles';

function PlaylistItem({ title, author, album, time }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const track = (
    <S.Track>
      <TrackTitle
        image={title.image}
        text={title.text}
        link={title.link}
        spanText={title.spanText}
      />
      <TrackAuthor text={author.text} link={author.link} />
      <TrackAlbum text={album.text} link={album.link} />
      <TrackTime text={time.text} />
    </S.Track>
  );

  return (
    <S.PlaylistItem>{isLoading ? <TrackSkeleton /> : track}</S.PlaylistItem>
  );
}

export default PlaylistItem;
