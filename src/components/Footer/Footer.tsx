import React, { FC } from 'react';

import css from './Footer.module.css';
import {useAppSelector} from "../../hooks";

export const Footer:FC = () => {

    const {message} = useAppSelector(state => state.authReducer);

    return (
        <div className={css.footer}>
            <h3>{message}</h3>
        </div>
    );
};
