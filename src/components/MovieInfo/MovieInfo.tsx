import React, {FC} from 'react';
import {picUrl} from "../../constants";
import {useAppSelector} from "../../hooks";


export const MovieInfo: FC = () => {

    const {movieInfo} = useAppSelector(state => state.moviesReducer);

    if (!movieInfo) return null;

    return (
        <div>
            <img src={`${picUrl.w1280}/${movieInfo.backdrop_path}`} alt={movieInfo.title}/>
        </div>
    );
};

