import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {picUrl} from "../../constants";


export const MovieCard: FC<{movie:IMovie}> = ({movie : {id,poster_path}}) => {

    return (
        <div>
            <div>{id}</div>
            <img src={`${picUrl.w185}${poster_path}`} alt=""/>
        </div>

    );
};
