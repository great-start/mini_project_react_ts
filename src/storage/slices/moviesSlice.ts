import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IMoviesList {
    page: number,
    movies: null | IMovie[],
    error_messages?: null | string;
}

const initialState: IMoviesList = {
    page: 1,
    movies: null,
    error_messages: null,
}

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (page:number,{dispatch,rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopular(page);
            dispatch(setPopularMovies(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setPopularMovies: (state, action: PayloadAction<{ results: IMovie[], page: number }>) => {
            state.page = action.payload.page;
            state.movies = action.payload.results;
        },
        nextPage: ((state) => {
            state.page++;
        }),
        previousPage: (state, action) => {
            state.page--;
        }

    },
    extraReducers: (builder => {
        builder.addCase(getPopularMovies.pending, (state, action) => {
            console.log(action.payload);
            state.error_messages = 'loading';
        });
        builder.addCase(getPopularMovies.rejected, (_,action) => {
            console.log(action.payload);
        });
    })
});

export const {setPopularMovies, nextPage} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;