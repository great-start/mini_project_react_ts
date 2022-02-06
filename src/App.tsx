import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";


import './App.module.css';
import {Layout, MoviesList} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/movies'} element={<MoviesList/>}/>
            </Route>

        </Routes>
    );
};

export default App;