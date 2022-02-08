import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './Layout.module.css';
import {useAppSelector} from "../../hooks";

export const Layout: FC = () => {

    const {status} = useAppSelector(state => state.switcherReducer);

    return (
        <>
            <div className={status ? css.headerWrap_day : css.headerWrap_night}>
                <Header/>
            </div>
            <div className={css.main}>
                <Outlet/>
            </div>
        </>
    );
};
