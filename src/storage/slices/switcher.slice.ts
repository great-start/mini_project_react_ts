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
        changeMode: state => {
            if (!state.switcher) {
                state.switcher = !state.switcher;
                state.message = 'Night Mode';
            } else {
                state.switcher = !state.switcher;
                state.message = 'Day Mode';
            }
        },
        setDefaultSwitch: state => {
            state.switcher = true;
        }
    }
});

export const {changeMode, setDefaultSwitch} = switcherSlice.actions;
export const switcherReducer = switcherSlice.reducer;
