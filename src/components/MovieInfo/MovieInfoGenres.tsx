import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {setGenre, showGenres} from "../../storage";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './MovieInfo.module.css';

export const MovieInfoGenres: FC<{ movGenres: string[] }> = ({movGenres}) => {

    const dispatch = useAppDispatch();
    const {movieGenres} = useAppSelector(state => state.genreReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);

    useEffect(() => {
        dispatch(showGenres(movGenres));
    }, []);

    return (
        <ul>
            {movieGenres && movieGenres.map(genre =>
                <li key={genre.id} className={switcher ? css.list : css.listNight}>
                    <Link to={`/genres/${genre.name}`} onClick={() => dispatch(setGenre(genre.id))}>{genre.name}</Link>
                </li>)}
        </ul>
    );
};
