import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {basePicUrl, picUrls} from "../../constants";

interface IProps {
    movie: IMovie;
}

export const MovieCard: FC<IProps> = ({movie : {id,poster_path}}) => {

    return (
        <div>
            <div>{id}</div>
            <img src={`${basePicUrl}${picUrls.w185}${poster_path}`} alt=""/>
        </div>

    );
};
