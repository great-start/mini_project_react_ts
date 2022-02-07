import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {picUrl} from "../../constants";
import css from './Movie.module.css';
import {useAppDispatch} from "../../hooks";
import {Link} from "react-router-dom";


export const Movie: FC<{movie:IMovie}> = ({movie : {id ,poster_path,original_title,title}}) => {

    const dispatch = useAppDispatch();

    return (
        <Link to={`${title}`} onClick={}>
            <div className={css.movie}>
                <img src={`${picUrl.w185}${poster_path}`} alt=""/>
                <div>{original_title}</div>
            </div>
        </Link>
    );
};
