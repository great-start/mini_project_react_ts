import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ILoginInfo {
    password: string,
    logStatus: boolean,
    message: string
}

const initialState: ILoginInfo = {
    password: '',
    logStatus: false,
    message: 'You are not authorized'
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        LogIn: (state, action:PayloadAction<string>) => {
            if (action.payload === '2022') {
                state.logStatus = true;
                state.message = 'You are logged in'
            }
        },
    }
});

export const {LogIn} = authSlice.actions;
export const authReducer = authSlice.reducer;