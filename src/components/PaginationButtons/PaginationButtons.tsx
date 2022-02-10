import React, {FC} from 'react';

import {nextPage, previousPage} from "../../storage";
import {useAppDispatch, useAppSelector} from "../../hooks";
import style from "../MoviesList/MoviesList.module.css";
import css from './PaginationButtons.module.css';

export const PaginationButtons: FC = () => {

    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.moviesReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <div className={style.buttons}>
            <button onClick={() => dispatch(previousPage())} disabled={page === 1}>PREVIOUS</button>
            <p className={switcher ? css.t_day : css.t_night}>Page: {page} of 500</p>
            <button onClick={() => dispatch(nextPage())} disabled={page === 501}>NEXT</button>
        </div>
    );
};
