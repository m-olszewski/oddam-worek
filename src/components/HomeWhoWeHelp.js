import React from 'react';
import {Element} from 'react-scroll';
import '../scss/_HomeWhoWeHelp.scss';
import TitleSVG from "./TitleSVG";

const SingleOrganization = (props) => {
    return (
        <div className="single-organization">
            <div className="single-organization-left">
                <span className="fundacja">Fundacja
                    <span className="fundacja-name"> "{props.fundName}"</span>
                </span>
                <span className="mission">Cel i misja:
                    <span className="mission-text"> {props.missionText}</span>
                </span>
            </div>
            <div className="single-organization-right">
                {props.items}
            </div>
        </div>
    );
};

const SingleBtn = (props) => {
    return (
        <div className="home-wwh-btn-single">{props.title}</div>
    );
};

const HomeWhoWeHelp = () => {
    return (
        <Element name="organizations">
            <div className="home-wwh container">
                <TitleSVG title1line="Komu pomagamy?"/>
                <div className="home-wwh-btns">
                    <SingleBtn title="Fundacjom"/>
                    <SingleBtn title="Organizacjom pozarządowym"/>
                    <SingleBtn title="Lokalnym zbiórkom"/>
                </div>
                <p className="home-wwh-text">
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.
                </p>
                <div className="home-wwh-organizations">
                    <SingleOrganization fundName="Dbam o zdrowie"
                                        missionText="Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
                                        items="ubrania, jedzenie, sprzęt AGD, meble, zabawki"/>
                    <SingleOrganization fundName="Dla dzieci"
                                        missionText="Pomoc dzieciom z ubogich rodzin."
                                        items="ubrania, meble, zabawki"/>
                    <SingleOrganization fundName="Bez domu"
                                        missionText="Pomoc dla osób nie posiadających miejsca zamieszkania."
                                        items="ubrania, jedzenie, ciepłe koce"/>
                </div>
                <div className="home-wwh-organizations-paginationCounter">
                    <span className="single-paginationCounter">1</span>
                    <span className="single-paginationCounter">2</span>
                    <span className="single-paginationCounter">3</span>
                </div>
            </div>
        </Element>
    );
};

export default HomeWhoWeHelp;