import React from 'react';
import '../scss/_HomeOpening.scss';
import {Link} from "react-router-dom";
import TitleSVG from "./TitleSVG";

const HomeOpening = () => {
    return (
        <div className="home-opening container">
            <div className="home-opening-left">
                <img src={require('../assets/images/Home-Hero-Image.jpg')} alt="home-hero"/>
            </div>
            <div className="home-opening-right">
                <TitleSVG title1line="Zacznij pomagać!" title2line="Oddaj niechciane rzeczy w zaufane ręce"/>
                <div className="home-opening-right-btns">
                    <Link to="/logowanie">
                        <div className="home-opening-right-btn-single">Oddaj<br/>
                            rzeczy
                        </div>
                    </Link>

                    <div className="home-opening-right-btn-single">
                        <Link to="/logowanie">Zorganizuj<br/>
                            zbiórkę</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOpening;