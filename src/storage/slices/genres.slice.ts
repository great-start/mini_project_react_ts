import {createSlice} from "@reduxjs/toolkit";
import {IGenres} from "../../interfaces/genres.interface";


const initialState :IGenres = {
    genres: [],
}

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getAllGenres: (state, action) => {

        }
    }
});


export const genreReducer = genreSlice.reducer;