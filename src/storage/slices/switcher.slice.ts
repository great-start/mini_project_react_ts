import {createSlice} from "@reduxjs/toolkit";


interface ISwitcher {
    switcher: boolean,
    message: string;
}

const initialState:ISwitcher = {
    switcher: true,
    message: 'Day Mode',
}

const switcherSlice = createSlice({
    name: 'switcherSlice',
    initialState,
    reducers: {
        changeMode: (state) => {
            if (!state.switcher) {
                state.switcher = true;
                state.message = 'Night Mode';
            } else {
                state.switcher = false;
                state.message = 'Day Mode';
            }
        }
    }
});

export const {changeMode} = switcherSlice.actions;
export const switcherReducer = switcherSlice.reducer;
