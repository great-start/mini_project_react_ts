import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Footer, Header} from '..';
import css from './Home.module.css';

export const Home: FC = () => {

    const {switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <>
            <div className={switcher ? css.mainWrapDay : css.mainWrapNight}>
                <div className={switcher ? css.headerWrap_day : css.headerWrap_night}>
                    <Header/>
                </div>
                <div className={switcher ? css.main_day : css.main_night}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    );
};
