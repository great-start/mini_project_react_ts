import React, {FC, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

import {picUrl} from "../../constants";
import {IMovie} from "../../interfaces";
import css from './MovieInfo.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {showGenres} from "../../storage";


export const MovieInfo: FC = () => {

    const location = useLocation();
    const dispatch = useAppDispatch();
    const {movieGenres} = useAppSelector(state => state.genreReducer);
    const state = location.state as IMovie;
    const {popularity,overview,title,original_language,release_date,genre_ids,vote_average,original_title} = state;

    useEffect(() => {
            dispatch(showGenres(genre_ids))
    }, []);

    return (
        <div className={css.movInfoBox}>
            <h2>{title}</h2>
            <div className={css.description}>
                <img src={`${picUrl.w500}/${state.poster_path}`} alt={state.title}/>
                <div>
                    <h3>Release date: {release_date}</h3>
                    <h3>Original language: {original_language}</h3>
                    <h3>Original title: {original_title}</h3>
                    <h3>Overview: {overview}</h3>
                    <h3>Genres:</h3>
                    <ul>
                        {movieGenres && movieGenres.map(genre => <li><Link to={`/genres/${genre}`}>{genre}</Link></li>)}
                    </ul>
                    <h3>Vote Average: {vote_average}</h3>
                    <h3>Popularity: {popularity}</h3>
                </div>
            </div>
        </div>
    );
};

