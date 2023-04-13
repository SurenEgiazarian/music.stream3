/* eslint-disable no-debugger */
/* eslint-disable default-param-last */
/* eslint-disable prefer-destructuring */
import {
    // ADD_TO_FAVORITE_START,
    // ADD_TO_FAVORITE_SUCCESS,
    // ADD_TO_FAVORITE_ERROR,
    // REMOVE_FROM_FAVORITE_START,
    // REMOVE_FROM_FAVORITE_SUCCESS,
    // REMOVE_FROM_FAVORITE_ERROR,
    // GET_FAVORITE_START,
    // GET_FAVORITE_SUCCESS,
    // GET_FAVORITE_ERROR,
    GET_TRACKS_START,
    GET_TRACKS_SUCCESS,
    GET_TRACKS_ERROR,
    // GET_TRACK_BY_ID_START,
    // GET_TRACK_BY_ID_SUCCESS,
    // GET_TRACK_BY_ID_ERROR,
    // GET_SELECTION_START,
    // GET_SELECTION_SUCCESS,
    // GET_SELECTION_ERROR,
    GET_SELECTION_BY_ID_START,
    GET_SELECTION_BY_ID_SUCCESS,
    GET_SELECTION_BY_ID_ERROR,
    SET_CURRENT_TRACK_ID,
    SET_CURRENT_TRACK,
    SET_PLAYLIST_SIZE,
} from '../actions/types/catalog';

const initialState = {
    tracksLoading: false,
    tracksError: null,
    allTracks: [],
    currentTrackId: null,
    currentTrackAuthor: '',
    currentTrackAlbum: '',
    currentTrackDuration: null,
    playlistSize: 0,
};

export default function catalogReducer(state = initialState, action) {
    console.log(`catalogReducer. action: ${action.type}`);
    switch (action.type) {
        case GET_TRACKS_START: {
            return {
                ...state,
                tracksLoading: true,
            };
        }

        case GET_TRACKS_SUCCESS: {
            return {
                ...state,
                tracksLoading: false,
                tracksError: null,
                allTracks: action.tracks,
            };
        }

        case GET_TRACKS_ERROR: {
            return {
                ...state,
                tracksLoading: false,
                tracksError: action.error,
            };
        }

        case GET_SELECTION_BY_ID_START: {
            return {
                ...state,
                tracksLoading: true,
            };
        }

        case GET_SELECTION_BY_ID_SUCCESS: {
            return {
                ...state,
                tracksLoading: false,
                tracksError: null,
                allTracks: action.tracks,
            };
        }

        case GET_SELECTION_BY_ID_ERROR: {
            return {
                ...state,
                tracksLoading: false,
                tracksError: action.error,
            };
        }


        case SET_CURRENT_TRACK_ID: {
            return {
                ...state,
                currentTrackId: action.id,
            };
        }

        case SET_CURRENT_TRACK: {
            return {
                ...state,
                currentTrackId: action.id,
                currentTrackAuthor: action.author,
                currentTrackAlbum: action.album,
                currentTrackDuration: action.duration,
            };
        }

        case SET_PLAYLIST_SIZE: {
            console.log(`action size ${action.size}`);
            return {
                ...state,
                playlistSize: action.size,
            };
        }

        default:
            return state;
    }
}
