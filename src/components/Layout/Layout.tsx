import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './Layout.module.css';

export const Layout: FC = () => {

    return (
        <>
            <div>
                <Header/>
            </div>
            <div className={css.main}>
                <Outlet/>
            </div>
        </>
    );
};
