import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IMoviesState {
    movies: IMovie[]
}

const initialState: IMoviesState = {
    movies: [],
}

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (_,{dispatch,rejectWithValue}) => {
        try {
            const {results} = await moviesService.getPopular();
            dispatch(setPopularMovies(results));
        } catch (e) {
            rejectWithValue((e as Error).message);
            console.log((e as Error).message);
        }
    }
)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setPopularMovies: (state, action:PayloadAction<IMovie[]>) => {
            console.log(action.payload);
            state.movies = action.payload;
        }
    },
    extraReducers: (builder => {
        builder.addCase(getPopularMovies.pending, (state, action) => {
            console.log(action.payload);
        });
        builder.addCase(getPopularMovies.rejected, (action:any) => {
                console.log(action);
            }
        );
    })
});

export const {setPopularMovies} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;