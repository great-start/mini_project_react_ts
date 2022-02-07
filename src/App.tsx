import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";


import './App.css';
import {Layout, MovieInfo, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'movies'} element={<MoviesList/>}/>
                <Route path={'{title}'} element={<MovieInfo/>}/>
            </Route>
        </Routes>
    );
};

export default App;