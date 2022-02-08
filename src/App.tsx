import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import {Layout, MovieInfo, MoviesList} from "./components";
import {Gner} from "./components/gner/gner";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'popular'} element={<MoviesList/>}/>
                <Route path={'movies/:id'} element={<MovieInfo/>}/>
                <Route path={'genres/:genre'} element={<Gner/>}/>
            </Route>
        </Routes>
    );
};

export default App;