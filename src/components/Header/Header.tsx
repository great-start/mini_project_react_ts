import React, {FC} from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {GenreList} from "../GenreList/GenreList";

export const Header: FC = () => {

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'popular'}>Popular</NavLink>
                <GenreList/>
            </div>
        </div>
    );
}
