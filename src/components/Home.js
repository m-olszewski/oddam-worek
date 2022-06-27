import React from 'react';
import '../scss/_Home.scss';

import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeWTF from "./HomeWTF";
import HomeOpening from "./HomeOpening";
import HomeAbout from "./HomeAbout";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeOpening/>
            <HomeThreeColumns/>
            <HomeWTF/>
            <HomeAbout/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </>
    );
};

export default Home;