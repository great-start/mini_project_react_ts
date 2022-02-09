import React from "react";

import css from './DayNightSwitcher.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeMode} from "../../storage";

export default function DayNightSwitcher () {

    const dispatch = useAppDispatch();
    const {message, switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <div className={css.switcher}>
            <button onClick={() => dispatch(changeMode())} className={switcher ? css.day : css.night}>{message}</button>
        </div>
    );
}