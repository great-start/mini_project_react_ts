import React, {FC, useEffect} from 'react';

import {Link} from "react-router-dom";
import css from './GenreList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../storage";

export const GenreList: FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genreReducer);

    useEffect( () => {
        dispatch(getAllGenres());
    },[])

    return (
        <div className={css.dropdown}>
            <button className={css.dropBtn}>Genres</button>
            <div className={css.dropdownContent}>
                {genres.map(genre => <Link to={`genres/${genre.name}`} key={genre.id}>{genre.name}</Link>)}
            </div>
        </div>
    );
};
