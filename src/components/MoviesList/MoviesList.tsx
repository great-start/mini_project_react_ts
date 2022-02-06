import React, {FC, useEffect, useState} from 'react';

import css from './MoviesList.module.css';
import {moviesService} from "../../services/movies.service";

export const MoviesList: FC = () => {

    let [movies, setMovies] = useState(null);

    useEffect(() => {
            const data = moviesService.getPopular();
            console.log(data);
    },[])

    return (
        <div className={css.moviesList}>
            {}
        </div>
    );
};
