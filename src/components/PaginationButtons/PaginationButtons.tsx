import React from 'react';
import css from "../MoviesList/MoviesList.module.css";
import {nextPage, previousPage} from "../../storage";
import {useAppDispatch, useAppSelector} from "../../hooks";

export const PaginationButtons = () => {

    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.moviesReducer);

    return (
        <div className={css.buttons}>
            <button onClick={() => dispatch(previousPage())} disabled={page === 1}>PREVIOUS</button>
            <p>Page: {page}</p>
            <button onClick={() => dispatch(nextPage())} disabled={page === 501}>NEXT</button>
        </div>
    );
};
