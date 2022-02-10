import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Movie, PaginationButtons} from '..';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieByGenre, getPopularMovies} from "../../storage";
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

    return (
        <>
            <div className={css.moviesBox}>
                <h2 className={switcher ? css.t_day : css.t_night}>{params.genre && params.genre}</h2>
                <div className={css.moviesList}>
                    {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>
            {!!movies.length && <PaginationButtons/>}
            <p>{error_messages && error_messages}</p>
        </>
    );
};
