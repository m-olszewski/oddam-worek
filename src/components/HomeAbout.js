import React from 'react';
import '../scss/_HomeAbout.scss';
import {Element} from 'react-scroll';
import TitleSVG from "./TitleSVG";
import {ReactComponent as SignSvg} from "../assets/icons/Icon-4.svg";


const HomeAbout = () => {
    return (
        <Element name="about">
            <div className="home-about">
                <div className="home-about-left">
                    <TitleSVG title1line="O nas"/>
                    <div>
                    <p className="home-about-text">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <SignSvg/>
                    </div>

                </div>
                <div className="home-about-right">
                    <img src={require('../assets/images/People.jpg')} alt="people"/>

                </div>
            </div>

        </Element>
    );
};

export default HomeAbout;