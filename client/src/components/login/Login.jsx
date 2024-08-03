import { useState } from 'react';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {email: '', password: ''};

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({email, password}) => {
        if(!values.email || !values.password) {
            setError('All fields are required!');
            return;
        }

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            if(err.message === 'Login or password don\'t match') {
                err.message = 'Email or password don\'t match!';
            }

            setError(err.message);
        }
    }

    const {values, changeHandler, submitHandler} = useForm(initialValues, loginHandler);

    return (
        <div className={styles.container}>
            <h1 className={styles.login}>Login</h1>
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

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>
                            {error}
                        </span>
                    </p>
                )}

                <input type="submit" defaultValue="Login" />
            </form>
            <p className={styles.account}>
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </div>
    );
}