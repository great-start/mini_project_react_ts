import React, {FC, useEffect} from 'react';

import css from './MoviesList.module.css';
import {MovieCard} from "../MovieCard/MovieCard";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getPopularMovies} from "../../storage";

export const MoviesList: FC = () => {

    const {movies} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPopularMovies())
    },[])

    return (
        <>
            <div className={css.moviesList}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <button>NEXT</button>
            <p></p>
        </>
    );
};
