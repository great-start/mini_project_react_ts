import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres, setGenre} from "../../storage";
import css from './NavGenreList.module.css';


export const NavGenreList: FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genreReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);

    useEffect( () => {
        dispatch(getAllGenres());
    },[])

    return (
        <div className={css.dropdown}>
            <button className={switcher ? css.dropBtn : `${css.dropBtn} ${css.dropBtnNight}`}>Genres</button>
            <div className={css.dropdownContent}>
                {genres.map(genre =>
                    <Link to={`genres/${genre.name}`} onClick={() => dispatch(setGenre(genre.id))} key={genre.id}>{genre.name}</Link>
                )}
            </div>
        </div>
    );
};
