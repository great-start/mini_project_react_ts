import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {getUpcomingMovies, setVisible, showMovieByID} from "../../storage/slices/upcoming.slice";
import css from './Carousel.module.css';
import {useInterval} from "beautiful-react-hooks";
import {picUrl} from "../../constants";

export const Carousel = () => {

    const {movies: {page}, showMovie, style} = useAppSelector(state => state.upcomingReducer);
    const dispatch = useDispatch();

    const {poster_path, original_title} = showMovie;

    useEffect(() => {
        dispatch(getUpcomingMovies(page));
    }, [page]);

    useInterval(() => {
        dispatch(showMovieByID())
    },4000);

    function changeStyle() {
        dispatch(setVisible())
    }

    return (
        <div className={css.items}>
            <h2>Upcoming Films: </h2>
            <div className={style ? css.item : css.hide} onLoad={() => changeStyle()}>
                <img src={`${picUrl.w780}${poster_path}`} alt={original_title}/>
            </div>
        </div>
    );
};
