import React from 'react';
import {Element} from 'react-scroll';
import '../scss/_HomeContact.scss';
import TitleSVG from "./TitleSVG";
import FBSvg from "../assets/icons/Facebook.svg";
import IGSvg from "../assets/icons/Instagram.svg";

const HomeContact = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <Element name="contact">
            <div className="home-contact-bg">
                <div className="home-contact container">
                    <div className="home-contact-form">
                        <TitleSVG title1line="Skontaktuj się z nami"/>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-up">
                                <div className="inputbox-content">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input id="name" name="name" type="text" required/>
                                </div>
                                <div className="inputbox-content">
                                    <label htmlFor="email">Wpisz swój e-mail</label>
                                    <input id="email" name="email" type="email" required/>
                                </div>
                            </div>
                            <div className="form-mid inputbox-content">
                                <label htmlFor="msg">Wpisz swoją wiadomość</label>
                                <textarea id="msg" name="msg" required/>
                            </div>
                            <input className="form-down" type="submit" value="Wyślij"/>
                        </form>
                    </div>
                    <div className="home-contact-footer">
                        <span className="home-contact-footer-copyright">Copyright by Coders Lab</span>
                        <div className="home-contact-footer-icons">
                            <img src={FBSvg} alt="Facebook icon"/>
                            <img src={IGSvg} alt="Facebook icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default HomeContact;