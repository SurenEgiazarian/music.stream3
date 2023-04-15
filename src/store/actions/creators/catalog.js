/* eslint-disable no-debugger */
import {
    ADD_TO_FAVORITE_START,
    ADD_TO_FAVORITE_SUCCESS,
    ADD_TO_FAVORITE_ERROR,
    REMOVE_FROM_FAVORITE_START,
    REMOVE_FROM_FAVORITE_SUCCESS,
    REMOVE_FROM_FAVORITE_ERROR,
    GET_FAVORITE_START,
    GET_FAVORITE_SUCCESS,
    GET_FAVORITE_ERROR,
    GET_TRACKS_START,
    GET_TRACKS_SUCCESS,
    GET_TRACKS_ERROR,
    GET_TRACK_BY_ID_START,
    GET_TRACK_BY_ID_SUCCESS,
    GET_TRACK_BY_ID_ERROR,
    GET_SELECTION_START,
    GET_SELECTION_SUCCESS,
    GET_SELECTION_ERROR,
    GET_SELECTION_BY_ID_START,
    GET_SELECTION_BY_ID_SUCCESS,
    GET_SELECTION_BY_ID_ERROR,
    SET_CURRENT_TRACK_ID,
    SET_CURRENT_TRACK,
    SET_PLAYLIST_SIZE,
} from '../types/catalog';

export const addToFavoriteStartAC = () => ({
    type: ADD_TO_FAVORITE_START,
});

export const addToFavoriteSuccessAC = (response) => ({
    type: ADD_TO_FAVORITE_SUCCESS,
    response,
});

export const addToFavoriteErrorAC = (error) => ({
    type: ADD_TO_FAVORITE_ERROR,
    error,
});

export const removeFromFavoriteStartAC = () => ({
    type: REMOVE_FROM_FAVORITE_START,
});

export const removeFromFavoriteSuccessAC = (response) => {
    console.log('removeFromFavoriteSuccessAC');
    return {
        type: REMOVE_FROM_FAVORITE_SUCCESS,
        response,
    };
};

export const removeFromFavoriteErrorAC = (error) => ({
    type: REMOVE_FROM_FAVORITE_ERROR,
    error,
});

export const getFavoriteStartAC = () => ({
    type: GET_FAVORITE_START,
});

export const getFavoriteSuccessAC = (response) => ({
    type: GET_FAVORITE_SUCCESS,
    response,
});

export const getFavoriteErrorAC = (error) => ({
    type: GET_FAVORITE_ERROR,
    error,
});

export const getTracksStartAC = () => ({
    type: GET_TRACKS_START,
});

export const getTracksSuccessAC = (data) => {
    console.log('getTracksSuccessAC');
    return {
        type: GET_TRACKS_SUCCESS,
        tracks: data,
    };
};

export const getTracksErrorAC = (error) => ({
    type: GET_TRACKS_ERROR,
    error,
});

export const getTrackByIdStartAC = () => ({
    type: GET_TRACK_BY_ID_START,
});

export const getTrackByIdSuccessAC = (data) => {
    console.log('getTrackByIdSuccessAC');
    return {
        type: GET_TRACK_BY_ID_SUCCESS,
        track: data,
    };
};

export const getTrackByIdErrorAC = (error) => ({
    type: GET_TRACK_BY_ID_ERROR,
    error,
});

export const getSelectionStartAC = () => ({
    type: GET_SELECTION_START,
});

export const getSelectionSuccessAC = (response) => ({
    type: GET_SELECTION_SUCCESS,
    response,
});

export const getSelectionErrorAC = (error) => ({
    type: GET_SELECTION_ERROR,
    error,
});

export const getSelectionByIdStartAC = () => ({
    type: GET_SELECTION_BY_ID_START,
});

export const getSelectionByIdSuccessAC = (response) => ({
    type: GET_SELECTION_BY_ID_SUCCESS,
    response,
});

export const getSelectionByIdErrorAC = (error) => ({
    type: GET_SELECTION_BY_ID_ERROR,
    error,
});

export const setCurrentTrackIdAC = (id) => ({
    type: SET_CURRENT_TRACK_ID,
    id,
});

export const setCurrentTrackAC = (payload) => ({
    type: SET_CURRENT_TRACK,
    id: payload.id,
    author: payload.author,
    album: payload.album,
    duration: payload.duration,
    index: payload.index,
});

export const setPlaylistSizeAC = (size) => ({
    type: SET_PLAYLIST_SIZE,
    size,
});