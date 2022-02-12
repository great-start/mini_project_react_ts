import React, { FC } from 'react';

import css from './Footer.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {LogOut, setDefaultUpcoming} from "../../storage";
import {useNavigate} from "react-router-dom";

export const Footer:FC = () => {

    const {message, logStatus} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handler() {
        dispatch(LogOut());
        dispatch(setDefaultUpcoming());
        navigate('/', {replace: true});
    }

    return (
        <div className={css.footer}>
            <div className={css.footerForm}>
                <h3 className={logStatus ? css.messageLogin : css.messageLogout}>{message}</h3>
                {logStatus && <button onClick={() => handler()}>Log Out</button>}
            </div>
        </div>
    );
};
