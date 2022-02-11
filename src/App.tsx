import React, {FC} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {Carousel, Home, MovieInfo, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route index element={<Carousel/>}/>
                <Route path={'popular'} element={<MoviesList/>}/>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres/:genre'} element={<MoviesList/>}/>
            </Route>
            <Route path={'*'} element={<Navigate to={'/'} replace={true}/>}/>
        </Routes>
    );
};

export default App;