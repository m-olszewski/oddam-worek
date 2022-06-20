import React from 'react';

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWTF from "./HomeWTF";

import '../scss/_Home.scss';
import HomeOpening from "./HomeOpening";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeOpening/>
            <HomeThreeColumns/>
            <HomeWTF/>
        </>
    );
};

export default Home;