/* eslint-disable no-debugger */
import { store } from '../../store';
import {
    addToFavoriteStartAC,
    addToFavoriteSuccessAC,
    addToFavoriteErrorAC,
    removeFromFavoriteStartAC,
    removeFromFavoriteSuccessAC,
    removeFromFavoriteErrorAC,
    getFavoriteStartAC,
    getFavoriteSuccessAC,
    getFavoriteErrorAC,
    getTracksStartAC,
    getTracksSuccessAC,
    getTracksErrorAC,
    getTrackByIdStartAC,
    getTrackByIdSuccessAC,
    getTrackByIdErrorAC,
    getSelectionStartAC,
    getSelectionSuccessAC,
    getSelectionErrorAC,
    getSelectionByIdStartAC,
    getSelectionByIdSuccessAC,
    getSelectionByIdErrorAC,
    // setCurrentTrackIdAC,
    setCurrentTrackAC
} from '../creators/catalog';

import { trackParserById } from '../../selectors/catalog';

import { catalogAPI } from '../../../api/api';

export const addToFavorite = (id) => async (dispatch) => {
    dispatch(addToFavoriteStartAC());

    try {
        const response = await catalogAPI.addToFavorite(id);
        dispatch(addToFavoriteSuccessAC(response));
    } catch (error) {
        dispatch(addToFavoriteErrorAC(error));
    }
};

export const removeFromFavorite = (id) => async (dispatch) => {
    dispatch(removeFromFavoriteStartAC());

    try {
        const response = await catalogAPI.removeFromFavorite(id);
        dispatch(removeFromFavoriteSuccessAC(response));
    } catch (error) {
        dispatch(removeFromFavoriteErrorAC(error));
    }
};

export const getFavorite = () => async (dispatch) => {
    dispatch(getFavoriteStartAC());

    try {
        const response = await catalogAPI.getFavorite();
        dispatch(getFavoriteSuccessAC(response));
    } catch (error) {
        dispatch(getFavoriteErrorAC(error));
    }
};

export const getTracks = () => async (dispatch) => {

    dispatch(getTracksStartAC());

    try {
        const response = await catalogAPI.track();
        dispatch(getTracksSuccessAC(response.data));
    } catch (error) {
        dispatch(getTracksErrorAC(error));
    }
};

export const getTrack = (id) => async (dispatch) => {

    dispatch(getTrackByIdStartAC());

    try {
        const response = await catalogAPI.track(id);
        dispatch(getTrackByIdSuccessAC(response.data));
    } catch (error) {
        dispatch(getTrackByIdErrorAC(error));
    }
};


export const getSelections = (id) => async (dispatch) => {

    dispatch(getSelectionByIdStartAC());

    try {
        const response = await catalogAPI.selection(id);
        dispatch(getSelectionByIdSuccessAC(response));
    } catch (error) {
        dispatch(getSelectionByIdErrorAC(error));
    }
};

export const getSelection = (id) => async (dispatch) => {

    dispatch(getSelectionStartAC());

    try {
        const response = await catalogAPI.selection(id);
        dispatch(getSelectionSuccessAC(response));
    } catch (error) {
        dispatch(getSelectionErrorAC(error));
    }
};

export const setActiveTrackById = (id) => (dispatch) => {
    console.log('store');
    console.log(store);
    const trackInfo = trackParserById(id)(store.getState());
    console.log('trackInfo setActiveTrackById thunk');
    console.log(trackInfo);
    dispatch(setCurrentTrackAC({
        id,
        title: trackInfo.title.text,
        author: trackInfo.author.text,
        album: trackInfo.album.text,
        time: trackInfo.time.seconds,
    }));

};