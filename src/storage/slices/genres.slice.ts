import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genresService} from "../../services";

interface IGenreState {
    genres: IGenre[],
    movieGenres: IGenre[];
}

const initialState: IGenreState = {
    genres: [],
    movieGenres: []
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_: void, {dispatch, rejectWithValue}) => {
        try {
            const {data: {genres}} = await genresService.getAllGenres();
            dispatch(setAllGenres({genres}));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setAllGenres: (state, action: PayloadAction<{genres: IGenre[]}>) => {
            state.genres = action.payload.genres;
        },
        showGenres: (state, action:PayloadAction<string[]>) => {
            state.movieGenres = [];
            state.genres.forEach(genre => {
                action.payload.forEach(id => {
                    if (genre.id.toString() === id.toString()) {
                        state.movieGenres.push({id:genre.id,name:genre.name});
                    }
                })
            });
        }
    },
    extraReducers: (builder => {
        builder.addCase(getAllGenres.rejected, (_,action) => {
            console.log(action.payload);
        });
    })
});


export const {setAllGenres, showGenres} = genreSlice.actions;
export const genreReducer = genreSlice.reducer;
