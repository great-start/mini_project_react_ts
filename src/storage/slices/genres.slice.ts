import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenres} from "../../interfaces";
import {genresService} from "../../services";


const initialState :IGenres = {
    genres: [],
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await genresService.getAllGenres();
            dispatch(setAllGenres(data));
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setAllGenres: (state, action: PayloadAction<IGenres>) => {
            state.genres = action.payload.genres;
        }
    },
    extraReducers: (builder => {
        builder.addCase(getAllGenres.rejected, (_,action) => {
            console.log(action.payload);
        });
    })
});


export const {setAllGenres} = genreSlice.actions;
export const genreReducer = genreSlice.reducer;
