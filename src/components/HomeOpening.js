import React from 'react';
import '../scss/_HomeOpening.scss';
import {Link} from "react-router-dom";

const HomeOpening = () => {
    return (
        <div className="home-opening">
            obrazek z lewej, tekst i linki z prawej
            <Link to="/logowanie">Oddaj rzeczy</Link>

        </div>
    );
};

export default HomeOpening;