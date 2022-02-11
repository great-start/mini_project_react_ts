import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ILoginInfo {
    password: string,
    logStatus: boolean
}

const initialState: ILoginInfo = {
    password: '',
    logStatus: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        LogIn: (state, action:PayloadAction<string>) => {
            if (action.payload === '2022') {
                state.logStatus = true;
            }
        },
    }
});

export const {LogIn} = authSlice.actions;
export const authReducer = authSlice.reducer;