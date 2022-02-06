import React, {FC, useEffect, useState} from 'react';

import css from './MoviesList.module.css';
import {moviesService} from "../../services/movies.service";

export const MoviesList: FC = () => {

    let [movies, setMovies] = useState(null);

    useEffect(() => {
        console.log(moviesService.getPopular());;
    },[])

    return (
        <div className={css.moviesList}>
            {}
        </div>
    );
};
