import * as S from '../PlaylistItem/styles';

function PlaylistSkeletonItem() {
    console.log('PlaylistSkeletonItem');

    return (
        <S.PlaylistItem>
            <S.Track>
                <S.Title>
                    <S.TitleImage />
                    <S.TitleSkeleton />
                </S.Title>
                <S.Author $isLoading />
                <S.Album $isLoading />
            </S.Track>
        </S.PlaylistItem>
    );
}

export default PlaylistSkeletonItem;
