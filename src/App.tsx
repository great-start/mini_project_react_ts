import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {Layout, MovieInfo, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'popular'} element={<MoviesList/>}/>
                <Route path={'/movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres/:genre'} element={<MoviesList/>}/>
            </Route>
        </Routes>
    );
};

export default App;