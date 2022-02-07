import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";


import './App.css';
import {GenreList, Layout, MovieInfo, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'movies/:title'} element={<MovieInfo/>}/>
                <Route path={'genres/:genre'} element={<GenreList/>}/>
            </Route>
        </Routes>
    );
};

export default App;