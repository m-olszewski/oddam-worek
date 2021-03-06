import React, {useState} from 'react';
import '../scss/_SignIn.scss';


const SignIn = () => {
    const [values, setValues] = useState({email: '', password: '', password2: ''});
    const [errorMessages, setErrorMessages] = useState(null);

    function handleChange(event) {
        const {name, value} = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    function validate(values) {
        const errorMessages = {};

        if (!values.email.match('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')) {
            errorMessages.email = 'Podany email jest nieprawidłowy!';
        }
        if (values.password.length < 6) {
            errorMessages.password = 'Podane hasło jest za krótkie!';
        }
        if (values.password.value !== values.password2.value) {
            errorMessages.password2 = 'Podane hasła nie są identyczne';
        }

        return Object.keys(errorMessages).length > 0
            ? errorMessages
            : null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(values.password, values.password2)

        const errorMessages = validate(values);
        setErrorMessages(errorMessages);

        console.log(errorMessages)

        if (errorMessages) return;
    }

    return (
        <div>
            <form noValidate onSubmit={handleSubmit}>
                <div className="inputbox-content">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" value={values.email} onChange={handleChange}
                           className="signin-input" required/>
                    {errorMessages?.email &&
                        <span className="error-message">{errorMessages?.email}</span>}
                </div>
                <div className="inputbox-content">
                    <label htmlFor="password">Hasło</label>
                    <input id="password" name="password" type="password" value={values.password} onChange={handleChange}
                           className="signin-input" required/>
                    {errorMessages?.password &&
                        <span className="error-message">{errorMessages?.password}</span>}
                </div>
                <div className="inputbox-content">
                    <label htmlFor="password2">Powtórz hasło</label>
                    <input id="password2" name="password2" type="password" value={values.password2} onChange={handleChange}
                           className="signin-input" required/>
                    {errorMessages?.password2 &&
                        <span className="error-message">{errorMessages?.password2}</span>}
                </div>
                <div>
                    <button value="Zaloguj się"/>
                    <input type="submit" value="Załóż konto"/>
                </div>
            </form>
        </div>
    );
};

export default SignIn;