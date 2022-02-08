import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import {picUrl} from "../../constants";
import {IMovie} from "../../interfaces";
import css from './MovieInfo.module.css';
import {useAppDispatch} from "../../hooks";


export const MovieInfo: FC = () => {

    const dispatch = useAppDispatch();
    const location = useLocation();
    const state = location.state as IMovie;
    const {popularity,backdrop_path,overview,title,original_language,release_date,genre_ids,vote_average} = state;

    return (
        <div className={css.movInfoBox}>
            <img src={`${picUrl.w1280}/${state.backdrop_path}`} alt={state.title}/>
        </div>
    );
};

