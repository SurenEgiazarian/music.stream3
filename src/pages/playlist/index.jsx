import { useParams } from "react-router-dom";
import PlaylistPage from '../../components/PlaylistPage';
import Bar from '../../components/Bar';
import * as S from '../main/styles';

export function Playlist({ id }) {

    const urlParams = useParams();
    const urlId = Number(urlParams.id);
    const playlistId = urlId >= 0 ? urlId : Number(id);

    return (
        <S.Container>
            <PlaylistPage playlistId={playlistId}/>
            <Bar />
        </S.Container>
    );
}