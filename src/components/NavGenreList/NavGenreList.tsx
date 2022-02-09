import React, {FC, useEffect} from 'react';

import {Link} from "react-router-dom";
import css from './NavGenreList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, setDefault, setGenre} from "../../storage";
import {IGenre} from "../../interfaces";

export const NavGenreList: FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genreReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);

    useEffect( () => {
        dispatch(getAllGenres());
    },[])

    function handler(genre: IGenre) {
        dispatch(setDefault());
        dispatch(setGenre(genre.id));
    }

    return (
        <div className={css.dropdown}>
            <button className={switcher ? css.dropBtn : `${css.dropBtn} ${css.dropBtnNight}`}>Genres</button>
            <div className={css.dropdownContent}>
                {genres.map(genre =>
                    <Link to={`genres/${genre.name}`} onClick={() => handler(genre)} key={genre.id}>{genre.name}</Link>
                )}
            </div>
        </div>
    );
};
