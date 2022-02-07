import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IMoviesList {
    page: number,
    movies: null | IMovie[],
    status: null | string;
    error_messages?: null | string;
}

const initialState: IMoviesList = {
    page: 1,
    movies: [],
    status: null,
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
            action.payload.results.forEach(movie => {
                state.movies.push()
            })
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

export const {setPopularMovies, nextPage, previousPage} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;