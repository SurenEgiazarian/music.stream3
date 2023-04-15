import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PlaySkeleton from '../PlaySkeleton';
import { ICON_NOTE } from '../../constants';
import {
    currentTrackAuthorSelector,
    currentTrackAlbumSelector
} from '../../store/selectors/catalog';
import * as S from './styles';

function Track() {
    const [isLoading, setIsLoading] = useState(true);

    const author = useSelector(currentTrackAuthorSelector);
    const album = useSelector(currentTrackAlbumSelector);

    console.log(`author`);
    console.log(author);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return isLoading ? (
        <PlaySkeleton />
    ) : (
        <S.PlayContain>
            <S.PlayImage>
                <S.PlaySvg alt="Музыка">
                    <use xlinkHref={ICON_NOTE} />
                </S.PlaySvg>
            </S.PlayImage>
            <S.PlayAuthor>
                <S.PlayAuthorLink href="http://">{author}</S.PlayAuthorLink>
            </S.PlayAuthor>
            <S.PlayAlbum>
                <S.PlayAlbumLink href="http://">{album}</S.PlayAlbumLink>
            </S.PlayAlbum>
        </S.PlayContain>
    );
}

export default Track;
