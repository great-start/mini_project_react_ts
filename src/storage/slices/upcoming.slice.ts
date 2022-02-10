import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, IUpcomingMovies} from "../../interfaces";
import {moviesService} from "../../services";


interface IUpcomingMovBox {
    movies: IUpcomingMovies;
    upcomingMovieID: number,
    showMovie: IMovie,
    style: boolean;
}

const initialState: IUpcomingMovBox = {
    movies: {
        page: 1,
        results: []
    },
    upcomingMovieID: 0,
    style: false,
    showMovie: {
        genre_ids: [],
        title: ''
    }
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
            state.showMovie = state.movies.results[0];
        },
        showMovieByID: (state) => {
            state.style = false;
            if (state.upcomingMovieID === 19) {
                state.upcomingMovieID = 0;
            } else {
                state.upcomingMovieID++;
            }
            state.showMovie = state.movies.results[state.upcomingMovieID];
        },
        setVisible: (state) => {
            state.style = true;
        }
    }
});

export const {setUpcomingMov, showMovieByID, setVisible} = upcomingMovies.actions;
export const upcomingReducer = upcomingMovies.reducer;