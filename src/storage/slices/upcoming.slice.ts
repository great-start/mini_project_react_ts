import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IUpcomingMovies} from "../../interfaces";
import {moviesService} from "../../services";


interface IUpcomingMovBox {
    movies: IUpcomingMovies;
    moviesPortion: number,
    showMovie: IMovie[],
    style: boolean;
}

const initialState: IUpcomingMovBox = {
    movies: {
        results: []
    },
    moviesPortion: 0,
    showMovie: [],
    style: false
};

export const getUpcomingMovies = createAsyncThunk(
    'upcomingMovies/getUpcomingMovies',
    async (_: void, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await moviesService.getUpcoming();
            dispatch(setUpcomingMov(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

const upcomingMovies = createSlice({
    name: 'upcomingMovies',
    initialState,
    reducers: {
        setUpcomingMov: (state, action:PayloadAction<IUpcomingMovies>) => {
            state.movies.results = action.payload.results;
            for (let i = 0; i <= 3; i++) {
                state.showMovie.push(state.movies.results[i]);
            }
        },
        showMovieByID: state => {
            state.style = false;
            state.moviesPortion = state.moviesPortion + state.showMovie.length;
            state.showMovie = [];
            if (state.moviesPortion > 19) {
                state.moviesPortion = 0;
            }
            for (let i = 0; i <= 3; i++) {
                state.showMovie.push(state.movies.results[state.moviesPortion + i]);
            }
        },
        setVisible: state => {
            state.style = true;
        },
        setDefaultUpcoming: state => {
            state.showMovie = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(getUpcomingMovies.rejected, (_, action) => {
            console.log(action.payload);
        })
    },
})

export const {setUpcomingMov, showMovieByID, setVisible, setDefaultUpcoming} = upcomingMovies.actions;
export const upcomingReducer = upcomingMovies.reducer;