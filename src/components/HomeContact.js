import React, {useState} from 'react';
import {Element} from 'react-scroll';
import '../scss/_HomeContact.scss';
import TitleSVG from "./TitleSVG";
import FBSvg from "../assets/icons/Facebook.svg";
import IGSvg from "../assets/icons/Instagram.svg";

const HomeContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam beatae consequuntur dicta doloremque dolorum expedi');

    let errors = [];

    function handleNameChange(event) {
        setName(event.target.value);

        if (event.target.value.includes(' ')) {
            errors.push('Podane imię jest nieprawidłowe!');
            document.querySelector('.name-error-msg').innerText = 'Podane imię jest nieprawidłowe!';
            document.querySelector('#name').classList.add('input-error');
        } else {
            document.querySelector('.name-error-msg').innerText = '';
            document.querySelector('#name').classList.remove('input-error');
        }

    }

    function handleEmailChange(event) {
        setEmail(event.target.value);


        if (event.target.value.match('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')) {
            document.querySelector('.email-error-msg').innerText = '';
            document.querySelector('#email').classList.remove('input-error');
        } else {
            errors.push('Podany email jest nieprawidłowy!');
            document.querySelector('.email-error-msg').innerText = 'Podany email jest nieprawidłowy!';
            document.querySelector('#email').classList.add('input-error');
        }
    }
    function handleMsgChange(event) {
        setMsg(event.target.value);

        console.log(event.target.value.length);
        if (event.target.value.length <= 119) {
            errors.push('Wiadomość musi mieć conajmniej 120 znaków!');
            document.querySelector('.msg-error-msg').innerText = 'Wiadomość musi mieć conajmniej 120 znaków!';
            document.querySelector('#msg').classList.add('input-error');
        } else {
            document.querySelector('.msg-error-msg').innerText = '';
            document.querySelector('#msg').classList.remove('input-error');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(errors)
        document.querySelector('.form-success-msg').classList.add('hidden');
if (errors.length) {
    document.querySelector('.form-success-msg').classList.remove('hidden');
}
else {
    document.querySelector('.form-success-msg').classList.add('hidden');

}
console.log(e);
    };

    return (
        <Element name="contact">
                        <div className="home-contact-bg">
                <div className="home-contact container">
                    <div className="home-contact-form">
                        <TitleSVG title1line="Skontaktuj się z nami"/>
                        <span className="form-success-msg hidden">Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</span>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-up">
                                <div className="inputbox-content">
                                    <label htmlFor="name">Wpisz swoje imię</label>
                                    <input id="name" name="name" type="text" value={name} onChange={handleNameChange}
                                           required/>
                                    <span className="name-error-msg error-msg"></span>
                                </div>
                                <div className="inputbox-content">
                                    <label htmlFor="email">Wpisz swój e-mail</label>
                                    <input id="email" name="email" type="email" value={email}
                                           onChange={handleEmailChange} required/>
                                    <span className="email-error-msg error-msg"></span>
                                </div>
                            </div>
                            <div className="form-mid inputbox-content">
                                <label htmlFor="msg">Wpisz swoją wiadomość</label>
                                <textarea id="msg" name="msg" value={msg} onChange={handleMsgChange} required/>
                                <span className="msg-error-msg error-msg"></span>
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