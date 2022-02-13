import React, {FC, FormEvent, useEffect, useRef} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {LogIn} from "../storage";
import css from './SimpleAuthentication.module.css';

interface IProps {
    children: JSX.Element;
}

export const SimpleAuthentication: FC<IProps> = ({children}) => {

    const {logStatus, placeholder, passCheck} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
            dispatch(LogIn());
    }, []);

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
                <label><span>Password:</span> <input type="text" placeholder={passCheck ? placeholder : placeholder} ref={input} className={passCheck ? css.normal : css.placeholder}/></label>
                <button className={css.logIn}>Log in</button>
                <p>Password: 2022</p>
            </form>
        </>
    );
};
