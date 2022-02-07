import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/moviesSlice";
import {genreReducer} from "./slices/genres.slice";

const rootReducer = combineReducers({
    moviesReducer,
    genreReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;