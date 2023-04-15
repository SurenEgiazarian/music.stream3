// import { useState, useEffect } from 'react';

import TrackTitle from '../TrackTitle';
import TrackAuthor from '../TrackAuthor';
import TrackAlbum from '../TrackAlbum';
import TrackTime from '../TrackTime';
import * as S from './styles';

function PlaylistItem({ title, author, album, time, onTrackClick }) {
    return (
        <S.PlaylistItem>
            <S.Track onClick={onTrackClick}>
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
        </S.PlaylistItem>
    );
}

export default PlaylistItem;
