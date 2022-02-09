import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setDefault, setGenre} from "../../storage";
import DayNightSwitcher from "../DatNigthSwitcher/DayNightSwitcher";
import { NavGenreList } from '../NavGenreList/NavGenreList';
import {IGenre} from "../../interfaces";

export const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {switcher} = useAppSelector(state => state.switcherReducer);

    // function handler(genre: IGenre) {
    //     dispatch(setDefault());
    //     dispatch(setGenre(genre.id));
    // }

    return (
        <div className={switcher ? css.header_day : css.header_night}>
            <div className={switcher ? css.nav : `${css.nav} ${css.navNight}`}>
                <NavLink to={'popular'} onClick={() => dispatch(setDefault())}>
                    Popular
                </NavLink>
                <NavGenreList/>
            </div>
            <DayNightSwitcher/>
        </div>
    );
}
