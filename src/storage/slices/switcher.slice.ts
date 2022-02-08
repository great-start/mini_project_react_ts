import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ISwitcher {
    status: boolean,
    message: string;
}

const initialState:ISwitcher = {
    status: false,
    message: 'Day Mode',
}

const switcherSlice = createSlice({
    name: 'switcherSlice',
    initialState,
    reducers: {
        changeMode: (state) => {
            if (!state.status) {
                state.status = true;
                state.message = 'Night Mode';
            } else {
                state.status = false;
                state.message = 'Day Mode';
            }
        }
    }
});

export const {changeMode} = switcherSlice.actions;
export const switcherReducer = switcherSlice.reducer;
