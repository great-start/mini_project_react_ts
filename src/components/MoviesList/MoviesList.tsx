import React, {FC, useEffect, useState} from 'react';

import css from './MoviesList.module.css';
import {moviesService} from "../../services/movies.service";
import {MovieCard} from "../MovieCard/MovieCard";
import {IMovie} from "../../interfaces";

export const MoviesList: FC = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    let [page, setPage] = useState<number>(1);
    console.log(page)

    useEffect(() => {
        moviesService.getPopular(page).then(value => setMovies(value.results));
        moviesService.getPoster('/87BbV8DdgKzQKT1avH2VqW2r3dO.jpg').then(value => console.log(value))
    },[page])

    console.log(movies);


    return (
        <>
            <div className={css.moviesList}>
                {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <button onClick={() => setPage(++page)}>NEXT</button>
            <p>{page}</p>
        </>
    );
};
