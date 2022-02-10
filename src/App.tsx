import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {Home, MovieInfo, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route path={'popular'} element={<MoviesList/>}/>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres/:genre'} element={<MoviesList/>}/>
            </Route>
            <Route path={'*'} element={<Home/>}/>
        </Routes>
    );
};

export default App;