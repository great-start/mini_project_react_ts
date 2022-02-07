import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {picUrl} from "../../constants";
import css from './Movie.module.css';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {movieInfo} from "../../storage";


export const Movie: FC<{movie:IMovie}> = ({movie}) => {

    const {id, poster_path, original_title, title} = movie;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handler(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        dispatch(movieInfo({movie}));
        navigate(`${id}`, );
    }

    return (
        <div className={css.movie} onClick={(e) => handler(e)}>
            <img src={`${picUrl.w185}${poster_path}`} alt={title}/>
            <div>{original_title}</div>
        </div>
    )
};
