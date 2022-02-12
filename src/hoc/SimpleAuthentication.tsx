import React, {FC, FormEvent, useRef} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {LogIn} from "../storage";
import css from './SimpleAuthentication.module.css';

interface IProps {
    children: JSX.Element;
}

export const SimpleAuthentication: FC<IProps> = ({children}) => {

    const {logStatus} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const input = useRef<HTMLInputElement>(null);

    function handler(e: FormEvent) {
        e.preventDefault();
        if (input.current) {
            dispatch(LogIn(input.current.value));
            input.current.value = '';
        }
    }

    if (logStatus) return children;

    return (
        <>
            <form onSubmit={handler} className={css.form}>
                <label><span>Password:</span> <input type="text" placeholder={'password'} ref={input}/></label>
                <button className={css.logIn}>Log in</button>
                <p>Password: 2022</p>
            </form>
        </>
    );
};
