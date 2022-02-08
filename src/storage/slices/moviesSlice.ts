import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {genresService, moviesService} from "../../services";

interface IMoviesList {
    page: number,
    movies: null | IMovie[],
    genreID: number
    status: null | string;
    error_messages?: null | string;
}

const initialState: IMoviesList = {
    page: 1,
    movies: [],
    genreID: 0,
    status: null,
    error_messages: null,
}

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (page: number, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopular(page);
            dispatch(setMoviesList(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

export const getMovieByGenre = createAsyncThunk(
    'genreSlice/getMovieByGenre',
    async (genre:number,{dispatch,rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMoviesByGenre(genre);
            console.log(data);
            dispatch(setMoviesList(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMoviesList: (state, action: PayloadAction<{ results: IMovie[], page: number }>) => {
            state.page = action.payload.page;
            state.movies = action.payload.results;
        },
        nextPage: (state) => {
            state.page++;
        },
        previousPage: (state) => {
            state.page--;
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

export const {setMoviesList, nextPage, previousPage} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;