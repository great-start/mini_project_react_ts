import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ILoginInfo {
    password: string,
    logStatus: boolean,
    message: string,
    placeholder: string,
    passCheck: boolean
}

const initialState: ILoginInfo = {
    password: '',
    logStatus: false,
    message: 'You are not authorized',
    placeholder: 'enter password',
    passCheck: false
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        LogIn: (state, action: PayloadAction<string | undefined>) => {
            const storage = JSON.parse(localStorage.getItem('user') || '{}');
            if (action.payload === '2022' || storage.enter === true) {
                state.logStatus = true;
                state.passCheck = !state.passCheck;
                state.message = 'You are logged in';
                localStorage.setItem('user', JSON.stringify({enter: true}));
            } else {
                state.passCheck = true;
                state.placeholder = 'Wrong password';
            }
        },
        LogOut: state => {
            localStorage.clear();
            state.placeholder = 'enter password';
            state.passCheck = false;
            state.logStatus = false;
            state.message = 'You are not authorized'
        },
    }
});

export const {LogIn, LogOut} = authSlice.actions;
export const authReducer = authSlice.reducer;