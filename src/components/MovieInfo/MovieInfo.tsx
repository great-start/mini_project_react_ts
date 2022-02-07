import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import {picUrl} from "../../constants";
import {useAppSelector} from "../../hooks";

export const MovieInfo: FC = () => {

    const {state}:any = useLocation();
    console.log(state)

    return (
        <div>
            {/*<img src={`${picUrl.w1280}/${state.backdrop_path}`} alt={}/>*/}
        </div>
    );
};
