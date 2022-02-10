import React, {FC} from "react";

import css from './DayNightSwitcher.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeMode} from "../../storage";

export const DayNightSwitcher: FC = () => {

    const dispatch = useAppDispatch();
    const {message, switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <div className={css.switcher}>
            <button onClick={() => dispatch(changeMode())} className={switcher ? css.day : css.night}>{message}</button>
        </div>
    )
}