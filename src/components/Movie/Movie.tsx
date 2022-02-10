import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {picUrl} from "../../constants";
import {useAppSelector} from "../../hooks";
import { MovieRating } from '../MovieRating/MovieRating';
import css from './Movie.module.css';


export const Movie: FC<{ movie: IMovie }> = ({movie}) => {

    const {switcher} = useAppSelector(state => state.switcherReducer);
    const {id, poster_path, original_title, title} = movie;

    return (
        <div className={css.movieWrap}>
            <Link to={`/movies/${id}`} state={movie} className={css.link}>
                <div className={css.movie}>
                    <img src={`${picUrl.w185}${poster_path}`} alt={title}/>
                    <p className={switcher ? css.movTitle_day : css.movTitle_night}>{original_title}</p>
                </div>
            </Link>
            <MovieRating/>
        </div>
    );
};
