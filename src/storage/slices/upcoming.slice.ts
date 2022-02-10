import {createAsyncThunk, createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, IUpcomingMovies} from "../../interfaces";
import {moviesService} from "../../services";


interface IUpcomingMovBox {
    movies: IUpcomingMovies;
    upcomingMovieID: number,
    showMovie: IMovie[],
    style: boolean;
}

const initialState: IUpcomingMovBox = {
    movies: {
        page: 1,
        results: []
    },
    upcomingMovieID: 0,
    style: false,
    showMovie: []
};

export const getUpcomingMovies = createAsyncThunk(
    'upcomingMovies/getUpcomingMovies',
    async (page: number, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await moviesService.getUpcoming(page);
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
        showMovieByID: (state) => {
            state.style = false;
            state.upcomingMovieID = state.upcomingMovieID + state.showMovie.length;
            state.showMovie = [];
            if (state.upcomingMovieID > 19) {
                state.upcomingMovieID = 0;
            }
            for (let i = 0; i <= 3; i++) {
                state.showMovie.push(state.movies.results[state.upcomingMovieID + i]);
            }
        },
        setVisible: (state) => {
            state.style = true;
        },
        setDefaultUpcoming: (state) => {
            state.showMovie = [];
        }
    }
});

export const {setUpcomingMov, showMovieByID, setVisible, setDefaultUpcoming} = upcomingMovies.actions;
export const upcomingReducer = upcomingMovies.reducer;