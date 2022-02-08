import React, {FC, useEffect} from 'react';

import css from './MoviesList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieByGenre, getPopularMovies, nextPage, previousPage, setDefault} from "../../storage";
import { Movie } from '../Movie/Movie';


export const MoviesList: FC = () => {

    const {movies, page, error_messages, genreID} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!!genreID) {
            dispatch(getMovieByGenre({genre:genreID, page: page}));
        } else {
            dispatch(getPopularMovies(page));
        }
    }, [page, genreID]);

    return (
        <>
            <div className={css.moviesList}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <button onClick={() => dispatch(previousPage())} disabled={page === 1}>PREVIOUS</button>
                <p>{page}</p>
                <button onClick={() => dispatch(nextPage())}>NEXT</button>
            </div>
            <p>{error_messages && error_messages}</p>
        </>
    );
};
