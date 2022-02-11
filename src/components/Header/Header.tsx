import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setDefault} from "../../storage";
import {setDefaultUpcoming} from '../../storage';
import {DayNightSwitcher, NavGenreList} from '..';
import css from './Header.module.css';

export const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {switcher} = useAppSelector(state => state.switcherReducer);
    const {logStatus} = useAppSelector(state => state.authReducer);

    return (
        <div className={switcher ? css.header_day : css.header_night}>
            <div className={switcher ? css.nav : `${css.nav} ${css.navNight}`}>
                {logStatus && <>
                    <NavLink to={'/'} onClick={() => dispatch(setDefaultUpcoming())}>
                        Home
                    </NavLink>
                    <NavLink to={'popular'} onClick={() => dispatch(setDefault())}>
                        Popular
                    </NavLink>
                    <NavGenreList/>
                </>}
            </div>
            {logStatus && <DayNightSwitcher/>}
        </div>
    );
}
