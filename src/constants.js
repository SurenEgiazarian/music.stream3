import authorsData from './data/authorsData.json';
import yearsData from './data/yearsData.json';
import genresData from './data/genresData.json';
import playlistMy from './data/playlist-my.json';
import playlist1 from './data/playlist-1.json';
import playlist2 from './data/playlist-2.json';
import playlist3 from './data/playlist-3.json';

export const ICON_NOTE = 'img/icon/sprite.svg#icon-note';
export const ICON_PREV = 'img/icon/sprite.svg#icon-prev';
export const ICON_PLAY = 'img/icon/sprite.svg#icon-play';
export const ICON_NEXT = 'img/icon/sprite.svg#icon-next';
export const ICON_REPEAT = 'img/icon/sprite.svg#icon-repeat';
export const ICON_SHUFFLE = 'img/icon/sprite.svg#icon-shuffle';
export const ICON_LIKE = 'img/icon/sprite.svg#icon-like';
export const ICON_DISLIKE = 'img/icon/sprite.svg#icon-dislike';
export const ICON_VOLUME = 'img/icon/sprite.svg#icon-volume';
export const ICON_SEARCH = 'img/icon/sprite.svg#icon-search';
export const ICON_WATCH = 'img/icon/sprite.svg#icon-watch';
export const BUTTON_POPUP_SPACE = 16;

export const CONTROLS_SIZES = {
  prev: { width: '15px', height: '14px' },
  play: { width: '22px', height: '20px' },
  next: { width: '15px', height: '14px' },
  repeat: { width: '18px', height: '12px' },
  shuffle: { width: '19px', height: '12px' }
};

export const TRACK_FILTERS = [
  { id: 1, type: 'author', text: 'исполнителю', content: authorsData },
  { id: 2, type: 'year', text: 'году выпуска', content: yearsData },
  { id: 3, type: 'genre', text: 'жанру', content: genresData }
];

export const PLAYLISTS = [
  { id: 0, content: playlistMy },
  { id: 1, content: playlist1 },
  { id: 2, content: playlist2 },
  { id: 3, content: playlist3 }
];

export const colsWidth = [
  { id: 1, width: '447px' },
  { id: 2, width: '321px' },
  { id: 3, width: '245px' },
  { id: 4, width: '60px' }
];
