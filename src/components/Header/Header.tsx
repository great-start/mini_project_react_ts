import React, {FC, useEffect, useState} from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

export const Header: FC = () => {

    const [list, setList] = useState<any[]>([]);

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=51706adb2287ca4d46e357b0ad661ab1&language=en-US')
            .then(value => value.json())
            .then(list => setList(list.genres));
    },[])

    return (
        <div className={css.header}>
            <div className={css.nav}>
                <NavLink to={'/movies'}>Popular</NavLink>
                <div>
                    <NavLink to={'/genres'}>Genres
                        <select>
                            {list.map(item => <option>{item.name}</option>)}
                        </select>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
