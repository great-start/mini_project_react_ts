import React, {FC, useEffect, useState} from 'react';

import css from './MoviesList.module.css';
import {moviesService} from "../../services/movies.service";
import {MovieCard} from "../MovieCard/MovieCard";
import {IMovie} from "../../interfaces";

export const MoviesList: FC = () => {

    let [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
            moviesService.getPopular().then(value => setMovies(value.results));
    },[])

    console.log(movies);

    return (
        <div className={css.moviesList}>
            {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};
