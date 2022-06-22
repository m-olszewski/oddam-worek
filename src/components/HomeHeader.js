import React from 'react';
import '../scss/_HomeHeader.scss';
import {Link} from "react-router-dom";
import HomeHeaderNav from "./HomeHeaderNav";


const HomeHeader = () => {
    return (
        <div className="home-header container">
            <div className="home-header-logging">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
            <HomeHeaderNav/>
        </div>
    );
};

export default HomeHeader;