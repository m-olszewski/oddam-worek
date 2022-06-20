import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeOpening from "./HomeOpening";

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeOpening/>
            <HomeThreeColumns/>
        </div>
    );
};

export default Home;