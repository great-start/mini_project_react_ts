import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {getUpcomingMovies, setVisible, showMovieByID} from "../../storage/slices/upcoming.slice";
import css from './Carousel.module.css';
import {useInterval} from "beautiful-react-hooks";
import {picUrl} from "../../constants";

export const Carousel = () => {

    const {movies: {page, results}, showMovie, style, upcomingMovieID} = useAppSelector(state => state.upcomingReducer);
    const dispatch = useDispatch();

    console.log(results);
    console.log(showMovie);

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
            <div className={css.itemsBox}>
                {showMovie && showMovie.map(movie =>
                    <div className={style ? css.item : css.hide} onLoad={() => changeStyle()}>
                        <img src={`${picUrl.w780}${movie.poster_path}`} alt={movie.original_title}/>
                    </div>
                )}</div>
        </div>
    );
};
