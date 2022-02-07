import React, {FC, useEffect} from 'react';

import css from './MoviesList.module.css';
import {MovieCard} from "../MovieCard/MovieCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getPopularMovies, nextPage} from "../../storage";

export const MoviesList: FC = () => {

    const {movies, page, error_messages} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularMovies(page));
    },[page])

    return (
        <>
            <div className={css.moviesList}>
                {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <button onClick={() => dispatch(nextPage())}>NEXT</button>
            <p>{page}</p>
            <button onClick={() => dispatch(previousPage())} >PREVIOUS</button>
            <p>{error_messages && error_messages}</p>
        </>
    );
};
