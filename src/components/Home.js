import React from 'react';

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWTF from "./HomeWTF";

import '../scss/_Home.scss';
import HomeOpening from "./HomeOpening";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeOpening/>
            <HomeThreeColumns/>
            <HomeWTF/>
            <HomeAbout/>
            <HomeWhoWeHelp/>
        </>
    );
};

export default Home;