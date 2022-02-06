import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";


import './App.module.css';
import {Layout} from "./components";

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}/>
        </Routes>
    );
};

export default App;