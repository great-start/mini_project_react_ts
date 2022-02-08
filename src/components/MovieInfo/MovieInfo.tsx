import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import {picUrl} from "../../constants";
import {IMovie} from "../../interfaces";


export const MovieInfo: FC = () => {

    const location = useLocation();
    const state = location.state as IMovie;
    console.log(state);

    return (
        <div>
            <img src={`${picUrl.w1280}/${state.backdrop_path}`} alt={state.title}/>
        </div>
    );
};

