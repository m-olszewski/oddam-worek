import React from 'react';
import '../scss/_HomeWTF.scss';
import {Element} from 'react-scroll';
import TitleSVG from "./TitleSVG";
import TShirtSvg from "../assets/icons/Icon-1.svg";
import BagSvg from "../assets/icons/Icon-2.svg";
import LupeSvg from "../assets/icons/Icon-3.svg";
import ArrowsSvg from "../assets/icons/Icon-4.svg";
import {Link} from "react-router-dom";

const Article = (props) => {
    return (
        <article className="home-wtf-articles-single">
            {props.svg}
            <h6 className="home-wtf-articles-single-title">
                {props.title}
            </h6>
            <p className="home-wtf-articles-single-text">
                {props.text}
            </p>
        </article>
    )
}

const HomeWtf = () => {
    return (
        <Element name="wtf">
            <div className="home-wtf">
                <TitleSVG title1line="Wystarczą 4 proste kroki"/>
                <div className="home-wtf-articles">
                    <Article svg={<img src={TShirtSvg}  alt="tshit icon"/>}
                             title="Wybierz rzeczy"
                             text="ubrania, zabawki, sprzęt i inne"/>
                    <Article svg={<img src={BagSvg}  alt="bag icon"/>}
                             title="Spakuj je"
                             text="skorzystaj z worków na śmieci"/>
                    <Article svg={<img src={LupeSvg}  alt="lupe icon"/>}
                             title="Zdecyduj komu chcesz pomóc"
                             text="wybierz zaufane miejsce"/>
                    <Article svg={<img src={ArrowsSvg}  alt="arrows icon"/>}
                             title="Zamów kuriera"
                             text="kurier przyjedzie w dogodnym terminie"/>
                </div>
                <Link to="/logowanie">
                    <div className="home-wtf-btn">Oddaj<br/>
                        rzeczy
                    </div>
                </Link>
            </div>
        </Element>
    );
};

export default HomeWtf;