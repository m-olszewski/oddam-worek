import React, {useState} from 'react';
import '../scss/_SignIn.scss';


const SignIn = () => {
    const [values, setValues] = useState({email: '', password: ''});
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

        return Object.keys(errorMessages).length > 0
            ? errorMessages
            : null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const errorMessages = validate(values);
        setErrorMessages(errorMessages);
        console.log(errorMessages)
        if (errorMessages) return;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputbox-content">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" value={values.email} onChange={handleChange}
                           className="signin-input" required/>
                    {errorMessages?.email &&
                        <span className="error-message">{errorMessages?.email}</span>}
                </div>
                <div className="inputbox-content">
                    <label htmlFor="password">Hasło</label>
                    <input id="password" name="password" type="text" value={values.password} onChange={handleChange}
                           className="signin-input" required/>
                    {errorMessages?.password &&
                        <span className="error-message">{errorMessages?.password}</span>}
                </div>
                <div>
                    <button value="Załóż konto"/>
                    <input type="submit" value="Zaloguj"/>
                </div>
            </form>
        </div>
    );
};

export default SignIn;