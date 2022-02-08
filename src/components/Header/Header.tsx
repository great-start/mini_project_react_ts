import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {GenreList} from "../GenreList/GenreList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setDefault} from "../../storage";
import DayNightSwitcher from "../DatNigthSwitcher/DayNightSwitcher";

export const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {status} = useAppSelector(state => state.switcherReducer);

    return (
        <div className={status ? css.header_day : css.header_night}>
            <div className={css.nav}>
                <NavLink to={'popular'} onClick={() => dispatch(setDefault())}>Popular</NavLink>
                <GenreList/>
            </div>
            <DayNightSwitcher/>
        </div>
    );
}
