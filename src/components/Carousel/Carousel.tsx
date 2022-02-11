import React, {FC, useEffect} from 'react';
import {useInterval} from "beautiful-react-hooks";
import {Link} from 'react-router-dom';

import {picUrl} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getUpcomingMovies, setVisible, showMovieByID} from "../../storage";
import css from './Carousel.module.css';

export const Carousel: FC = () => {

    const {showMovie, style} = useAppSelector(state => state.upcomingReducer);
    const {switcher} = useAppSelector(state => state.switcherReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, []);

    useInterval(() => {
        dispatch(showMovieByID())
    }, 4000);

    function changeStyle() {
        dispatch(setVisible())
    }

    return (
        <div className={css.items}>
            <h2 className={switcher ? css.t_day : css.t_night}>Upcoming Films: </h2>
            <div className={css.itemsBox}>
                {showMovie.map(movie =>
                    <div key={movie.id} className={style ? css.item : css.hide} onLoad={() => changeStyle()}>
                        <Link to={`/movies/${movie.id}`} state={movie}>
                            <img src={`${picUrl.w780}${movie.poster_path}`} alt={movie.original_title}/>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
