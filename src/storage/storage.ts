import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";


const rootReducer = combineReducers({
    moviesReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;