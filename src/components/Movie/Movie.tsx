import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {picUrl} from "../../constants";
import css from './Movie.module.css';
import {Link} from "react-router-dom";



export const Movie: FC<{movie:IMovie}> = ({movie}) => {

    const {id, poster_path, original_title, title} = movie;

    return (
        <Link to={`/movies/${id}`} state={movie}>
            <div className={css.movie}>
                <img src={`${picUrl.w185}${poster_path}`} alt={title}/>
                <div>{original_title}</div>
            </div>
        </Link>
    )
};
