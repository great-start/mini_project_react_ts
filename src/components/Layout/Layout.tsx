import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import css from './Header.module.css';
import {Header} from "../Header/Header";

export const Layout: FC = () => {

    return (
        <>
            <div>
                <Header/>
            </div>
            <Outlet/>
        </>
    );
};
