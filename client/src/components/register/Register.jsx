import { useState } from 'react';
import { useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom';

const initialValues = { email: '', password: '', repass: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({email, password, repass}) => {
        if(!values.email || !values.password || !values.repass) {
            setError('All fields are required!');
            return;
        }

        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
            setError('This is not a valid email!');
            return;
        }

        if(values.password.length < 4) {
            setError('The password must be at least 4 characters long!');
            return;
        }

        if(values.email.includes(' ') || values.password.includes(' ') || values.repass.includes(' ')) {
            setError('Email, password and repass must not include whitespaces!');
            return;
        }
        
        if(values.password !== values.repass) {
            setError('Passwords don\'t match!');
            return;
        }
        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);
    return (
        <div className={styles.container}>
            <h1 className={styles.register}>Register</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="john@abv.bg"
                />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="****"
                />
                <br />
                <br />
                <label htmlFor="repass">Repeat password:</label>
                <input
                    type="password"
                    id="repass"
                    name="repass"
                    value={values.repass}
                    onChange={changeHandler}
                    placeholder="****"
                />
                <br />
                <br />

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>
                            {error}
                        </span>
                    </p>
                )}

                <input type="submit" defaultValue="Register" />
            </form>
            <p className={styles.account}>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>

    );
}