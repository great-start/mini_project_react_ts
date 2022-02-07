import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services/movies.service";

interface IMoviesState {
    movies: IMovie[]
}

const initialState: IMoviesState = {
    movies: [],
}

export const getPopularMovies = createAsyncThunk(
    'moviesSlice/getPopularMovies',
    async (page:number,{dispatch,rejectWithValue}) => {
        try {
            const {data} = await moviesService.getPopular(page);
            dispatch(setPopularMovies(data.movies));
        } catch (e) {
            rejectWithValue(e);
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setPopularMovies: (state, action:PayloadAction<IMovie[]>) => {

        }
    },
    extraReducers: {
        [getPopularMovies.pending]: (state, action) => {

        }
    }
});

export const {setPopularMovies} = moviesSlice.actions;