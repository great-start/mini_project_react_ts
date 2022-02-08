import React, {FC, useEffect} from 'react';

import {Link} from "react-router-dom";
import css from './GenreList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, setDefault, setGenre} from "../../storage";
import {IGenre} from "../../interfaces";

export const GenreList: FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genreReducer);
    console.log(genres);

    useEffect( () => {
        dispatch(getAllGenres());
    },[])

    function handler(genre: IGenre) {
        dispatch(setDefault());
        dispatch(setGenre(genre.id));
    }

    return (
        <div className={css.dropdown}>
            <button className={css.dropBtn}>Genres</button>
            <div className={css.dropdownContent}>
                {genres.map(genre =>
                    <Link to={`genres/${genre.name}`} onClick={() => handler(genre)} key={genre.id} state={genre}>{genre.name}</Link>
                )}
            </div>
        </div>
    );
};
