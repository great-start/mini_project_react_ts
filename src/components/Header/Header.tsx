import React, {FC} from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header: FC = () => {
    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'}>Movies</NavLink>
            </div>
        </div>
    );
};
