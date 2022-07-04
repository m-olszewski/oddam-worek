import React, {useState} from 'react';
import {Element} from 'react-scroll';
import '../scss/_HomeContact.scss';
import TitleSVG from "./TitleSVG";
import FBSvg from "../assets/icons/Facebook.svg";
import IGSvg from "../assets/icons/Instagram.svg";

const HomeContact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMessages, setErrorMessages] = useState(null);
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function validate(values) {
        const errorMessages = {};

        if (values.name.includes(' ')) {
            errorMessages.name = 'Podane imię jest nieprawidłowe!';
        }

        if (!values.email.match('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')) {
            errorMessages.email = 'Podany email jest nieprawidłowy!';
        }

        if (values.message.length < 120) {
            errorMessages.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
        }

        return Object.keys(errorMessages).length > 0
            ? errorMessages
            : null;
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(values)
        const errorMessages = validate(values);
        setErrorMessages(errorMessages);
        if (!errorMessages) {
            setSuccess(true)

            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {"Content-Type": "application/json"},
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`${response.status} (${response.statusText})`);
                    }
                    return response;
                })
                .then(response => response.json())
                .catch(console.log)
            values.name = "";
            values.email = "";
            values.message = "";
        } else {
            console.log(errorMessages)
        }

    };

    return (
        <Element name="contact">
            <div className="home-contact-bg">
                <div className="home-contact container">
                    <div className="home-contact-form">
                        <TitleSVG title1line="Skontaktuj się z nami"/>
                        <span className={`form-success-msg ${success ? "" : "hidden"}`}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</span>

                        <form noValidate className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-up">
                                <div className="inputbox-content">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input id="name" name="name" type="text" value={values.name} onChange={handleChange}
                                           className={`${errorMessages?.name && "input-error"}`} required/>
                                    {errorMessages?.name &&
                                        <span className="error-message">{errorMessages?.name}</span>}
                                </div>
                                <div className="inputbox-content">
                                    <label htmlFor="email">Wpisz swój e-mail</label>
                                    <input id="email" name="email" type="email" value={values.email}
                                           onChange={handleChange}
                                           className={`${errorMessages?.email && "input-error"}`} required/>
                                    {errorMessages?.email &&
                                        <span className="error-message">{errorMessages?.email}</span>}
                                </div>
                            </div>
                            <div className="form-mid inputbox-content">
                                <label htmlFor="message">Wpisz swoją wiadomość</label>
                                <textarea id="message" name="message" value={values.message} onChange={handleChange}
                                          className={`${errorMessages?.message && "input-error"}`} required/>
                                {errorMessages?.message &&
                                    <span className="error-message">{errorMessages?.message}</span>}
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