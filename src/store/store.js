import { configureStore, combineReducers  } from "@reduxjs/toolkit"; //PreloadedState добавить
import { musicAppApi } from "./services";
import searchReducer from './slices/search';
import authReducer from './slices/auth';
import filterReducer from './slices/filter';
import playerReducer from './slices/player';
import playlistsReducer from './slices/playlists';


const rootReducer = combineReducers({
    [musicAppApi.reducerPath]: musicAppApi.reducer,
    search: searchReducer,
    player: playerReducer,
    playlists: playlistsReducer,
    auth: authReducer,
    filter: filterReducer
  });

export const store = configureStore({
    reducer: rootReducer, 
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicAppApi.middleware),
});

