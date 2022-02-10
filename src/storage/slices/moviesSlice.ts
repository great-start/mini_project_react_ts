import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IMoviesList {
    page: number,
    movies: IMovie[],
    genreID: number
    status: boolean;
    error_messages?: null | string;
}

const initialState: IMoviesList = {
    page: 1,
    movies: [],
    genreID: 0,
    status: false,
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
    async ({genre, page}: { genre: number, page: number }, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMoviesByGenre(genre, page);
            dispatch(setMoviesList(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

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
        },
        setGenre: (state, action) => {
            state.movies = [];
            state.genreID = action.payload;
            state.page = 1;
        },
        setDefault: (state) => {
            state.page = 1;
            state.genreID = 0;
        }
    },
    extraReducers: (builder => {
        builder.addCase(getMovieByGenre.rejected, (_, action) => {
            console.log(action.payload);
        });
        builder.addCase(getPopularMovies.rejected, (_,action) => {
            console.log(action.payload);
        });
    })
});

export const {setMoviesList, nextPage, previousPage, setGenre, setDefault} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;