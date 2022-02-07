import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IMoviesList {
    page: number,
    movies: null | IMovie[],
    movieInfo: null | IMovie;
    status: null | string;
    error_messages?: null | string;
}

const initialState: IMoviesList = {
    page: 1,
    movies: [],
    movieInfo: null,
    status: null,
    error_messages: null,
}

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (page: number, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopular(page);
            dispatch(setPopularMovies(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setPopularMovies: (state, action: PayloadAction<{ results: IMovie[], page: number }>) => {
            state.page = action.payload.page;
            state.movies = action.payload.results;
        },
        nextPage: (state) => {
            state.page++;
        },
        previousPage: (state) => {
            state.page--;
        },
        movieInfo: (state, action:PayloadAction<{ movie:IMovie }>) => {
            console.log(action.payload.movie);
            state.movieInfo = action.payload.movie;
        }
    },
    extraReducers: (builder => {
        builder.addCase(getPopularMovies.pending, (state, action) => {
            state.status = 'pending';
        });
        builder.addCase(getPopularMovies.rejected, (_,action) => {
            console.log(action.payload);
        });
    })
});

export const {setPopularMovies, nextPage, previousPage, movieInfo} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;