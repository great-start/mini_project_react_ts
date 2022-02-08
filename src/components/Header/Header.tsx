import React, {FC} from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {GenreList} from "../GenreList/GenreList";
import {useAppDispatch} from "../../hooks";
import {setDefault} from "../../storage";

export const Header: FC = () => {

    const dispatch = useAppDispatch();

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'popular'} onClick={() => dispatch(setDefault())}>
                    <button >Popular</button></NavLink>
                <GenreList/>
            </div>
        </div>
    );
}
