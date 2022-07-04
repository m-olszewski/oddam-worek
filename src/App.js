import './scss/App.scss';
import React from 'react';
import Home from "./components/Home";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/logowanie" element={<SignIn/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;