import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  showPlayer: false,
  isPlaying: false,
  currentTrackLink: '',
  id: 8,
  ids: [],
  isShuffle: false,
  isRepeat: false
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action) => {
      state.isPlaying = action.payload;
      state.showPlayer = true;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrackLink = action.payload;
    },
    setTrackId: (state, action) => {
      state.id = action.payload;
    },
    setTracksId: (state, action) => {
      state.ids.push(Number(action.payload));
    },
    clearTracksId: (state) => {
      state.ids = [];
    },
    playNextTrack: (state, action) => {
        state.id = state.ids[action.payload + 1]
    },
    playPrevTrack: (state, action) => {
      state.id = state.ids[action.payload - 1]
    },
    shuffleTracks: (state) => {
      state.isShuffle = true;
      for (let i = state.ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.ids[i], state.ids[j]] = [state.ids[j], state.ids[i]];
      }
    },
    sortTracks: (state) => {
      state.isShuffle = false;
      state.ids = state.ids.sort((a, b) => a - b);
    },
    repeatTrack: (state) => {
      state.isRepeat = !state.isRepeat;
    }
  }
});

export const {
  play,
  setCurrentTrack,
  setTrackId,
  setTracksId,
  clearTracksId,
  playNextTrack,
  playPrevTrack,
  shuffleTracks,
  sortTracks,
  repeatTrack
} = playerSlice.actions;

export default playerSlice.reducer;