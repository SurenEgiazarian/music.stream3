// import { objValuesToArray } from '../../utils/objValuesToArray';
import { secondsToText } from '../../utils/secondsToText';

export const catalogSelector = (store) => store.catalog;

export const tracksLoadingSelector = (store) => catalogSelector(store)?.tracksLoading;

export const tracksErrorSelector = (store) => catalogSelector(store)?.tracksError;

export const currentTrackIdSelector = (store) => catalogSelector(store)?.currentTrackId;

export const playlistSizeSelector = (store) => catalogSelector(store)?.playlistSize;

export const allTracksSelector = (store) => catalogSelector(store)?.allTracks;

const parserTrack = (loadedTrack) => {
    const title = {
        image: {
            alt: "Логотип",
            path: loadedTrack.logo,
        },
        text: loadedTrack.name,
        link: "http://",
        spanText: "",
    };
    const author = {
        text: loadedTrack.author,
        link: "http://",
    };
    const album = {
        text: loadedTrack.album,
        link: "http://",
    };
    const time = {
        seconds: loadedTrack.duration_in_seconds,
        text: secondsToText(loadedTrack.duration_in_seconds),
    };
    return {
        id: loadedTrack.id,
        title,
        author,
        album,
        time,
    }
}

export const allTracksParser = (store) => allTracksSelector(store).map(parserTrack); // массив треков, удобный для компоненты плейлиста

export const allTracksIds = (store) => allTracksSelector(store).map((track) => track.id); // массив id-шек

export const trackParserByIndex = (index) => (store) => parserTrack(allTracksSelector(store)[index]);

export const trackParserById = (id) => (store) => {
    console.log('trackParserById store');
    console.log(store);
    const allTracks = allTracksSelector(store);
    console.log('allTracks');
    console.log(allTracks);
    console.log(parserTrack(allTracksSelector(store)?.find((trackInfo) => id === trackInfo.id)));
    return parserTrack(allTracksSelector(store)
    ?.find((trackInfo) => id === trackInfo.id));
}


export const currentTrackFileSelector = (store) => {
    const id = currentTrackIdSelector(store);
    return allTracksSelector(store)
    ?.find((trackInfo) => id === trackInfo.id).track_file;
}

export const currentTrackAuthorSelector = (store) => catalogSelector(store)
?.currentTrackAuthor;

export const currentTrackAlbumSelector = (store) => catalogSelector(store)
?.currentTrackAlbum;

export const currentTrackDurationSelector = (store) => catalogSelector(store)
?.currentTrackDuration;