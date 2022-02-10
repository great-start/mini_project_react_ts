import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './Home.module.css';
import {useAppSelector} from "../../hooks";
import {Footer} from "../Footer/Footer";

export const Home: FC = () => {

    const {switcher} = useAppSelector(state => state.switcherReducer);

    return (
        <>
            <div className={css.mainWrap}>
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
