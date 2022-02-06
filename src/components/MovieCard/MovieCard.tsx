import React, {FC} from 'react';

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie;
}

export const MovieCard: FC<IProps> = ({movie : {id}}) => {


    return (
        <div>
            {id}
        </div>
    );
};
