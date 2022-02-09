import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieByGenre, getPopularMovies, nextPage, previousPage, setDefault} from "../../storage";
import {Movie} from '../Movie/Movie';
import css from './MoviesList.module.css';


export const MoviesList: FC = () => {

    const {movies, page, error_messages, genreID} = useAppSelector(state => state.moviesReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);
    const params = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!!genreID) {
            dispatch(getMovieByGenre({genre: genreID, page: page}));
        } else {
            dispatch(getPopularMovies(page));
        }
    }, [page, genreID]);

    console.log('render');
    return (
        <>
            <div className={css.moviesBox}>
                <h2 className={switcher ? css.t_day : css.t_night}>{params.genre && params.genre}</h2>
                <div className={css.moviesList}>
                    {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>
            <div className={css.buttons}>
                <button onClick={() => dispatch(previousPage())} disabled={page === 1}>PREVIOUS</button>
                <p>Page: {page}</p>
                <button onClick={() => dispatch(nextPage())}>NEXT</button>
            </div>
            <p>{error_messages && error_messages}</p>
        </>
    );
};
