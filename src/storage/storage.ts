import {combineReducers, configureStore} from "@reduxjs/toolkit";

import { authReducer } from "./slices/authentication.slice";
import { genreReducer } from "./slices/genres.slice";
import {moviesReducer} from "./slices/movies.slice";
import { switcherReducer } from "./slices/switcher.slice";
import { upcomingReducer } from "./slices/upcoming.slice";


const rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    switcherReducer,
    upcomingReducer,
    authReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;