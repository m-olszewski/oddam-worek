import React from 'react';
import {Link, animateScroll as scroll} from "react-scroll";

const HomeHeaderNav = () => {
    return (
        <nav className="home-header-nav">
            <ul className="menu-list">
                <li>
                    <a onClick={scroll.scrollToTop} href="/">Start</a>
                </li>
                <li>
                    <Link to="wtf"
                          spy={true}
                          smooth={true}
                          duration={500}
                    >O co chodzi?</Link>
                </li>
                <li>
                    <Link to="about"
                          spy={true}
                          smooth={true}
                          duration={500}
                    >O nas</Link>
                </li>
                <li>
                    <Link to="organizations"
                          spy={true}
                          smooth={true}
                          duration={500}
                    >Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                    >Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HomeHeaderNav;