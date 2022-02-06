import React, {FC} from 'react';

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
}

export const MovieCard: FC<Partial<IProps>> = ({movie}) => {

    console.log(movie);

    return (
        <div>

        </div>
    );
};
