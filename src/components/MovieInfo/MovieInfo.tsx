import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import {picUrl} from "../../constants";
import {IMovie} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {MovieInfoGenres} from "./MovieInfoGenres";
import css from './MovieInfo.module.css';


export const MovieInfo: FC = () => {

    const location = useLocation();
    const state = location.state as IMovie;
    const {popularity, overview, title, original_language, release_date, genre_ids, vote_average, original_title} = state;
    const {switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <div className={css.movInfoBox}>
            <h2 className={switcher ? '' : css.title_night}>{title}</h2>
            <div className={css.description}>
                <img src={`${picUrl.w500}/${state.poster_path}`} alt={state.title}/>
                <div className={switcher ? css.descDay : css.descNight}>
                    <h3>Release date: <span>{release_date}</span></h3>
                    <h3>Original language: <span>{original_language}</span></h3>
                    <h3>Original title: <span>{original_title}</span></h3>
                    <h3>Overview: <span>{overview}</span></h3>
                    <h3>Genres:</h3>
                    <MovieInfoGenres movGenres={genre_ids}/>
                    <h3>Vote Average: <span>{vote_average}</span></h3>
                    <h3>Popularity: <span>{popularity}</span></h3>
                </div>
            </div>
        </div>
    );
};

